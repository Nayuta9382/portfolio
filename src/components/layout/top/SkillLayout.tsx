import H2 from "@/components/common/heading/H2";
import IndexItemLayout from "./IndexItemLayout";
import SkillItem from "@/components/ui/SkillItem";

// 縦のvwを調整







const SkillLayout = () => {
    return (
        <div id="skill" className="nav py-6 md:pt-10 relative  bg-[url('/img/skill-bg.png')] bg-fixed bg-cover  bg-no-repeat">
            <IndexItemLayout>
                <H2>Skill</H2>
                <div className="w-[300px] ss:w-[70%] sm:w-2/3 md:w-2/3 lg:w-[85%] m-auto mt-4  ss:mt-0 md:pl-[30px] lg:pl-0 pr-2 md:pr-0 lg:pr-4 flex flex-wrap justify-start ss:justify-between md:justify-start gap-[12%] ss:gap-[8%] gap-y-2 ss:gap-y-1 sm:gap-[10%] sm:gap-y-2  md:gap-[15%] md:gap-y-5 lg:gap-y-4 lg:gap-[11%]">
                    <SkillItem imgName="html.svg" alt="html.svg" name="HTML" starCount={4}/>
                    <SkillItem imgName="css.svg" alt="css.svg" name="CSS" starCount={4}/>
                    <SkillItem imgName="tailwindcss.svg" alt="tailwindcss.svg" name="tailwindcss" smName="tailwind"  starCount={3}/>
                    <SkillItem imgName="java.svg" alt="java.svg" name="Java" starCount={5}/>
                    <SkillItem imgName="spring.svg" alt="spring.svg" name="SpringBoot" starCount={4} smName="Spring"/>
                    <SkillItem imgName="python.svg" alt="python.svg" name="Python" starCount={3}/>
                    <SkillItem imgName="django.svg" alt="django.svg" name="Django" starCount={2}/>
                    <SkillItem imgName="php.svg" alt="php.svg" name="PHP" starCount={4}/>
                    <SkillItem imgName="laravel.svg" alt="laravel.svg" name="laravel" starCount={4}/>
                    <SkillItem imgName="JavaScript.svg" alt="javaScript.svg" name="JavaScript" starCount={4}/>
                    <SkillItem imgName="typescript.svg" alt="typeScript.svg" name="TypeScript" starCount={3}/>
                    <SkillItem imgName="react.svg" alt="react.svg" name="React" starCount={3}/>
                    <SkillItem imgName="next.js.svg" alt="next.js.svg" name="Next.js" starCount={3}/>
                    <SkillItem imgName="node.svg" alt="node.js.svg" name="Node.js" starCount={4}/>
                    <SkillItem imgName="express.svg" alt="express.svg" name="Express.js" starCount={3} smName="Express"/>
                    <SkillItem imgName="c.svg" alt="c.svg" name="C" starCount={2}/>
                    <SkillItem imgName="c++.svg" alt="c++.svg" name="C++" starCount={2}/>
                    <SkillItem imgName="mysql.svg" alt="mysql.svg" name="MySQL" starCount={4}/>
                    <SkillItem imgName="docker.svg" alt="docker.svg" name="docker" starCount={2}/>
                </div>
            </IndexItemLayout>
        </div>
    );
}
 
export default SkillLayout;