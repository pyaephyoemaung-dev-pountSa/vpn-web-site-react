import image from "../constant/image";

const HeroSession = () =>
{
    return (
        <section className="mt-[88.49px] max-w-6xl mx-auto grid grid-cols-2 gap-[40.76px]">
            <div className="flex flex-col items-start">
                <p className="mb-5 text-title text-[50px] font-medium">Want anything to be easy with LaslesVPN.</p>
                <span className="text-[16px] font-normal text-[#4F5665]">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</span>
                <button className="mt-12.5 py-[17.5px] px-[77.5px] bg-[#F53838] text-[16px] font-bold text-[#FFFFFF] rounded-[10px] shadow-xl shadow-[#F5383859]">Get Started</button>
            </div>
            <div className="">
                <img src={image.heroBanner} alt="" />
            </div>
        </section>
    )
}
export default HeroSession;