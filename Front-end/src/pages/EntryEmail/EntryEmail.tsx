import { Variant } from "components/common/Input/constant"
import { Input } from "components/common/Input/Input"
import { Entry } from "components/Entry/Entry"
import { Links } from "constants/links"

export const EntryEmail = () => {
    return(
        <>
            <Entry title="What’s your email?">
                <Input name="email" placeholder="Email" type="email" variant={Variant.text} />
            </Entry>
        </>
    )
}