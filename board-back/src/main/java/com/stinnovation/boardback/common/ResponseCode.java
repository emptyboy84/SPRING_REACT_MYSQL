package com.stinnovation.boardback.common;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Scalar.String;

public interface ResponseCode {
    //http status200
    String SUCESS="SU";
    
    //http status400
    String VALIDATION_FAILED="VF";
    String DUPLCATE_EMAIL="DE";
    String DUPLCATE_NICKNAME="DN";
    String DUPLCATE_TEL_NUMBER="DT";
    String NOT_EXSITED-USER="NU";
    String NOT_EXSITED-BOARD="NB";
    //http status401
    String SIGN_IN_FAIL="SF";
    String AUTHROZATION_FAIL="AF";
    
    //http status 403
    String NO_PERMISSION="NP";
    //http status 500
    String DATABASE_ERROR="DBE";







}
