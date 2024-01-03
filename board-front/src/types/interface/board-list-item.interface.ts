export default interface BoardListItem{
    boardNumber:number;
    title:string;
    content:string;
    boardTitleImage:string|null;
    commentCount:number;
    favoriteCount:number;
    writeDateTime:string;
    writerNickname:string;
    writerProfileImage:string;
    viewCount:number;
}