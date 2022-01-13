import React, {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../global/GlobalStateContext';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import WifiIcon from '@material-ui/icons/Wifi';
import './StyledProfile.css';

const ProfilePage = () => {

    const navigate = useNavigate();

    const {profile, getProfile, setProfile} = useContext(GlobalContext);

    useEffect(() => {
        getProfile();
        console.log(profile)
    }, []);

    return (
        <div>
            
            
            <div className='Perfil'>
                <div className='Mobile-Signal'>
                    <SignalCellularAltIcon />
                </div>

                {/* <h3 class="Signal-Black">Sketch</h3> */}

                <div className='Wifi'>
                    <WifiIcon />
                </div>

                <div></div>
            </div>
            
        </div>
            

    )
}

export default ProfilePage; 