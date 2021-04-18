import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import FindJob from "../../assets/image/FindJob.png";
import NotFindJob from "../../assets/image/NotFindJob.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../assets/image/user.jpg";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto (e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                { isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <span className={s.aboutMe}>
                        Немного обо мне: {profile.aboutMe}
                    </span>
                <div className={s.jobFind}>
                    LookingForAJob: <img src={profile.lookingForAJob === true ? FindJob : NotFindJob}/>
                </div>
            </div>
        </div>
    )

}
export default ProfileInfo;