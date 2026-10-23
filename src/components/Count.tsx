import { useState } from "react"

const Count = () =>
{
    const [count, setCount] = useState<number>(1);
    const handleIncrement = () =>
    {
        setCount(count + 1);
    }
    const handleDecrement = () =>
    {
        setCount(count - 1);
    }
    return (
        <div className="w-full justify-center flex">
            <div className="">
                <p>{count}</p>
                <div className="flex gap-3 items-center">
                    <Button onClick={handleIncrement} title="+" />
                    <Button onClick={handleDecrement} title="-" />
                </div>
            </div>
        </div>
    )
}
    interface ButtonProp
        {
            onClick: () => void;
            title: string;
        }
        const Button = ({ onClick, title }: ButtonProp) =>
        {
            return (
                <button onClick={onClick} className="p-3 bg-blue-200">{title}</button>
            )
        }
export default Count;