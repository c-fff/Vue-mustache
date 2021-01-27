/*
   函数的功能是让tokens数组变为dom字符串
    #号标记的tokens，需要递归处理它的下标为2的小数组

*/

import lookup from "./lookup";
import parseArray from "./parseArray"

export default function renderTemplate(tokens, data){
    // console.log(data);
//    结果字符串
    var resultStr = "";
//    遍历tokens
    for(let i = 0;i<tokens.length;i++){
        let token = tokens[i];
    //    查看类型
        if(token[0] === "text"){
            resultStr += token[1];
        }else if(token[0] === "name"){
            //如果是name类型，那么就直接使用它的值，
            //使用lookup防止是对象取值的形式
            resultStr += lookup(data,token[1]);
        }else if(token[0] === "#"){
            resultStr += parseArray(token,data);
        }
    }
    return resultStr;
}