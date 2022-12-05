import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hook";
import { fetchProduct } from "../slice/product";
import { useEditProductMutation } from "../services/product";


type Props = {};

const ProductEdit = (props: Props) => {
    const [editProduct, {isLoading: isUpdating}] = useEditProductMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    
    const onSubmit: SubmitHandler<IProduct> = (data) => {
        editProduct(data).unwrap()
        .then(() => {
            alert("Cập nhập thành công")
        }).catch(() => console.log('fail'))
        
    };
    
    useEffect(() => {
        (async () => {
            const { payload: product } = await dispatch(fetchProduct(id as unknown as number));
            reset(product as IProduct);
        })();
    }, [id]);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
                <button>Edit</button>
            </form>
        </div>
    );
};

export default ProductEdit;
