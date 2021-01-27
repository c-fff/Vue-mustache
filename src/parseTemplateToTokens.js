import Scanner from './Scanner.js'
import nestTokens from "./nestTokens"
/*
 *将模板字符串变为tokens数组
 * */

export default function parseTemplateToTokens(templateStr) {
    var tokens = [];
    //    创建扫描器
    var scanner = new Scanner(templateStr);
    var words;
    //    让扫描器工作
    while (scanner.pos != templateStr.length) {
        //收集
        words = scanner.scanUntil("{{");
        //存起来
        if (words != "") {
            tokens.push(['text', words]);
        }
        //过双大括号
        scanner.scan("{{");
        //收集之前出现的文字
        words = scanner.scanUntil("}}");
        //存起来
        if (words != "") {
            //判断一下首字符
            if (words[0] == '#') {
                //存起来，从下标为1的项开始存,因为下标为0的项是#
                tokens.push(['#', words.substring(1)]);
            } else if (words[0] == '/') {
                //存起来，从下标为1的项开始存,因为下标为0的项是/
                tokens.push(['/', words.substring(1)]);
            } else {
                //    存起来
                tokens.push(['name', words]);
            }

        }
        //过双大括号
        scanner.scan("}}");
    }
    return nestTokens(tokens);
}