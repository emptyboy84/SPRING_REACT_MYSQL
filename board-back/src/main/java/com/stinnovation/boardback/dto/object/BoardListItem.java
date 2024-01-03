package com.stinnovation.boardback.dto.object;




import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor

public class BoardListItem {
    private int boardNumber;
    private String title;
    private String content;
    private String boardTitleImage;
    private int favoriteCount;
    private int commentCount;
    private int veiwCount;
    private String writeDateTime;
    private String writerNickname;
    private String writerProfileImage;
}
