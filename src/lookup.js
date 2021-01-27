/*
* 功能是：可以在dataObj中，用连续点符号的keyName属性
*比如：dataObj是
* {
*   a:{
*       b:{
*           c:100
*       }
*   }
* }
*
* 那么lookup(dataObj,keyName)的结果就是100
* */
export default function lookup(dataObj,keyName){
    // console.log(dataObj,keyName);
//    看看keyName中有没有点符号
    if(keyName.indexOf(".") !== -1 && keyName!='.'){
        //将其装换为数组
        var keys = keyName.split('.');
        //temp存放这个嵌套对象
        var temp = dataObj;
        for(let i = 0;i<keys.length;i++){
            //从嵌套对象中一层一层查找
            temp = temp[keys[i]];
        }
        return temp;
    }
    return dataObj[keyName];
};