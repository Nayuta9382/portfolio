import TopMenuItem from "./TopMenuItem";

const TopMenu = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-10 md:gap-[7%]">
            <TopMenuItem link="/#profile" src="/img/profile.png" title="Profile"/>
            <TopMenuItem link="/#skill" src="/img/skill.png" title="Skill"/>
            <TopMenuItem link="/#works" src="/img/works.png" title="Works"/>
        </div>
    );
}
 
export default TopMenu;