import IndexItemLayout from "@/components/layout/top/IndexItemLayout";
import TopMenuItem from "@/components/ui/TopMenuItem";

const TopMenuLayout = () => {
    return (
        <IndexItemLayout>
            <div id="menu" className="pt-2 md:pl-[2%] lg:pl-[3%] flex flex-col md:flex-row items-center  gap-10 ss:gap-12  md:gap-[8%] ">
                <TopMenuItem link="/#profile" src="/img/profile.png" title="Profile"/>
                <TopMenuItem link="/#skill" src="/img/skill.png" title="Skill"/>
                <TopMenuItem link="/#works" src="/img/works.png" title="Works"/>
            </div>
        </IndexItemLayout>
    );
}
 
export default TopMenuLayout;