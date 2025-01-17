import WorksItem from "@/components/ui/WorksItem";
import IndexItemLayout from "./IndexItemLayout";
import H2 from "@/components/common/heading/H2";


const WorksLayout = () => {
    return (
        <div id="works" className="nav pt-6 md:pt-10 relative bg-[url('/img/works-bg.png')] bg-fixed bg-cover  bg-no-repeat bg-[0%_40%]">
            <IndexItemLayout>
                <H2>Works</H2>
                <div className="pt-4 md:mt-5 lg:mt-2 sm:pl-[5%] md:pl-[2%] lg:pl-[3%] flex flex-wrap  flex-col sm:flex-row ss:gap-[8%] md:gap-[5%] lg:gap-[8%]">
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/ideus" imgPath="/img/ideus/ideus.png" openFlg />
                    <WorksItem title="Portfolio" text="Next.jsで作成したPortfolio" link="/" imgPath="/img/portfolio.png" />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/ideus" imgPath="/img/ideus/ideus.png" />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/ideus" imgPath="/img/ideus/ideus.png" />
                    <WorksItem title="Ideus" text="ひとり暮らし情報共有アプリ" link="/ideus" imgPath="/img/ideus/ideus.png" />
                </div>
            </IndexItemLayout>
        </div>
    );
}
 
export default WorksLayout;