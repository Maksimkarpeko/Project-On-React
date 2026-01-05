import { CreationNav } from "components/CreationNav/CreationNav"
import { creationNavigationContent } from "constants/navigationContent"
import { useState } from "react"

export const Creation = () => {
    const [tab, setTab] = useState<string>('');
    return(
        <div className="w-[100%] flex">
            <CreationNav tab={tab} setTab={setTab}/>
            {creationNavigationContent[tab] ?? null}
        </div>
    )
}