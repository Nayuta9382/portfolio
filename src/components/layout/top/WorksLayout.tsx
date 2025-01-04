import WorksItem from "@/components/ui/WorksItem";
import IndexItemLayout from "./IndexItemLayout";


const WorksLayout = () => {
    return (
        <div className=" relative sm:pl-[5%] md:pl-[2%] lg:pl-[5%]  bg-[url('/img/works-bg.png')] bg-fixed bg-cover  bg-no-repeat bg-[0%_40%]">
            <IndexItemLayout>
                <div className="flex flex-wrap  flex-col sm:flex-row gap-[8%]">
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" openFlg />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
                </div>
                <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/a" imgPath="/img/ideus/ideus.png" />
            </IndexItemLayout>
        </div>
    );
}
 
export default WorksLayout;