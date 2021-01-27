/*
 * 函数的功能是折叠tokens，将#和/之间的tokens能够整合起来，作为它的下标为3的选项
 * */
export default function nestTokens(tokens) {
    //    结果数组
    var nestedTokens = [];
    //栈结构，存放小tokens，栈顶（靠近端口的，最新进入的）
    //的tokens数组当前操作的这个tokens小数组
    var sections = [];
    //收集器指向结果数组，引用类型值，所以指向的是同一个数组
    var collector = nestedTokens;
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        switch (token[0]) {
            case '#':
                //        将收集器放入到这个token
                collector.push(token);
                //        压栈从队尾进
                sections.push(token);
                //       更新收集器的状态，指向数组中的嵌套数组
                collector = token[2] = [];
                break;
            case '/':
                //出栈,pop()会返回刚刚弹出的项
                sections.pop();
                //    改变收集器为栈结构的上一层（队尾（队尾是栈顶））
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens;
            default:
                collector.push(token);
        }
    }
    return nestedTokens;
    console.log(nestedTokens);
}