import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product";
import {Button, Table, Popconfirm, message} from "antd";
import Column from "antd/es/table/Column";


type Props = {};

const Product = () => {
    const { data: products = [], isLoading, error  } = useGetProductsQuery();
    // console.log(error);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    const removeItem = (id:number) =>{
        message.info("Dũng đúng đẹp")
    }
    return (
        <>
            <Button type="primary">Add</Button>
            <Table 
            dataSource={products.map((item)=>({
                key: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            }))}
            >
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Price" dataIndex="price" key="price" />
                <Column title="Quantity" dataIndex="quantity" key="quantity" />
                <Column
                    title="Action"
                    key="action"
                    render={(product) =>{
                        return(
                            <Popconfirm
                                placement="top"
                                title="Bạn có muốn xoá không?"
                                onConfirm={()=> removeItem(product.key)}
                                okText="Tao đã nghĩ kỹ rồi!"
                                cancelText="Xin mày đấy cho Tao quay xe"
                            >
                                <Button type="primary" danger>
                                    Remove
                                </Button>

                            </Popconfirm>
                        )
                    }}
                ></Column>
            </Table>









            {/* <Link to="/admin/products/add">Add</Link>
            {products.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))} */}
        </>
    );
};

export default Product;