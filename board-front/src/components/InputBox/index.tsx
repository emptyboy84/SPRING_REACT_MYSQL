import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef, } from 'react';
import './style.css';

interface Props{//interface properties
    label:string;
    type:'text'|'password';
    error:boolean;
    placeholder:string;
    value:string;
    setValue:Dispatch<SetStateAction<string>>
    icon?:string;
    onButtonClick?:()=>void;
    message?:string;
    onKeyDown?:(event:KeyboardEvent<HTMLInputElement>)=>void;
    
}
//inputbox component
const InputBox=forwardRef<HTMLInputElement,Props>((props:Props,ref)=>{
    //state:properties
    const {label,type,error,placeholder,value,icon,message}=props;
    const{setValue,onButtonClick,onKeyDown}=props;
    //event handler:input값변경이벤트처리함수
const onChangeHandeler=(event:ChangeEvent<HTMLInputElement>)=>{
    const value=event.target.value;
    setValue(value);
    
}

//keyevent process function
const onKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
    if(!onKeyDown)return;
    onKeyDown(event);

}
    //render:inputbox component
    return(
        <div className='inputbox'>
            <div className='inputbox-lable'>{label}</div>
            <div className={error?'inputbox-container-error':'inputbox-container'}>
                <input ref={ref} type={type} className='input' placeholder={placeholder} value={value} onChange={onChangeHandeler}
                onKeyDown={onKeyDownHandler}/>
                {onButtonClick!==undefined&&(
                <div className='icon-button'>
                    {icon!==undefined&&(<div className={`icon ${icon}`}></div>)}
                </div>
                )}
                
            </div>
            {message!==undefined&&<div className='inputbox-message'>{message}</div>}
        </div>
    )

});

export default InputBox;


