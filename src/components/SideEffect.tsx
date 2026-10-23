import { memo, useCallback, useMemo, useState } from "react"

const SideEffect = () =>
{
    const [isClick, setIsClick] = useState(false)
    const [products, setProduct] = useState([
        {
      name: "Hello",
      type: true,
    },
    {
      name: "hi",
      type: false,
    },
    {
      name: "hey",
      type: true,
    },
    ])
    const newProduct = useCallback(() =>
    {
        setProduct([
            ...products,
            {
                name: "yo",
                type: false,
            },
        ])
    }, [products])
    const data = useMemo(() =>
    {
        console.log("updated")
        return products.map((p) => {return(p)})
    }, [products])
    return (
        <div className="">
            <div className={`${isClick ? "bg-green-500" : "bg-red-500"} size-20 `}></div>
            <button onClick={() => setIsClick((prev) => !prev)}>change colour</button>
            <AddProduct newProduct={newProduct} products={data} isClick={isClick} />
        </div>
    )
}
interface AddProductProp
{
    newProduct: () => void;
    // products:Array<{
    //     name: string,
    //     type: boolean
    // }>
    products: {
        name: string,
        type: boolean
    }[];
    isClick: boolean;
}
const AddProduct = memo(({newProduct,products}:AddProductProp) =>
{
    return (
        <>
            {products.map((product, idx) => (<p key={idx}>{product.name}</p>))}
            <button onClick={newProduct}>add new product</button>
        </>
    )
})
export default SideEffect;  