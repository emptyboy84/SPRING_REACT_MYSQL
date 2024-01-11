import defaultProfileImage from "assets/image/default-profile-image.jpg";
import { FavoriteListItem } from "types/interface";
import './style.css';
interface Props{
    favoriteListItem:FavoriteListItem;
}

//favoriteListItem component
export default function FavoriteItem({favoriteListItem}:Props){
    //properties
    const {profileImage,nickname}=favoriteListItem;

    //favoriteListItem rendering
    return(
        <div className="favorit-list-item">
            <div className="favorite-list-item-profile-box">
                <div className="favorit-list-item-profile-image" style={{backgroundImage:`url(${profileImage?profileImage:defaultProfileImage})`}}>   
            </div>
                <div className="favorit-list-item-nickname">{nickname}</div>

            </div>
        </div>
    )
}
