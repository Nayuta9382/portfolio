import Link from "next/link";

const Footer = () => {
    return (
        <footer className="pt-5  pb-6 flex flex-col gap-4 bg-[#483735]">
        {/* <footer className="mt-5 pt-5  pb-6 flex flex-col gap-4 bg-[#645654]"> */}
        {/* <footer className="mt-5 pt-5 border-t-[1px] border-black mb-4 flex flex-col gap-2"> */}
            <div className="flex justify-center gap-5 before:content-['|'] before:text-white">
                <Link className="block text-white hover:text-[rgb(255,255,255,0.8)]  after:content-['|'] after:text-white after:ml-5" href="/">Top</Link>
                <Link className="block text-white hover:text-[rgb(255,255,255,0.8)]  after:content-['|'] after:text-white after:ml-5" href="/#profile">Profile</Link>
                <Link className="block text-white hover:text-[rgb(255,255,255,0.8)]  after:content-['|'] after:text-white after:ml-5" href="/#skill">Skill</Link>
                <Link className="block text-white hover:text-[rgb(255,255,255,0.8)]  after:content-['|'] after:text-white after:ml-5" href="/#works">Works</Link>
            </div>
            <p className="text-center text-white">&copy; Kumagai Nayuta</p>
        </footer>
    );
}
 
export default Footer;