import defaultProfileImage from "asset/image/default-profile-image.png";
import { useNavigate } from "react-router-dom";
import { BoardListItem } from "types/interface";
import './style.css';

interface Props {
    boardListItem:BoardListItem;
}
//component
export default function BoardItem({boardListItem}:Props){
    
    const {boardNumber,title,content,boardTitleImage}=boardListItem;
    const{favoriteCount,commentCount,viewCount}=boardListItem;
    const{writeDateTime,writerNickname,writerProfileImage}=boardListItem;

    //navigate function
    const navigator=useNavigate();

    //event handler(게시물클릭이벤트처리함수)
    const onClickHandle=()=>{
        navigator(boardNumber);
    }


    //rendering
    return (
        <div className="board-list-item" onClick={onClickHandle}>
            <div  className="board-list-item-main-box">
                <div className="board-list-item-top">
                    <div className="board-list-item-profile-box">
                        <div className="board-list-item-profile-image" style={{backgroundImage: `url(${writerProfileImage?writerProfileImage:defaultProfileImage})`}}></div>
                    </div>
                    <div className="board-list-item-write-box">
                        <div className="board-list-item-nickname">{writerNickname}</div>    
                        <div className="board-list-item-write-date">{writeDateTime}</div>   
                    </div>
                </div>
                <div className="board-list-item-middle">
                    <div className="board-list-item-title">{title}</div>
                    <div className="board-list-item-content">{content}</div>
                </div>
                <div className="board-list-item-bottom">
                    <div className="board-list-item-counts">
                        {`댓글${commentCount} 좋아요${favoriteCount} 조회수${viewCount}`}
                    </div>

                </div>
            </div>
        {boardTitleImage !== null && (
            <div  className="board-list-item-image-box">
                <div className="board-list-item-image" style={{backgroundImage:`url(${boardTitleImage})`}}></div>
            </div>
        )}
    </div>
    )
    }
    
    

    