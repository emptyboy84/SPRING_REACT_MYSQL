 enum ResponseCode{

 SUCESS="SU",
    
//http status400
 VALIDATION_FAILED="VF",
 DUPLCATE_EMAIL="DE",
 DUPLCATE_NICKNAME="DN",
 DUPLCATE_TEL_NUMBER="DT",
 NOT_EXSITED_USER="NU",
 NOT_EXSITED_BOARD="NB",
//http status401
 SIGN_IN_FAIL="SF",
 AUTHROZATION_FAIL="AF",

//http status 403
 NO_PERMISSION="NP",
//http status 500
 DATABASE_ERROR="DBE",


}
export default ResponseCode;