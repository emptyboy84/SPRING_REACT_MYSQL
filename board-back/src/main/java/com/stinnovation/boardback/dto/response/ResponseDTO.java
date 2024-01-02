package com.stinnovation.boardback.dto.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.mysql.cj.x.protobuf.MysqlxDatatypes.Scalar.String;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * ResponseDTO
 */
@Getter
@AllArgsConstructor
 public interface ResponseDTO {
    private String code;
    private String message;

    public static ResponseEntity<ResponseDTO>databaseError(){
        ResponseDTO responseBody=new ResponseDTO(ResponseCode.DATABASE_ERROR,ResponseMessage.DATABASE_ERROR);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR.body(responseBody));
        

    }
    
}