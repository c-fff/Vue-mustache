export default class Scanner {
    
    constructor(templateStr) {

        console.log(templateStr);

        //将模板字符串写在实例上
        this.templateStr = templateStr;
        //    指针
        this.pos = 0;
        //    尾巴,一开始就是模板字符串的原文
        this.tail = templateStr;
    }
    //功能弱，就是走过指定内容，没有返回值
    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            //    tag有多长，比如{{长度是2，就让指针后移多少位
            this.pos += tag.length;
            //    尾巴也要变
            this.tail = this.templateStr.substring(this.pos);
        }
    }
    //让指针进行扫描，直到遇见指定内容结束，并且能够返回结束之前路过的文字
    scanUntil(stopTag) {
        //记录一下执行本方法的时候pos的值
        const pos_backUp = this.pos;
        //当尾巴的开头不是它 (定义一个尾巴当做收集当前指针所在位置到字符串最后的字符)
        while (this.tail.indexOf(stopTag) != 0 && this.pos < templateStr.length) {
            this.pos++;
            //改变尾巴 从当前指针这个字符开始 到最后的全部字符
            this.tail = this.templateStr.substr(this.pos);
        }
        return this.templateStr.substring(pos_backUp, this.pos);
    }
}