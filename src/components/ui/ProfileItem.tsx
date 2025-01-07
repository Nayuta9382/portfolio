import { FC } from "react";
import Text from "../common/Text";

type ProfileItemProps = {
    children: React.ReactNode;  
    title:string
}
 
const ProfileItem: FC<ProfileItemProps> = ({children,title}) => {
    return (    
        <div className="pb-3 pr-3 flex flex-col justify-center gap-1.5 border-b-2 border-black">
            <Text lavel="heading">{title}</Text>
            {children}
        </div>
    );
}
 
export default ProfileItem;