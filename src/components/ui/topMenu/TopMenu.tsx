import IndexItemLayout from "@/components/layout/top/IndexItemLayout";
import TopMenuItem from "./TopMenuItem";

const TopMenu = () => {
    return (
        <IndexItemLayout>
            <div className="pl-[2%] lg:pl-[5%] flex flex-col md:flex-row items-center  gap-10 md:gap-[8%]">
                <TopMenuItem link="/#profile" src="/img/profile.png" title="Profile"/>
                <TopMenuItem link="/#skill" src="/img/skill.png" title="Skill"/>
                <TopMenuItem link="/#works" src="/img/works.png" title="Works"/>
            </div>
        </IndexItemLayout>
    );
}
 
export default TopMenu;