window.__require=function t(e,o,n){function i(c,s){if(!o[c]){if(!e[c]){var h=c.split("/");if(h=h[h.length-1],!e[h]){var u="function"==typeof __require&&__require;if(!s&&u)return u(h,!0);if(r)return r(h,!0);throw new Error("Cannot find module '"+c+"'")}c=h}var a=o[c]={exports:{}};e[c][0].call(a.exports,function(t){return i(e[c][1][t]||t)},a,a.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({lb_number:[function(t,e,o){"use strict";cc._RF.push(e,"c48e5Iv0WpLs5A82669eZm5","lb_number");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return i(e,t),e.prototype.start=function(){this.createnumber2(),this.schedule(this.createnumber2,8),this.schedule(this.createnumber1,7.9)},e.prototype.createnumber1=function(){this.a=Math.floor(60*Math.random()),this.b=Math.floor(60*Math.random());var t=cc.sys.localStorage.getItem("number2");cc.sys.localStorage.setItem("number1",t)},e.prototype.createnumber2=function(){this.a=Math.floor(60*Math.random()),this.b=Math.floor(60*Math.random()),this.label.string=this.a+"+"+this.b;var t=this.a+this.b;cc.sys.localStorage.setItem("number2",t)},r([h(cc.Label)],e.prototype,"label",void 0),r([h],e.prototype,"text",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],menu:[function(t,e,o){"use strict";cc._RF.push(e,"f9b5axF0elCCoHg4JfIrkj5","menu");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.thinking=null,e}return i(e,t),e.prototype.loadgame=function(){cc.director.loadScene("game"),cc.audioEngine.stopAll()},e.prototype.think=function(){var t=cc.instantiate(this.thinking);this.node.addChild(t),t.y=-150},e.prototype.loadmenu=function(){cc.audioEngine.stopAll(),cc.director.loadScene("menu")},r([h({type:cc.Prefab})],e.prototype,"thinking",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],"number-mgr":[function(t,e,o){"use strict";cc._RF.push(e,"96e81JiJMdDhqO05a0hTkT8","number-mgr");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./number"),s=cc._decorator,h=s.ccclass,u=s.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.number=null,e}return i(e,t),e.prototype.start=function(){},e.prototype.createNumber=function(){var t=cc.instantiate(this.number);t.parent=this.node,t.x=0,t.y=0,this.node.addChild(t),t.getComponent(c.default).numbermgr=this},r([u(cc.Label)],e.prototype,"label",void 0),r([u({type:cc.Prefab})],e.prototype,"number",void 0),r([h],e)}(cc.Component);o.default=a,cc._RF.pop()},{"./number":"number"}],number:[function(t,e,o){"use strict";cc._RF.push(e,"c3d83Y1yS9BfrvxUC+dUNpS","number");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.numbermgr=null,e.label=null,e}return i(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){},e.prototype.createnumber1=function(){this.a=Math.floor(60*Math.random()),this.b=Math.floor(60*Math.random());var t=cc.sys.localStorage.getItem("number2");cc.sys.localStorage.setItem("number1",t)},e.prototype.createnumber2=function(){this.a=Math.floor(60*Math.random()),this.b=Math.floor(60*Math.random()),this.label.string=this.a+"+"+this.b;var t=this.a+this.b;cc.sys.localStorage.setItem("number2",t)},r([h(cc.Label)],e.prototype,"label",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],popup:[function(t,e,o){"use strict";cc._RF.push(e,"f8c48Emd59F2qGPEG1oH4XH","popup");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.popup=null,e}return i(e,t),e.prototype.start=function(){var t=cc.instantiate(this.popup);this.node.addChild(t)},r([h({type:cc.Prefab})],e.prototype,"popup",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],time:[function(t,e,o){"use strict";cc._RF.push(e,"02fd59LHjRGW4qK3Z++6ljm","time");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.blu_bg=null,e.arr=[][10],e.time=60,e}return i(e,t),e.prototype.start=function(){},e.prototype.createtime=function(){this.time>=0&&(this.label.string="00:00:"+this.time,this.time<10&&(this.label.string="00:00:0"+this.time),this.time--),this.time},e.prototype.gamelost=function(){var t=cc.sys.localStorage.getItem("score"),e=cc.instantiate(this.blu_bg);this.node.addChild(e),e.getChildByName("ketqua").getComponent(cc.Label).string="Score: "+t},e.prototype.update=function(){},r([h(cc.Label)],e.prototype,"label",void 0),r([h({type:cc.Prefab})],e.prototype,"blu_bg",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],"touch-move":[function(t,e,o){"use strict";cc._RF.push(e,"efcf9hXYQBE/5SMtItmhLwf","touch-move");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,h=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.labeltime=null,e.labeltutorial=null,e.text="hello",e.number=null,e.numberab=null,e.blu_bg=null,e.congratu=null,e.plus1=null,e.movehand=null,e.audio=null,e.audiolost=null,e.audiowin=null,e.audiosai=null,e.a=0,e.b=0,e.time=60,e.number1=0,e.number2=0,e.score=0,e.highscore=0,e.nodenum=null,e.nodenum2=null,e.congrati=null,e.isCheck=!1,e.temp=0,e.lv=0,e.arrColor=[],e.nodenumtutorial=null,e.nodenumtutorial1=null,e.nodenumtutorial2=null,e.nodemove=null,e.isTutorial=!1,e}return i(e,t),e.prototype.start=function(){this.current=cc.audioEngine.play(this.audio,!0,.5),null==cc.sys.localStorage.getItem("highscore")?(this.loadtuTorial(),this.labeltutorial.string="--Tutorial--",this.scheduleOnce(this.goGame,14),this.scheduleOnce(this.startGame,15)):this.startGame()},e.prototype.startGame=function(){this.labeltutorial.string="",this.arrColor=[cc.Color.BLUE,cc.Color.CYAN,cc.Color.GREEN,cc.Color.ORANGE,cc.Color.WHITE,cc.Color.GRAY,cc.Color.YELLOW,cc.Color.MAGENTA,cc.Color.RED],this.scheduleOnce(this.openTouch,4),this.createNumber(),this.schedule(this.createTime,1),this.scheduleOnce(this.createNumber2,4),cc.audioEngine.stop(this.current2)},e.prototype.loadtuTorial=function(){this.createTutorial(),this.changePotisonTutorial(),this.scheduleOnce(this.destroyTutorial,3),this.scheduleOnce(this.createTutorial1,4),this.scheduleOnce(this.createTutorial2,8)},e.prototype.goGame=function(){this.labeltutorial.string="3->2->1 ---\x3e Start "},e.prototype.createMove=function(){var t=cc.instantiate(this.movehand);this.node.addChild(t),this.nodemove=t},e.prototype.moveDown=function(){cc.tween(this.nodemove).to(1,{position:cc.v3(300,-100)}).start()},e.prototype.moveUp=function(){cc.tween(this.nodemove).to(1,{position:cc.v3(300,100)}).start()},e.prototype.createTutorial=function(){var t=cc.instantiate(this.number);this.node.addChild(t),t.getChildByName("label").getComponent(cc.Label).string="49",this.nodenumtutorial=t,this.nodenumtutorial.x=-400},e.prototype.createTutorial1=function(){this.labeltutorial.string="49 > 47 -> down";var t=cc.instantiate(this.number);this.node.addChild(t),t.getChildByName("label").getComponent(cc.Label).string="47",this.nodenumtutorial1=t,this.scheduleOnce(this.changePotisonDown3,2),this.createMove()},e.prototype.createTutorial2=function(){this.labeltutorial.string="47 < 50 -> up";var t=cc.instantiate(this.number);this.node.addChild(t),t.getChildByName("label").getComponent(cc.Label).string="50",this.nodenumtutorial2=t,this.scheduleOnce(this.changePotisonup3,2),this.createMove()},e.prototype.changePotisonTutorial=function(){cc.tween(this.nodenumtutorial).to(1,{position:cc.v3(0,0)}).start()},e.prototype.changePotisonup3=function(){this.moveUp(),cc.tween(this.nodenumtutorial2).to(1,{position:cc.v3(0,200)}).start(),this.scheduleOnce(this.destroyTutorial2,1.2)},e.prototype.changePotisonDown3=function(){this.moveDown(),cc.tween(this.nodenumtutorial1).to(1,{position:cc.v3(0,-200)}).start(),this.scheduleOnce(this.destroyTutorial1,1.2)},e.prototype.destroyTutorial=function(){this.nodenumtutorial.destroy()},e.prototype.destroyTutorial1=function(){this.nodenumtutorial1.destroy(),this.nodemove.destroy()},e.prototype.destroyTutorial2=function(){this.nodenumtutorial2.destroy(),this.nodemove.destroy(),this.labeltutorial.string=""},e.prototype.openTouch=function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this)},e.prototype.closeTouch=function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this)},e.prototype.onTouchMove=function(t){var e=t.getDelta();this.nodenum.x+=e.x,this.nodenum.y+=e.y},e.prototype.openTouch1=function(){this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove1,this)},e.prototype.closeTouch1=function(){this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove1,this)},e.prototype.onTouchMove1=function(t){var e=t.getDelta();this.nodenum2.x+=e.x,this.nodenum2.y+=e.y},e.prototype.update=function(){this.label.string=": "+this.score,cc.sys.localStorage.setItem("score",this.score),this.lv<=3&&1==this.isTutorial&&0==this.isCheck&&(this.nodenum.y>10||this.nodenum.y<-10)&&this.gameWin(),this.lv>3&&1==this.isTutorial&&0==this.isCheck&&(this.nodenum2.y>10||this.nodenum2.y<-10)&&this.gameWin2()},e.prototype.createNumber=function(){cc.audioEngine.stop(this.current1),this.isCheck=!1,this.isTutorial=!0,this.number1=Math.floor(60*Math.random()),0!=this.number1&&this.number2!=this.number1||(this.number1=Math.floor(60*Math.random()));var t=cc.instantiate(this.number);this.node.addChild(t),t.getChildByName("label").getComponent(cc.Label).string=this.number1+"",this.nodenum=t;var e=Math.floor(8*Math.random());this.nodenum.color=this.arrColor[e],this.nodenum.getChildByName("polygon").color=this.arrColor[e]},e.prototype.createNumber2=function(){this.number2=Math.floor(60*Math.random()),this.nodenum.getChildByName("label").getComponent(cc.Label).string=this.number2+""},e.prototype.gameWin=function(){this.isCheck=!0,this.score>=1&&(this.temp=this.number2,this.number2=this.number1,this.number1=this.temp),this.number1>=this.number2&&this.nodenum.y<0&&(this.score++,this.plus(),this.scheduleOnce(this.destroyyPlus,1),this.current1=cc.audioEngine.play(this.audiowin,!0,1),this.changePotisonDown(this.nodenum),this.closeTouch(),this.scheduleOnce(this.createNumber,2),this.scheduleOnce(this.openTouch,2),this.lv++),this.number1>this.number2&&this.nodenum.y>0&&(this.current3=cc.audioEngine.play(this.audiosai,!0,1),this.changePotisonup(this.nodenum),this.closeTouch(),this.scheduleOnce(this.gameLost,2)),this.number1<=this.number2&&this.nodenum.y>0&&(this.score++,this.plus(),this.scheduleOnce(this.destroyyPlus,1),this.current1=cc.audioEngine.play(this.audiowin,!1,1),this.changePotisonup(this.nodenum),this.closeTouch(),this.scheduleOnce(this.createNumber,2),this.scheduleOnce(this.openTouch,2),this.lv++),this.number1<=this.number2&&this.nodenum.y<0&&(this.current3=cc.audioEngine.play(this.audiosai,!0,1),this.changePotisonDown(this.nodenum),this.closeTouch(),this.scheduleOnce(this.gameLost,2)),4==this.lv&&(this.scheduleOnce(this.create2Number,2),this.closeTouch(),this.unschedule(this.openTouch),this.congratulation(),this.scheduleOnce(this.destroyCongratulation,1)),cc.log("1-"+this.number1),cc.log("2-"+this.number2)},e.prototype.gameWin2=function(){this.isCheck=!0,this.temp=this.number2,this.number2=this.number1,this.number1=this.temp,this.number1>=this.number2&&this.nodenum2.y<0&&(this.score++,this.lv++,this.plus(),this.scheduleOnce(this.destroyyPlus,1),this.current1=cc.audioEngine.play(this.audiowin,!1,1),this.changePotisonDown2(this.nodenum2),this.closeTouch1(),this.scheduleOnce(this.create2Number,2),this.scheduleOnce(this.openTouch1,2)),this.number1>this.number2&&this.nodenum2.y>0&&(this.current3=cc.audioEngine.play(this.audiosai,!0,1),this.changePotisonup2(this.nodenum2),this.closeTouch1(),this.scheduleOnce(this.gameLost,2)),this.number1<=this.number2&&this.nodenum2.y>0&&(this.score++,this.lv++,this.plus(),this.scheduleOnce(this.destroyyPlus,1),this.current1=cc.audioEngine.play(this.audiowin,!1,1),this.changePotisonup2(this.nodenum2),this.closeTouch1(),this.scheduleOnce(this.create2Number,2),this.scheduleOnce(this.openTouch1,2)),this.number1<=this.number2&&this.nodenum2.y<0&&(this.current3=cc.audioEngine.play(this.audiosai,!0,1),this.changePotisonDown2(this.nodenum2),this.closeTouch1(),this.scheduleOnce(this.gameLost,2)),10==this.lv&&(this.congratulation(),this.scheduleOnce(this.destroyCongratulation,1)),cc.log("1-"+this.number1),cc.log("2-"+this.number2)},e.prototype.gameLost=function(){this.Highscore();var t=cc.sys.localStorage.getItem("highscore");this.unscheduleAllCallbacks(),cc.audioEngine.stop(this.current),cc.audioEngine.stop(this.current3),this.current2=cc.audioEngine.play(this.audiolost,!0,1),this.unschedule(this.createTime);var e=cc.instantiate(this.blu_bg);this.node.addChild(e),e.getChildByName("ketqua").getComponent(cc.Label).string="Your Score: "+this.score,e.getChildByName("highscore").getComponent(cc.Label).string="HighScore: "+t.toString(),this.lv<=1&&(e.getChildByName("star1").color=cc.color(107,100,100,255),e.getChildByName("star2").color=cc.color(107,100,100,255),e.getChildByName("star3").color=cc.color(107,100,100,255)),this.lv<=5&&this.lv>1&&(e.getChildByName("star1").color=cc.color(255,255,255,255),e.getChildByName("star2").color=cc.color(107,100,100,255),e.getChildByName("star3").color=cc.color(107,100,100,255)),this.lv<=10&&this.lv>5&&(e.getChildByName("star1").color=cc.color(255,255,255,255),e.getChildByName("star3").color=cc.color(255,255,255,255),e.getChildByName("star2").color=cc.color(107,100,100,255)),this.lv>13&&(e.getChildByName("star1").color=cc.color(255,255,255,255),e.getChildByName("star2").color=cc.color(255,255,255,255),e.getChildByName("star3").color=cc.color(255,255,255,255)),4!=this.lv&&10!=this.lv||(this.destroyCongratulation(),this.destroyyPlus())},e.prototype.create2Number=function(){cc.audioEngine.stop(this.current1),this.openTouch1(),this.isCheck=!1,this.score<5&&this.nodenum.destroy(),this.a=Math.floor(60*Math.random()),this.b=Math.floor(60*Math.random()),this.number1=this.a+this.b,0!=this.a&&0!=this.b&&this.number1!=this.number2||(this.a=Math.floor(60*Math.random()),this.b=Math.floor(60*Math.random()));var t=cc.instantiate(this.numberab);this.node.addChild(t),t.getChildByName("label").getComponent(cc.Label).string=this.a+"+"+this.b,this.nodenum2=t;var e=Math.floor(8*Math.random());this.nodenum2.color=this.arrColor[e],this.nodenum2.getChildByName("polygon").color=this.arrColor[e]},e.prototype.changePotisonup=function(t){cc.tween(t).to(1,{position:cc.v3(0,200)}).start(),this.destroyNumber1(this.nodenum)},e.prototype.changePotisonDown=function(t){cc.tween(t).to(1,{position:cc.v3(0,-200)}).start(),this.destroyNumber1(this.nodenum)},e.prototype.changePotisonup2=function(t){cc.tween(t).to(1,{position:cc.v3(0,200)}).start(),this.destroyNumber2(this.nodenum2)},e.prototype.changePotisonDown2=function(t){cc.tween(t).to(1,{position:cc.v3(0,-200)}).start(),this.destroyNumber2(this.nodenum2)},e.prototype.destroyNumber1=function(){this.scheduleOnce(this.destroyyy1,1.1)},e.prototype.destroyNumber2=function(){this.scheduleOnce(this.destroyyy2,1.1)},e.prototype.destroyyy1=function(){this.nodenum.destroy()},e.prototype.destroyyy2=function(){this.nodenum2.destroy()},e.prototype.createTime=function(){this.time>=10&&(this.time--,this.labeltime.string="00:00:"+this.time),this.time<10&&(this.time--,this.labeltime.string="00:00:0"+this.time),this.time<=5&&(this.labeltime.node.color=cc.Color.RED,this.maume()),0==this.time&&this.gameLost()},e.prototype.maume=function(){this.labeltime.node.opacity=200,this.scheduleOnce(this.maume2,.5)},e.prototype.maume2=function(){this.labeltime.node.opacity=255},e.prototype.congratulation=function(){var t=cc.instantiate(this.congratu);this.node.addChild(t),this.congrati=t},e.prototype.destroyCongratulation=function(){this.congrati.destroy()},e.prototype.plus=function(){var t=cc.instantiate(this.plus1);this.node.addChild(t),this.plus12=t},e.prototype.destroyyPlus=function(){this.plus12.destroy()},e.prototype.Highscore=function(){var t=cc.sys.localStorage.getItem("highscore");t||(t=this.score),t<=this.score&&(t=this.score),cc.sys.localStorage.setItem("highscore",t)},r([h(cc.Label)],e.prototype,"label",void 0),r([h(cc.Label)],e.prototype,"labeltime",void 0),r([h(cc.Label)],e.prototype,"labeltutorial",void 0),r([h],e.prototype,"text",void 0),r([h({type:cc.Prefab})],e.prototype,"number",void 0),r([h({type:cc.Prefab})],e.prototype,"numberab",void 0),r([h({type:cc.Prefab})],e.prototype,"blu_bg",void 0),r([h({type:cc.Prefab})],e.prototype,"congratu",void 0),r([h({type:cc.Prefab})],e.prototype,"plus1",void 0),r([h({type:cc.Prefab})],e.prototype,"movehand",void 0),r([h({type:cc.AudioClip})],e.prototype,"audio",void 0),r([h({type:cc.AudioClip})],e.prototype,"audiolost",void 0),r([h({type:cc.AudioClip})],e.prototype,"audiowin",void 0),r([h({type:cc.AudioClip})],e.prototype,"audiosai",void 0),r([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{}]},{},["lb_number","menu","number-mgr","number","popup","time","touch-move"]);