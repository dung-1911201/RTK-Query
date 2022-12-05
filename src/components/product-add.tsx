import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useAddProductMutation } from "../services/product";

type Props = {};

const ProductAdd = (props: Props) => {
    const [addProduct, { isLoading }] = useAddProductMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        addProduct(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" type="text" {...register("name")} />
                <input placeholder="Price" type="text" {...register("price")} />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default ProductAdd;