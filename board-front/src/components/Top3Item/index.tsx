
import { BoardListItem } from 'types/interface';
import './style.css';

interface Props{
    top3ListItem:BoardListItem;

}



//component
export default function Top3Item({top3ListItem}:Props){
    //properties
    const {boardNumber,title,content,boardTitleImage}=top3ListItem;
    const {favoriteCount,commentCount,viewCount}=top3ListItem;
    const{writeDateTime,writerNickname, writerProfileImage}=top3ListItem;

    //rendering
    return(
         <div className='top-3-list-item' style={{backgroundImage:`url(${boardTitleImage})`}}>
            <div className='top-3-list-item-main-box'>
                <div className='top-3-list-item-top'>
                    <div className='top-3-list-item-profile-box'>
                        <div className='top-3-list-item-profile-image' style={{backgroundImage:`url(${writerProfileImage})`}}></div>

                    </div>
                    <div className='top-3-list-item-write-box'>
                        <div className='top-3-list-item-nickname'>{writerNickname}</div>
                        <div className='top-3-list-item-write-date'>{writeDateTime}</div>
                    </div>
                </div>
                <div className='top-3-list-item-middle'>
                    <div className='top-3-list-item-title'>{title}</div>
                    <div className='top-3-list-item-content'>{content}</div>
                </div>
                <div className='top-3-list-item-bottom'>
                    <div className='top-3-list-item-counts'>
                    {`댓글0 좋아요${favoriteCount} 조회수${viewCount}`}
                    </div>

                    
                </div>

            </div>
         </div>
    )
}