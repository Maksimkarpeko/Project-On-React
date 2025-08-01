import type { FC } from "react"
import type { StartProps } from "./type"
import { LogoXL } from "assets/index"
import { Link } from "react-router-dom"
import { Button } from "components/common/Button/Button"
import { Color } from "constants/color"
import { buttonSize } from "components/common/Button/constant"
import { Links } from "constants/links"


export const Start:FC<StartProps> = ({title,...rest}) => {
    return(
        <div {...rest} className="h-screen flex flex-col justify-center items-center">
            <img src={LogoXL} alt="logo" className="mb-4"/>
            <h1 className="mb-2 font-bold text-2xl">{title}</h1>
            <p className="mb-8 text-center">Modern social network <br />
            built for you, not advertisers</p>
            <Link to={Links.singUp}>
                <Button type="button" color={Color.blue} size={buttonSize.sizeL}>
                    Continue with email
                </Button>   
            </Link>
            <p className='mt-5'>If you have account go to {<Link to={Links.singIn} className='text-blue-500 hover:opacity-50  hover:border-b hover:border-blue-600'>Sign In</Link>}</p>
        </div>
    )
}