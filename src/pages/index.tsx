import Main from "@/components/layout/Main";
import ProfileLayout from "@/components/layout/top/ProfileLayout";
import SkillLayout from "@/components/layout/top/SkillLayout";
import TopMenuLayout from "@/components/layout/top/TopMenuLayout";
import WorksLayout from "@/components/layout/top/WorksLayout";
import IndexTopImg from "@/components/ui/IndexTopImg";

export default function Home() {
  const navPageData = [{id:'',name:'Top',url:'/'}];
  const navData = [
    {id:'profile', name:'Profile',url:'/'},
    {id:'skill', name: 'Skill',url:'/'},
    {id:'works', name:'Works',url:'/'} 
  ];
 
  return (  
    <Main navPageData={navPageData} navData={navData}>
      <IndexTopImg/>
      <div className="mt-20 flex flex-col gap-16">
        <TopMenuLayout/>
        <ProfileLayout/>
        <SkillLayout/>
        <WorksLayout/>
      </div>
    </Main>
  );
}
