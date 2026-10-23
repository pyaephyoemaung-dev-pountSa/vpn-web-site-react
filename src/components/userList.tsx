import image from "../constant/image";

const UserList = () =>
{
    return (
         <section className="mt-[102.49px] max-w-6xl mx-auto grid grid-cols-3 shadow-xl rounded-2xl h-50 items-center">
            <div className="flex justify-center border-r-2 border-[#EEEFF2] gap-9 items-center h-31.25">
                <img src={image.user} alt="" className="size-14"/>
                <ul>
                    <li className="text-[25px] font-bold">90+</li>
                    <li className="text-[#4F5665] text-[20px] font-normal">Users</li>
                </ul>
            </div>
            <div className="flex justify-center border-r-2 border-[#EEEFF2] gap-9 items-center h-31.25">
                <img src={image.location} alt="" className="size-14"/>
                <ul>
                    <li className="text-[25px] font-bold">30+</li>
                    <li className="text-[#4F5665] text-[20px] font-normal">Locations</li>
                </ul>
            </div>
            <div className="flex justify-center border-r-2 border-[#EEEFF2] gap-9 items-center h-31.25">
                <img src={image.server} alt="" className="size-14"/>
                <ul>
                    <li className="text-[25px] font-bold">50+</li>
                    <li className="text-[#4F5665] text-[20px] font-normal">Servers</li>
                </ul>
            </div>
        </section>
    )
}
export default UserList;