import WorksItem from "../ui/WorksItem";


const WorksLayout = () => {
    return (
        <div className="sm:pl-[5%] md:pl-[2%] lg:pl-[5%] flex    flex-wrap  flex-col sm:flex-row gap-[8%]">
            <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" openFlg />
            <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
            <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
        </div>
    );
}
 
export default WorksLayout;