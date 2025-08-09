import { TestImg } from "assets/index"
import { Size } from "components/common/Avatars/constants"
import { ContactUser } from "components/common/ContactUser/ContactUser"
import { CustomIcon } from "components/common/CustomIcon/CustomIcon"
import { SingOut } from "assets/index"
import { billingBlock, openlangBlock, preferencesBlock, settingBlock } from "constants/customIconArray"
import type { FC } from "react"
import type { SettingNavProps } from "./type"
import clsx from "clsx"
export const SettingNav:FC<SettingNavProps> = ({setTab,tab}) => {
    const handelTab = (tab:string) =>{
        setTab(tab);
    }
    const singOut = () => {
        
    }
    return(
        <div className="w-[25%] border-r h-[98vh]">
            <h1 className="text-2xl font-bold ml-4 mt-3">Setting</h1>
            <div>
                <ContactUser disableHover AvatarSize={Size.Large} alt="test" img={TestImg} name="Name" phoneText="+35785456" nameClass="mt-3 pl-4" statusClass="pl-4" classname="ml-[10px]" /> 
            </div>
            <div className="mt-4">
                {
                    settingBlock.map((item)=>(
                        <CustomIcon 
                            img={item.img} 
                            text={item.text} 
                            activeIcon={item.activeImg} 
                            classnameImg={item.classnameImg} 
                            classname={clsx("cursor-pointer ")}
                            onClick={() => handelTab?.(item.alt)}
                            activeText={item.text}
                            isActive={tab === item.alt}
                            activeClassName="bg-blue-500 text-white"
                            key={item.alt}
                        />
                    ))
                }
                <h2 className="text-lg font-bold ml-4 mt-4">Preferences</h2>
                {
                    preferencesBlock.map((item)=>(
                        <CustomIcon 
                            img={item.img} 
                            text={item.text} 
                            activeIcon={item.activeImg} 
                            classnameImg={item.classnameImg} 
                            classname="cursor-pointer" 
                            onClick={() => handelTab?.(item.alt)}
                            isActive={tab === item.alt}
                            activeText={item.text}
                            activeClassName="bg-blue-500 text-white"
                            key={item.alt}
                        />
                    ))
                }
                <h2 className="text-lg font-bold ml-4 mt-4">Billing</h2>
                {
                    billingBlock.map((item)=>(
                        <CustomIcon 
                            img={item.img} 
                            text={item.text} 
                            activeIcon={item.activeImg} 
                            classnameImg={item.classnameImg} 
                            classname="cursor-pointer" 
                            isActive={tab === item.alt}
                            activeText={item.text}
                            activeClassName="bg-blue-500 text-white"
                            onClick={() => handelTab?.(item.alt)}
                            key={item.alt}
                        />
                    ))
                }
                <h2 className="text-lg font-bold ml-4 mt-4">Openlande</h2>
                {
                    openlangBlock.map((item)=>(
                        <CustomIcon 
                            img={item.img} 
                            text={item.text} 
                            activeIcon={item.activeImg} 
                            classnameImg={item.classnameImg} 
                            classname="cursor-pointer" 
                            isActive={tab === item.alt}
                            activeText={item.text}
                            activeClassName="bg-blue-500 text-white"
                            onClick={() => handelTab?.(item.alt)}
                            key={item.alt}
                        />
                    ))
                } 
                <h2 className="text-lg font-bold ml-4 mt-4">Other</h2>
                <CustomIcon img={SingOut} text={"sing out"} activeIcon={SingOut} classnameImg="pl-4" classname="cursor-pointer" onClick={()=>{
                    console.log("#");
                }}/>
            </div>
        </div>
    )
}