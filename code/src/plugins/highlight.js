/*
* 代码高亮插件-highlinght.js
*/
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
hljs.initHighlightingOnLoad();