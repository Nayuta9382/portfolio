import H2 from "@/components/common/heading/H2";
import List from "@/components/common/list/List";
import ListItem from "@/components/common/list/ListItem";
import Text from "@/components/common/Text";
import ProfileItem from "@/components/ui/ProfileItem";
import Image from "next/image";
import IndexItemLayout from "./IndexItemLayout";


const ProfileLayout = () => {
    return (
        <div id="profile" className="nav pt-6 md:pt-10 relative  bg-[url('/img/profile-bg.png')] bg-fixed bg-cover  bg-no-repeat">
            <IndexItemLayout>
                <H2>Profile</H2>
                <div className="md:flex gap-[4%] my-6 md:my-10 pl-[5%] md:pl-0 w-full px-4">
                    <div className="w-[70%] sm:w-1/2  md:w-[35%] mb-7 md:mb-0">
                        <Image className=" block sticky top-8 md:m-auto md:mt-4 w-4/5 h-auto border-black  border-[1.5px] rounded-[20px]" src="/img/person.png" alt="profileImg" width={100} height={100}  unoptimized={true}  quality={100}   />
                    </div>
                    <div className="w-[90%] md:w-[60%] flex flex-col gap-4">
                        <ProfileItem title="氏名"><Text>熊谷奈友多</Text></ProfileItem>
                        <ProfileItem title="生年月日"><Text>2004年11月11日</Text></ProfileItem>
                        <ProfileItem title="経歴">
                            <List>
                                <ListItem>
                                    <span className="ss:whitespace-nowrap">2023年3月</span><br/>
                                    <div className="flex flex-wrap w-full gap-x-1">
                                        <span className="block ss:whitespace-nowrap">岩手県立盛岡商業高等学校</span>
                                        <span className="block ss:whitespace-nowrap">情報ビジネス科</span>
                                        <span className="block ss:whitespace-nowrap">卒業</span>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <span className="ss:whitespace-nowrap">2023年4月</span><br/>
                                    <div className="flex flex-wrap w-full gap-x-1">
                                        <span className="ss:whitespace-nowrap">盛岡情報ビジネス＆デザイン専門学校</span>
                                        <span className="ss:whitespace-nowrap">入学</span>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <span className="ss:whitespace-nowrap">2027年3月</span><br/>
                                    <div className="flex flex-wrap w-full gap-x-1">
                                        <span className="ss:whitespace-nowrap">盛岡情報ビジネス＆デザイン専門学校</span>
                                        <span className="ss:whitespace-nowrap">高度情報工学科</span>
                                        <span className="ss:whitespace-nowrap">卒業見込み</span>
                                    </div>
                                </ListItem>
                            </List>
                        </ProfileItem>
                        <ProfileItem title="趣味">
                            <List>
                                <ListItem>ゲーム</ListItem>
                                <ListItem>お菓子鑑賞</ListItem>
                            </List>
                        </ProfileItem>
                        <ProfileItem title="資格">
                            <List>
                                <ListItem>基本情報技術者試験</ListItem>
                                <ListItem>日本商工会議所簿記検定試験2級</ListItem>
                            </List>
                        </ProfileItem>
                    </div>
                </div>
            </IndexItemLayout>
        </div>
    );
}
 
export default ProfileLayout;