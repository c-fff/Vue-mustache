import lookup from "./lookup"
import renderTemplate from "./renderTemplate";
/*
* 处理数组，结合renderTemplate实现递归
* 注意：这个函数收的参数是token!而不是tokens
* token = tokens[i]
* 这个函数要递归调用renderTemplate函数，调用多少次？根据data数组的长度
* */
export default function parseArray(token,data){
    // console.log(token,data);
    //得到整体数据data中这个数组要使用的部分
    var v = lookup(data,token[1]);
    // console.log(v);
    //结果字符串
    var resultStr = "";
    //便利V数组，v一定是数组
    for(let i = 0;i<v.length;i++){
        resultStr += renderTemplate(token[2],{
            ...v[i],
            '.':v[i]
        });
    }
    return resultStr;
}