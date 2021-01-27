import parseTemplateToTokens from './parseTemplateToTokens.js'
import renderTemplate from './renderTemplate.js';
import lookup from "./lookup"
//全局提供templateEngine对象
window.templateEngine = {
    //渲染方法
    render(templateStr, data) {
        var tokens = parseTemplateToTokens(templateStr);
        console.log(tokens);
        // 调用renderTemplate函数，让tokens数组变为dom字符串
        var domStr = renderTemplate(tokens,data);
        return domStr;
    }

};