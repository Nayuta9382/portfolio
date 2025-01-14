import H2 from "@/components/common/heading/H2";
import IndexItemLayout from "./IndexItemLayout";
import SkillItem from "@/components/ui/SkillItem";


const SkillLayout = () => {
    return (
        <div id="skill" className="nav py-6 md:pt-10 relative  bg-[url('/img/skill-bg.png')] bg-fixed bg-cover  bg-no-repeat">
            <IndexItemLayout>
                <H2>Skill</H2>
                <div className="w-[95%] sm:w-4/5 md:w-2/3 lg:w-full sm:m-auto mt-4  ss:mt-0 md:pl-[30px] lg:pl-0 pr-2 md:pr-0 lg:pr-4 flex flex-wrap justify-center gap-[8%] gap-y-2 ss:gap-y-1 sm:gap-[10%] sm:gap-y-2  md:gap-[15%] md:gap-y-5 lg:gap-y-4 lg:gap-[10%]">
                    <SkillItem imgName="java.svg" alt="java.svg" name="Java" starCount={5}/>
                    <SkillItem imgName="c.svg" alt="c.svg" name="C" starCount={3}/>
                    <SkillItem imgName="c++.svg" alt="c++.svg" name="C++" starCount={3}/>
                    <SkillItem imgName="php.svg" alt="php.svg" name="PHP" starCount={4}/>
                    <SkillItem imgName="python.svg" alt="python.svg" name="Python" starCount={4}/>
                    <SkillItem imgName="html.svg" alt="html.svg" name="HTML" starCount={5}/>
                    <SkillItem imgName="css.svg" alt="css.svg" name="CSS" starCount={4}/>
                    <SkillItem imgName="tailwindcss.svg" alt="tailwindcss.svg" name="tailwindcss" smName="tailwind"  starCount={3}/>
                    <SkillItem imgName="JavaScript.svg" alt="javaScript.svg" name="JavaScript" starCount={4}/>
                    <SkillItem imgName="TypeScript.svg" alt="typeScript.svg" name="TypeScript" starCount={3}/>
                    <SkillItem imgName="docker.svg" alt="docker.svg" name="docker" starCount={2}/>
                    <SkillItem imgName="next.js.svg" alt="next.js.svg" name="Next.js" starCount={3}/>
                </div>
            </IndexItemLayout>
        </div>
    );
}
 
export default SkillLayout;