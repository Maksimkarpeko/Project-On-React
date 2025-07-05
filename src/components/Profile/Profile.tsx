import { ContactUser } from "components/common/ContactUser/ContactUser"
import testImg from 'assets/testImg.svg'


export const Profile = () => {
    return(
        <>
            <div>
                <ContactUser img={testImg} alt="user" name="Test"/>
            </div>
            <div>

            </div>
        </>
    )
}