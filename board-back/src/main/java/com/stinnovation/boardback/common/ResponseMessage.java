package com.stinnovation.boardback.common;

public interface ResponseMessage {
     //http status400
     String VALIDATION_FAILED="validation failed";
     String DUPLCATE_EMAIL="dupalicat email";
     String DUPLCATE_NICKNAME="duplicate nickname";
     String DUPLCATE_TEL_NUMBER="duplicate telnumber";
     String NOT_EXSITED-USER="notexsted user";
     String NOT_EXSITED-BOARD="notexsited board";
     //http status401
     String SIGN_IN_FAIL="sign in fail";
     String AUTHROZATION_FAIL="login informaiton missmatch ";
     
     //http status 403
     String NO_PERMISSION="no permission";
     //http status 500
     String DATABASE_ERROR="database error";
     
 
}
