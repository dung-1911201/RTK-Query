import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../interfaces/product";
import { useRemoveProductMutation } from "../services/product";

type Props = {};

const ProductRemove = (props: Props) => {
    const [removeProduct, { isLoading }] = useRemoveProductMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IProduct>();

    const onSubmit: SubmitHandler<IProduct> = (data) => {
        removeProduct(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />
                <input type="text" {...register("price")} />
                <button>Xoá</button>
            </form>
        </div>
    );
};

export default ProductRemove;