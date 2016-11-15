var Remarkable = require('remarkable');
var fs = require('fs');
var hljs = require('highlight.js');
var md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
	console.log('lang:' + lang);
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }
    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}
    return ''; // use external default escaping
  }
});
fs.readFile('/Users/zhoufeng/git/javascript-book/javascript教程/Test1.md' , 'utf-8' , function(err , data){
	let htmlContent = md.render(data);
	fs.writeFile('test1.html' , htmlContent);
	console.log('Done.');
});

