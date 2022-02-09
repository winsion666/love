// Generated by CoffeeScript 1.12.7
(function() {
  var openComment, styles, time, writeStyleChar, writeStyles;

  styles = "/*\n * \"a love letter💗\" v5.2.1\n * for every true lover\n */\n\nbody {\n  background-color: #1a1c24; color: #fff;\n  font-size: 1.0rem; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/*\n * ...hello?            \n *\n * 亲爱的甜甜 ，好久不见！           \n * 我是你可爱的叶老师～         \n * 说是好久不见，其实我们昨天晚上才一起吃过饭嘻嘻嘻\n * 这就是\"一日不见，如隔三秋\"吧！     \n * 我总是打开一个框框写代码，就像现在这样 ๑乛◡乛๑\n */\n\npre { \n  position: fixed;\n  top: 30px; bottom: 30px;\n  transition: left 500ms;\n  overflow: auto;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * 之前你还问我屏幕上的代码为啥花花绿绿的(‧_‧?)       \n * 那是代码高亮～       \n * 你没发现上面👆的代码都是一个颜色嘛           \n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n * 现在看起来舒服多了～       \n * 不过我还是更习惯把代码框放在右边 →_→             \n */ \n\npre { left: 50%; width: 45%}\n\n\n/* \n * 昨晚吃饭时你还不停暗示我\n * 生怕我会忘了后天是你的生日一样，略略略～           \n * 傻瓜～我怎么可能会忘记 ( ´･ω･)ﾉ(._.`)\n * 平时码代码的时候我心里都在想着你呢～               \n * 不信你往下看       \n */\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* 你问我爱你有多深，代码代表我的心 (●′ω`●) */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* 现在我的心属于你啦～ */\n\n#heart i::before {\n  content: '甜甜';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n\n/* \n * 虽然我们认识这么久           \n * 但每次见到你，我的心还是会扑通～扑通～\n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * 什么？没听到我的心跳？           \n * 你再靠近一点 \n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n/* \n * 你靠这么近干嘛～           \n */\n\n#heart, #echo {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n\n/* \n * 我都脸红了～嘿嘿        \n */\n\n/* \n * 这颗小心心送你 `(*^﹏^*)′         \n * 生日快乐🎂 ～亲爱哒～          \n * 明晚下课     \n * 你最喜欢的那家餐馆           \n * 不见不散哦～         \n */";

  openComment = false;

  writeStyleChar = function(which) {
    if (which === '/' && openComment === false) {
      openComment = true;
      styles = $('#style-text').html() + which;
    } else if (which === '/' && openComment === true) {
      openComment = false;
      styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
    } else if (which === ':') {
      styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
    } else if (which === ';') {
      styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;');
    } else if (which === '{') {
      styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector">$1</em>{');
    } else {
      styles = $('#style-text').html() + which;
    }
    $('#style-text').html(styles);
    return $('#style-tag').append(which);
  };

  writeStyles = function(message, index, interval) {
    var pre;
    if (index < message.length) {
      pre = document.getElementById('style-text');
      pre.scrollTop = pre.scrollHeight;
      writeStyleChar(message[index++]);
      return setTimeout((function() {
        return writeStyles(message, index, openComment ? 60 : 5);
      }), interval);
    }
  };

  $('body').append("  <style id=\"style-tag\"></style>\n<span id=\"echo\"></span>\n<span id=\"heart\"><i></i></span>\n<pre id=\"style-text\"></pre>");

  time = 60;

  writeStyles(styles, 0, time);


  /*
  Changelog:
  1.0.0: i exist!
  1.0.1: heart instead of circle
  1.0.2: including standard CSS3 transforms and animations
  	was only using `-webkit` to be less verbose (standard transforms dont work in safari)
  	now works in FF
  1.0.3: crossbrowser echo 
  	nested `scale()` styles (scaled in scaled) only worked in chrome
  	moved echo out of heart to fix
  1.0.4: more efficient animations
  	`0%, 100% {}` instead of duplicated keyframes
  1.0.5: overflwo fix
    `overflow: auto` on the `pre`
   */

}).call(this);
