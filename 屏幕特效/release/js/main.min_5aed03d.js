var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=t.call(e,c)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Sk_DATA;!function(e){e.IsDeBUG=!1}(Sk_DATA||(Sk_DATA={}));var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?r(i):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var game;!function(e){var t=function(e){function t(){var t=e.call(this)||this;return t.addEventListener(eui.UIEvent.COMPLETE,t.initUI,t),t.skinName="resource/Load.exml",t}return __extends(t,e),t.prototype.initUI=function(){SK_GLOBAL.screenAuto(this),egret.Ticker.getInstance().register(function(e){dragonBones.WorldClock.clock.advanceTime(.02)},this),this.loaddbbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.loadDb,this),this.loadmcbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.loadMC,this),this.loadsoundbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.loadsd,this),this.loadprbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.loadprs,this),this.btn5.addEventListener(egret.TouchEvent.TOUCH_TAP,this.srcr,this),this.btn6.addEventListener(egret.TouchEvent.TOUCH_TAP,this.postse,this),this.btn7.addEventListener(egret.TouchEvent.TOUCH_TAP,this.intsco,this),this.btn8.addEventListener(egret.TouchEvent.TOUCH_TAP,this.intsscr,this),this.grpdb.visible=!1},t.prototype.loadDb=function(){function e(){i.animation.play("stand")}function t(){i.animation.play("die")}function n(){i.animation.play("attack")}function r(){i.animation.play("run")}this.MainGroup.removeChildren(),this.grpdb.visible=!0;var i=SK_GLOBAL.createArmature(0,0,"stand","nanzhanshi",this.MainGroup);i.display.x=300,i.display.y=300,this.db_play_stand.addEventListener(egret.TouchEvent.TOUCH_TAP,e,this),this.db_play_die.addEventListener(egret.TouchEvent.TOUCH_TAP,t,this),this.db_play_attack.addEventListener(egret.TouchEvent.TOUCH_TAP,n,this),this.db_play_run.addEventListener(egret.TouchEvent.TOUCH_TAP,r,this),this.txtcode.text='代码：SK_GLOBAL.createArmature(x, y, "动画名", "文件名", 装载容器)'},t.prototype.loadMC=function(){this.grpdb.visible=!1,this.MainGroup.removeChildren();SK_GLOBAL.LoadMovieClipMovie("zhen1",this.MainGroup,300,100,"mfz",-1,"magiczhen");this.txtcode.text='代码：SK_GLOBAL.LoadMovieClipMovie("动画名",装载容器,x,y,"动画组名",播放次数,"文件名")'},t.prototype.loadsd=function(){SK_GLOBAL.PlayBgSound("shoping_mp3",1),this.txtcode.text='代码：SK_GLOBAL.PlayBgSound("声音文件RES名",播放次数)'},t.prototype.loadprs=function(){this.MainGroup.removeChildren(),this.grpdb.visible=!1,SK_GLOBAL.creatParticle("LoginParticle",this.MainGroup,100,-200),this.txtcode.text='代码：SK_GLOBAL.creatParticle("粒子文件名",装载容器,x,y)'},t.prototype.srcr=function(){this.txtcode.text="代码：SK_GLOBAL.screenAuto(容器)------------具体请参考我的适配教程视频 https://www.bilibili.com/video/av25880837/"},t.prototype.postse=function(){this.txtcode.text='代码：Sk_PostJSON.SendTo(JSON数据,回调方法,指向,"发送地址")'},t.prototype.intsco=function(){this.txtcode.text=' 代码：Sk_Scoket.initScoket("IP:端口")'},t.prototype.intsscr=function(){Sk_ScreenMovie.MovieStart(5,null),this.txtcode.text=" 代码：Sk_ScreenMovie.MovieStart(动画类型5为随机, 容器null为指向stage)"},t}(eui.Component);e.LoadPlane=t,__reflect(t.prototype,"game.LoadPlane")}(game||(game={}));var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),SK_GLOBAL.screenAuto(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n;return __generator(this,function(r){switch(r.label){case 0:return[4,this.loadResource()];case 1:return r.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return e=r.sent(),[4,platform.login()];case 3:return r.sent(),[4,platform.getUserInfo()];case 4:return t=r.sent(),console.log(t),n=new game.LoadPlane,this.addChild(n),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function i(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var a=this;"undefined"!=typeof generateEUI?egret.callLater(function(){t.call(r,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),i(e),egret.callLater(function(){t.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT))},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var SK_GLOBAL;!function(e){function t(){return egret.MainContext.instance.stage}function n(){return egret.MainContext.instance.stage.stageWidth}function r(){return egret.MainContext.instance.stage.stageHeight}function i(){return document.body.clientHeight/document.body.clientWidth>1.32}function o(e){null!=e&&(e.left=0,e.right=0,e.top=0,e.bottom=0)}function a(e,t){if(t)for(var n in e.items)e.items[n].props={loop:!0};e.play()}function s(e,t){if(null!=e){var n=RES.getRes(e);return n.play(0,t),n}console.log("声音文件为空！")}function c(e,t,n,r,i){if(null!=i){var o=RES.getRes(r+"_ske_json"),a=RES.getRes(r+"_tex_png"),s=RES.getRes(r+"_tex_json"),c=new dragonBones.EgretFactory;c.parseDragonBonesData(o,r),c.parseTextureAtlasData(s,a,r);var u=c.buildArmature("Armature");return i.addChild(u.getDisplay()),u.animation.play(n),u.display.x=e,u.display.y=t,dragonBones.WorldClock.clock.add(u),u}console.log("装载容器不存在")}function u(e,t,n,r,i,o,a){var s=RES.getRes(a+"_json"),c=RES.getRes(a+"_png"),u=new egret.MovieClipDataFactory(s,c),l=new egret.MovieClip(u.generateMovieClipData(i));return l.x=n,l.y=r,t.addChild(l),l.gotoAndPlay(e,o),l.addEventListener(egret.Event.COMPLETE,function(e){t.removeChild(l)},this),l}function l(e,t,n,r){if(null!=t){var i=RES.getRes(e+"_png"),o=RES.getRes(e+"_json"),a=new particle.GravityParticleSystem(i,o);return a.touchEnabled=!1,t.addChild(a),a.x=n,a.y=r,a.start(),a}console.log("装载容器不存在")}function h(e,t){var n=e.replace(/-/g,"/"),r=t.replace(/-/g,"/"),i=Date.parse(n),o=Date.parse(r),a=i-o,s=(Math.floor(a/864e5),a%864e5),c=Math.floor(s/36e5),u=s%36e5,l=Math.floor(u/6e4),h=u%6e4,d=Math.round(h/1e3),g=c+":"+l+":"+d;return g}function d(){var e=window.navigator.userAgent.toLowerCase(),t=""+e.match(/MicroMessenger/i);return"null"==t?!1:"micromessenger"==t?!0:void 0}e.curStage=t,e.curWidth=n,e.curHeight=r,e.isBigScreen=i,e.screenAuto=o,e.playTweenAnimation=a,e.PlayBgSound=s,e.createArmature=c,e.LoadMovieClipMovie=u,e.creatParticle=l,e.timerOver=h,e.isWeiXin=d}(SK_GLOBAL||(SK_GLOBAL={}));var Sk_PostJSON=function(){function e(){}return e.SendTo=function(e,t,n,r){function i(){g++,5>g&&c()}function o(e){var t=e.currentTarget,n=JSON.parse(t.response);return n?l(n,h):void 0}function a(e){i()}function s(e){}function c(){d.responseType=egret.HttpResponseType.TEXT,d.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),d.open(r+Sk_DATA.ServerData.WebServer.PathName+"?random="+999999*egret.getTimer(),egret.HttpMethod.POST),d.send(u)}var u=JSON.stringify(e);u="BYTESEND="+u;var l=t,h=n,d=new egret.HttpRequest;d.addEventListener(egret.Event.COMPLETE,o,this),d.addEventListener(egret.IOErrorEvent.IO_ERROR,a,this),d.addEventListener(egret.ProgressEvent.PROGRESS,s,this);var g=0;c()},e}();__reflect(Sk_PostJSON.prototype,"Sk_PostJSON");var Sk_ScreenMovie;!function(e){function t(e,t){function n(e){S++,S==s&&r.removeChild(a)}var r;r=null==t?SK_GLOBAL.curStage():t;var i=SK_GLOBAL.curWidth(),o=SK_GLOBAL.curHeight(),a=new eui.Group;a.width=i,a.height=o,r.addChild(a);for(var s=9,c=3,u=s/c,l=0;s>l;l++){var h=i/c,d=o/u,g=l%c*h,p=Math.floor(l/c)*d,f=new egret.RenderTexture,m=(f.drawToTexture(r,new egret.Rectangle(g,p,h,d)),new egret.Bitmap);switch(m.texture=f,m.anchorOffsetX=h/2,m.anchorOffsetY=d/2,m.x=g+h/2,m.y=p+d/2,a.addChild(m),5==e&&(e=Math.ceil(4*Math.random())),e){case 1:var v=egret.Tween.get(m);v.to({scaleX:0,scaleY:0,alpha:0,rotation:359},300,egret.Ease.circIn).call(n,this);break;case 2:var v=egret.Tween.get(m);v.to({scaleX:1,scaleY:.2,alpha:0},300,egret.Ease.circIn).call(n,this);break;case 3:var v=egret.Tween.get(m);v.to({scaleX:.2,scaleY:1,alpha:0,blurFliter:0},300,egret.Ease.backInOut).call(n,this);break;case 4:var v=egret.Tween.get(m);v.to({alpha:0},300,egret.Ease.circIn).call(n,this);break;default:var v=egret.Tween.get(m);v.to({scaleX:1,scaleY:0,alpha:0},300,egret.Ease.circIn).call(n,this)}}var S=0}function n(e,t){var n=new egret.Bitmap;n.texture=RES.getRes(e),n.anchorOffsetX=n.width/2,n.anchorOffsetY=n.height/2,n.x=(SK_GLOBAL.curWidth()-n.width)/2+n.anchorOffsetX,n.y=(SK_GLOBAL.curWidth()-n.height)/2,t.addChild(n);var r=egret.Tween.get(n);r.to({y:n.y-80,alpha:0},1500,egret.Ease.circIn),r.addEventListener(egret.Event.COMPLETE,function(e){t.removeChild(n)},!0)}function r(e){var t,n,r;t=SK_GLOBAL.curStage(),n=SK_GLOBAL.curWidth(),r=SK_GLOBAL.curHeight();var i=new eui.Group;i.alpha=0,i.width=n,i.height=r;var o=new egret.RenderTexture,a=(o.drawToTexture(t,new egret.Rectangle(0,0,n,r)),new egret.Bitmap);a.texture=o,i.addChild(a);var s=new egret.BlurFilter(8,8);a.filters=[s];var c=egret.Tween.get(i);c.to({alpha:1},1e3),e.addChild(i)}function i(e){e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,e.scaleX=.1,e.scaleY=.1,e.x=e.x+e.width/2,e.y=e.y+e.height/2;var t=egret.Tween.get(e);t.to({scaleX:1,scaleY:1,alpha:1,blurFliter:0},800,egret.Ease.backInOut)}function o(e){var t=e.y;e.y=-100;var n=egret.Tween.get(e);n.to({y:t},800,egret.Ease.backInOut)}function a(e){function t(){r.to({scaleX:1,scaleY:1,alpha:1},500).call(n,this)}function n(){r.to({scaleX:1.15,scaleY:1.15,alpha:1},500).call(t,this)}var r=egret.Tween.get(e,{loop:!0});e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,r.to({scaleX:1.15,scaleY:1.15,alpha:1},500).call(t,this),e.x=e.x+e.width/2,e.y=e.y+e.height/2}function s(e){function t(e){}var n=new egret.TextField;n.width=300,n.height=50,n.anchorOffsetX=150,n.anchorOffsetY=25,n.x=(SK_GLOBAL.curWidth()-300)/2,n.y=(SK_GLOBAL.curHeight()-50)/2,n.text=e,n.size=33,n.textAlign="center",n.fontFamily="SimHei",n.textColor=16777215,n.strokeColor=0,n.stroke=2,n.bold=!0;var r=egret.Tween.get(n);r.to({scaleX:1.5,scaleY:1.5,alpha:0},800,egret.Ease.circIn).call(t,this)}e.MovieStart=t,e.tipTxtShow=n,e.MaskFilter=r,e.MovieTweenBox=i,e.DownTweenBox=o,e.btnScaleXY=a,e.setCenterTxt=s}(Sk_ScreenMovie||(Sk_ScreenMovie={}));var Sk_Scoket=function(){function e(){}return e.initScoket=function(e){function t(){Sk_DATA.G_SOCKET_CONN=!0,console.log("WEBSCOKET已链接")}function n(){Sk_DATA.G_SOCKET_CONN=!1,console.log("WEBSCOKET关闭了")}function r(){Sk_DATA.G_SOCKET_CONN=!1,console.log("WEBSCOKET错误！")}function i(e){var t=o.readUTF();JSON.parse(t)}var o=new egret.WebSocket;return Sk_DATA.G_SOCKET_CONN=!1,o.type=egret.WebSocket.TYPE_STRING,o.addEventListener(egret.ProgressEvent.SOCKET_DATA,i,this),o.addEventListener(egret.Event.CONNECT,t,this),o.addEventListener(egret.Event.CLOSE,n,this),o.addEventListener(egret.IOErrorEvent.IO_ERROR,r,this),o.connectByUrl(e),this},e}();__reflect(Sk_Scoket.prototype,"Sk_Scoket");var WXSDK=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.CLASS_NAME="JSSDK",t.title="赏金猎魔团-TestDemoV1.0",t.desc="根本停不下来啊！骚年！没有什么比这个打钱更刺激的啦！！",t.link="#",t.imgUrl="http://game.x8yx.com/game/ads/ads2.jpg",t}return __extends(t,e),t.prototype.init=function(){},t.prototype.WxStart=function(){this.url="http://game.x8yx.com/gameserver/weixinapi/json.php?url="+encodeURIComponent(location.href.split("#")[0]),this.getSignPackage(),Sk_DATA.WeChatSKD=this},t.prototype.getSignPackage=function(){var e=this,t=new egret.URLLoader,n=new egret.URLRequest(this.url);t.load(n),n.method=egret.URLRequestMethod.GET,t.addEventListener(egret.Event.COMPLETE,function(t){e.signPackage=JSON.parse(t.target.data),e.getWeiXinConfig(),e.getWeiXinShareTimeline(),e.getWeiXinShareAppMessage(null,null),e.getWeiXinShareQQ(),e.getWeiXinShareWeiBo()},this)},t.prototype.getWeiXinConfig=function(){var e=new BodyConfig;e.debug=!1,e.appId=this.signPackage.appid,e.timestamp=this.signPackage.timestamp,e.nonceStr=this.signPackage.noncestr,e.signature=this.signPackage.signature,e.jsApiList=["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"],wx.config(e),wx.ready(function(){console.log("注入成功！")}),wx.error(function(e){console.log(e)})},t.prototype.getUserWeizhi=function(e,t){wx.getLocation({success:function(n){console.log(n);var r={hasLocation:!0,longitude:n.longitude,latitude:n.latitude};e(r,t)}})},t.prototype.getchooseWXPay=function(e,t){var n={};n.timestamp=e.timestamp.toString(),n.nonceStr=e.nonceStr,n["package"]=e["package"],n.signType=e.signType,n.paySign=e.paySign,n.success=function(e){t.SuccPayback(!0),console.log("支付成功")},n.fail=function(e){t.SuccPayback(!1),alert("支付失败，请稍后重试"+JSON.stringify(e))},wx.chooseWXPay(n)},t.prototype.getWeiXinShareTimeline=function(){var e=new BodyMenuShareTimeline;e.title=this.title,e.imgUrl=this.imgUrl,e.link=this.link,e.success=function(){},e.fail=function(){},e.cancel=function(){},wx.onMenuShareTimeline(e)},t.prototype.getWeiXinShareAppMessage=function(e,t){var n=new BodyMenuShareAppMessage;n.title=this.title,n.imgUrl=this.imgUrl,n.link=this.link,n.desc=this.desc,n.success=function(){e(t)},wx.onMenuShareAppMessage(n)},t.prototype.getWeiXinShareQQ=function(){var e=new BodyMenuShareQQ;e.title=this.title,e.desc=this.desc,e.link=this.link,e.imgUrl=this.imgUrl,e.trigger=function(){alert("用户点击分享到QQ")},e.complete=function(e){alert(JSON.stringify(e))},e.success=function(){alert("已分享")},e.cancel=function(){alert("已取消")},e.fail=function(e){alert(JSON.stringify(e))},wx.onMenuShareQQ(e)},t.prototype.getWeiXinShareWeiBo=function(){var e=new BodyMenuShareWeibo;e.title=this.title,e.desc=this.desc,e.link=this.link,e.imgUrl=this.imgUrl,e.trigger=function(){alert("用户点击分享到微博")},e.complete=function(e){alert(JSON.stringify(e))},e.success=function(){alert("已分享")},e.cancel=function(){alert("已取消")},e.fail=function(e){alert(JSON.stringify(e))},wx.onMenuShareWeibo(e)},t.prototype.getWeixinShowMenuItems=function(e){void 0===e&&(e=null);var t=["menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:favorite","menuItem:share:facebook","menuItem:share:QZone","menuItem:editTag","menuItem:delete","menuItem:copyUrl","menuItem:originPage","menuItem:readMode","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand"];null!=e&&(t=e),wx.showMenuItems({menuList:t,success:function(e){alert("已显示“分享到朋友圈”等按钮")},fail:function(e){alert(JSON.stringify(e))}})},t.prototype.getWeixinHideMenuItems=function(e){void 0===e&&(e=null);var t=["menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:favorite","menuItem:share:facebook","menuItem:share:QZone","menuItem:editTag","menuItem:delete","menuItem:copyUrl","menuItem:originPage","menuItem:readMode","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand"];null!=e&&(t=e),wx.hideMenuItems({menuList:t,success:function(e){alert("已隐藏所有传播和保护类按钮")},fail:function(e){alert(JSON.stringify(e))}})},t}(egret.EventDispatcher);__reflect(WXSDK.prototype,"WXSDK");