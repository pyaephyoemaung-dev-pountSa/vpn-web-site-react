import image from "../constant/image";

const Features = () =>
{
    return (
        <section className="mt-[95.83px] max-w-6xl mx-auto grid grid-cols-2 gap-[169.48px]">
            <div className="mb-[131.19px] mt-[53.81px]">
                <img src={image.freeplan} alt="" className="" />
            </div>
            <div className="flex flex-col items-start mt-[107.98px]">
                <p className="mb-5 mx[194.47px] text-title text-[35px] font-medium">We Provide Many Features You Can Use</p>
                <span className="text-[16px] mb-5 font-normal text-[#4F5665]">You can explore the features that we provide with fun and have their own functions each feature.</span>
                <ul>
                    <li className="text-[14px] mb-5 font-normal text-[#4F5665] flex item-center gap-2.5"><img src={image.mark} alt="" className="size-6" /> Powerfull online protection.</li>
                    <li className="text-[14px] mb-5 font-normal text-[#4F5665] flex item-center gap-2.5"><img src={image.mark} alt="" className="size-6" /> Internet without borders.</li>
                    <li className="text-[14px] mb-5 font-normal text-[#4F5665] flex item-center gap-2.5"><img src={image.mark} alt="" className="size-6" /> Supercharged VPN</li>
                    <li className="text-[14px] mb-5 font-normal text-[#4F5665] flex item-center gap-2.5"><img src={image.mark} alt="" className="size-6" /> No specific time limits.</li>
                </ul>
            </div>
        </section>
    )
}
export default Features;