import type { FC } from "react"
import type { EntryProps } from "./type"
import { Link } from "react-router-dom"
import { Button } from "components/common/Button/Button"
import { Color } from "constants/color"
import { buttonSize } from "components/common/Button/constant"
import { Links } from "constants/links"

export const Entry:FC<EntryProps> = ({children,title, ...rest}) => {
    return(
        <div {...rest}>
            <h1>{title}</h1>
            <p>We’ll send you a sign-in code</p>
            {children}
            <Link to={Links.entryEmailPassword}>
                <Button type="button" color={Color.blue} size={buttonSize.sizeL}>
                    Next
                </Button>
            </Link>
        </div>
    )
}