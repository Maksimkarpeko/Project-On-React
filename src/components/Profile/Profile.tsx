import { ContactUser } from "components/common/ContactUser/ContactUser"
import testImg from 'assets/testImg.svg'
import { useUserId } from "store/user/useAllUsersStore"


export const Profile = () => {
    const user = useUserId()
    if (!user) return null
    return(
        <>
            <div className="w-[77.5%] ml-[360px]">
                <div className="">
                    <ContactUser img={testImg} alt="user" name={user.username}/>
                </div>
                <div>

                </div>
            </div>
        </>
        
    )
}