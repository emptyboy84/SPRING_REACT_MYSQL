import './style.css';


//component
export default function Top3Item(){
    
    //rendering
    return(
         <div className='top-3-list-item'>
            <div className='top-3-list-item-main-box'>
                <div className='top-3-list-item-top'>
                    <div className='top-3-list-item-profile-box'>
                        <div className='top-3-list-item-profile-image' style={{backgroundImage:`url()`}}></div>
                    </div>
                    <div className='top-3-list-item-write-box'>
                        <div className='top-3-list-item-nickname'>{'안녕하세요 나는배현명'}</div>
                        <div className='top-3-list-item-write-date'>{'2024.01.04'}</div>
                    </div>
                </div>
                <div className='top-3-list-item-middle'>
                    <div className='top-3-list-item-title'>{'점심이먼고'}</div>
                    <div className='top-3-list-item-content'>{'몰라'}</div>
                </div>
                <div className='top-3-list-item-bottom'>
                    <div className='top-3-list-item-counts'>
                    {`댓글0 좋아요0 조회수0`}
                    </div>

                    
                </div>

            </div>
         </div>
    )
}