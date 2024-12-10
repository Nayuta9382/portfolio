import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

interface SkillProps {
    imgName:string;
    alt:string;
    name:string;
    smName?:string; // md以下のサイズ時に名前を変えるときに使用
    starCount : 0 | 1 | 2 | 3 | 4 | 5; // 星の数を格納
}
 
const Skill: FC<SkillProps> = ({imgName, alt, name, smName, starCount}) => {
    // Nameを管理するstate
    const [nameValue, setNameValue] = useState('');
    // windowサイズが小さいときのName
    const smNameValue = ( smName === "" || smName === null) ? name : smName;
    // ウィンドウサイズを取得
    const windowSize = useWindowSize();

    useEffect(() => {
        // ウィンドウサイズに合わせてnameを変更
        if(windowSize >= 500){
            // md以上
            setNameValue(name);
        }else{
            // md未満
            if(typeof(smNameValue) === 'string'){
                setNameValue(smNameValue);
            }else{
            }
        }
    },[windowSize]);
    
    const starNames = []; // Starの画像名を格納
    // Starの格納処理
    for(let i = 0; i < 5; i++){
        if(i < starCount){
            starNames.push('star-black.png');
        }else{
            starNames.push('star-white.png');
        }
    }
    return (
        <div className="flex gap-x-[3%] w-[35%] md:w-1/4 lg:w-1/5  min-w-32 h-[15vw] md:h-[9vw] min-h-14 pb-1.5 sm:pb-0 border-b-2 border-black">
            {/* eslint-disable @next/next/no-img-element */}
            <img src={`/img/skill-icon/${imgName}`} alt={alt} className="block w-[30%]  min-h-12" />
            <div className="flex flex-col justify-center gap-y-[6%]  pr-[4%] pt-[2%]">
                <p className="pl-[3%] text-base sm:text-lg lg:text-[22px] font-black">{nameValue}</p>
                <div className="flex gap-x-[3%]">
                    {starNames.map((item, index) => (
                        <Image className="block w-[16%] min-w-[13px]  h-auto" key={index} src={`/img/icon/${item}`} alt="星画像" width={100} height={100}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Skill;