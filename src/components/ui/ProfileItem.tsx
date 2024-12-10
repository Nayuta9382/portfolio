import { FC } from "react";
import Text from "../common/Text";

type ProfileItemProps = {
    children: React.ReactNode;  
    title:string
}
 
const ProfileItem: FC<ProfileItemProps> = ({children,title}) => {
    return (    
        <div className="pb-2 flex flex-col justify-center gap-1.5 border-b-2 border-black">
            <Text lavel="heading">{title}</Text>
            <Text>{children}</Text>
        </div>
    );
}
 
export default ProfileItem;