import 'assets/image/default-profile-image.jpg';
import { CommentListItem } from 'types/interface';
import './style.css';

interface Props{
    commentListItme:CommentListItem;
}
//CommentListItem component 
export default function CommentItem({commentListItme}:Props){

    const{nickname,profileImage,writeDateTime,content}=commentListItme;
    //CommentListItem rendeing
    return(
        <div>
            <div className='comment-list-item'></div>
            <div className='comment-list-item-top'>
                <div className='comment-list-item-profile-box'>
                    <div className='comment-list-item-profile-image' style={{backgroundImage:`url(${profileImage?profileImage:''})`}}></div>


                </div>
                <div className='comment-list-item-nickname'>{nickname}</div>
                <div className='comment-list-item-divider'>{'/|'}</div>
                <div className='comment-list-item-time'>{writeDateTime}</div>



            </div>
            <div className='comment-list-item-main'>
                <div className='comment-list-item-content'>{content}</div>


            </div>
        </div>
    )
}