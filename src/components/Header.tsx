import image from '../constant/image.ts'
import navLink from '../constant/navLink.ts';
interface HeaderProp {
    title: string;
    price? : number;
}
const Headers = ({ title }: HeaderProp) =>
{
    return (
        <nav className="max-w-6xl mx-auto flex items-center justify-between mt-10">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
                <img src={image.Logo} alt="" />
                <h4 className="text-xl font-medium text-title">{title}</h4>
            </div>
            {/* Nav Link */}
            <ul className="flex items-center text-[16px] text-nav gap-10">
                {navLink.map((nav, idx) => (
                    <li key={idx}>{nav}</li>
                ))}
            </ul>
            {/* Login */}
            <div className="flex items-center gap-7.5">
                <button className=" font-medium text-title text-[16px]">Sign In</button>
                <button className=" font-medium py-3 px-11 rounded-full text-primary text-[16px] border border-primary">Sign Up</button>
            </div>
        </nav>
    );
};
export default Headers;