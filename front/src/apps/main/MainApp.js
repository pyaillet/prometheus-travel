var ID_DEMO = "tc";
//var dDestination = new Date(2015, 9, 21, 4, 29)
var dDestination = new Date(1955, 10, 5, 6, 00)
var dPresent = new Date()
var dLast = new Date(1985, 9, 26, 1, 20)
var aHotSpots = new Array();
var increment = 1
var isIncrement = true
var numTimedOut = 0
var idTo = -1;
var idtime = -1;
var MONTH = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
var clips = new Object();
var background
var stage;
var blink;
var am0;
var am1;
var am2;
var al0;
var ar0;
var al1;
var ar1;
var al2;
var ar2;
var adjusty = 0;
var aToAppear0 = new Array();
var aToAppear1 = new Array();
var lMobile = false;
var totalEl = 0;
var loadedEl = 0;
var	curtxt
var	curstr
var	curshown
var	curindex
var	curnindex
var	curcal
var	curtime
var	curntime
var	curwait
var toShare;
var interactive = false
var debug = true;
var urlToShare = ""
var idto

var ADJUST_CHARS = new Object();
ADJUST_CHARS["q"] = 0
ADJUST_CHARS["w"] = 0
ADJUST_CHARS["e"] = 0
ADJUST_CHARS["r"] = 0
ADJUST_CHARS["t"] = 4
ADJUST_CHARS["y"] = 1
ADJUST_CHARS["u"] = 0
ADJUST_CHARS["i"] = 38
ADJUST_CHARS["o"] = 0
ADJUST_CHARS["p"] = 0
ADJUST_CHARS["a"] = 0
ADJUST_CHARS["s"] = 0
ADJUST_CHARS["d"] = 0
ADJUST_CHARS["f"] = 0
ADJUST_CHARS["g"] = 0
ADJUST_CHARS["h"] = 0
ADJUST_CHARS["j"] = 1
ADJUST_CHARS["k"] = 0
ADJUST_CHARS["l"] = 0
ADJUST_CHARS["z"] = 2
ADJUST_CHARS["x"] = 3
ADJUST_CHARS["c"] = 0
ADJUST_CHARS["v"] = 0
ADJUST_CHARS["b"] = 0
ADJUST_CHARS["n"] = 0
ADJUST_CHARS["m"] = 0
ADJUST_CHARS["0"] = 0;
ADJUST_CHARS["1"] = 28
ADJUST_CHARS["2"] = 2;
ADJUST_CHARS["3"] = 8,
ADJUST_CHARS["4"] = 4
ADJUST_CHARS["5"] = 1;
ADJUST_CHARS["6"] = 0
ADJUST_CHARS["7"] = 12;
ADJUST_CHARS["8"] = 0
ADJUST_CHARS["9"] = 2

//var cnt
function appReady(){
  showPreloaderapp();
  Global._app.hide();
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		lMobile = true;
	}


	if ( ((jQuery.browser.msie)  && (parseInt(jQuery.browser.version, 10) <= 8))) {
		jQuery(".lblLoader").html(Lng.ln("sorry"));
	}else{
		preloadImg();
	}

	if (lMobile){

		jQuery(".ingombro").hide();
	}
}

function preloadImg(){
	queue = new createjs.LoadQueue(false);
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("fileload", singlePreloaded);
 	queue.addEventListener("complete", allPreloaded);	
 	
	var a = [
 		{id:"backdrop",src:"img/hdVuoto.jpg"}, 
 		{id:"blink",src:"img/blink.png"}, 
 		{id:"ampm0",src:"img/ampm0.png"}, 
 		{id:"ampm1",src:"img/ampm1.png"}, 
 		{id:"ampm2",src:"img/ampm2.png"}, 
 		{id:"al0",src:"img/al0.png"}, 
 		{id:"ar0",src:"img/ar0.png"}, 
 		{id:"al1",src:"img/al1.png"}, 
 		{id:"ar1",src:"img/ar1.png"}, 
 		{id:"al2",src:"img/al2.png"}, 
 		{id:"ar2",src:"img/ar2.png"}, 
 		{id:"empty",src:"img/empty.png"}, 
 		{id:"empty0",src:"img/btnBack.png"}, 
 		{id:"empty1",src:"img/btnSend.png"}, 
 		{id:"fnt0",src:"css/lcd-webfont.eot"}, 
 		{id:"fnt1",src:"css/lcd-webfont.svg"}, 
 		{id:"fnt2",src:"css/lcd-webfont.ttf"}, 
 		{id:"fnt3",src:"css/lcd-webfont.woff"},
 		{id:"fnt4",src:"css/bttf-webfont.eot"}, 
 		{id:"fnt5",src:"css/bttf-webfont.svg"}, 
 		{id:"fnt6",src:"css/bttf-webfont.ttf"}, 
 		{id:"fnt7",src:"css/bttf-webfont.woff"}
	];

	if ((jQuery.browser.opera) ||(jQuery.browser.mozilla)){
 		a.push({id:"sndInnestoOgg",src:"snd/innesto.ogg"});
 		a.push({id:"sndHelloItOgg",src:"snd/hello_it.ogg"});
 		a.push({id:"sndHelloEnOgg",src:"snd/hello_en.ogg"});
 		a.push({id:"sndHeiEnOgg",src:"snd/ehi_en.ogg"});
 		a.push({id:"sndHeiItOgg",src:"snd/ehi_it.ogg"});
 	}else{
 		a.push({id:"sndInnestoMp3",src:"snd/innesto.mp3"});
 		a.push({id:"sndHelloItMp3",src:"snd/hello_it.mp3"});
 		a.push({id:"sndHelloEnMp3",src:"snd/hello_en.mp3"});
 		a.push({id:"sndHeiEnMp3",src:"snd/ehi_en.mp3"});
 		a.push({id:"sndHeiItMp3",src:"snd/ehi_it.mp3"});

 	}
 	totalEl = a.length;
 	loadedEl = 0;


 	queue.loadManifest(a);
}

function singlePreloaded(e){
	loadedEl++
	var perc =  Math.floor((loadedEl*121)/ (totalEl));
  perc+=2;
  
  var s = ""+perc;
  if (s.charAt(s.length-1) == 0){
  	perc++;
  }
  trace(perc)
  if (perc > 121){
  	perc = 121;
  }
	jQuery(".lblLoader").text(Lng.ln("loading", Lng.safeReplace(""+(perc/100),".",Lng.ln("decimalsep")  ) ) );
}


function allPreloaded(e){

  stage = new createjs.Stage(jQuery("#stage")[0]);
	jQuery(".lblLoader").text(Lng.ln("loading",Lng.safeReplace("1,21",",",Lng.ln("decimalsep"))));
  if ((!jQuery.browser.msie) && (!jQuery.browser.mozilla)) {
  	adjustx = 0;
  	adjusty = 18;
  }

  createjs.Sound.registerSound("snd/innesto.mp3|snd/innesto.ogg", "sndInnesto");
  createjs.Sound.registerSound("snd/hello_en.mp3|snd/hello_en.ogg", "sndHelloen");
  createjs.Sound.registerSound("snd/hello_it.mp3|snd/hello_it.ogg", "sndHelloit");
  createjs.Sound.registerSound("snd/ehi_en.mp3|snd/ehi_en.ogg", "sndHeien");
  createjs.Sound.registerSound("snd/ehi_it.mp3|snd/ehi_it.ogg", "sndHeiit");
  
  
	
	showBackground();
	createAmPm();
	showDefaultText();
	showBlink();
	turnOffText();
	createHotSpots();
	createArrows();

	setTimeout(hidePreloader,1000)

}

function hidePreloader(){
  hidePreloaderapp();
  Global._app.show();
  stage.update();
	playSound("sndInnesto");
  setTimeout(makeTextAppear,1000);
}

function turnOffText(){
	for (var a in clips){
		if (a.indexOf("s") >=0){
			clips[a].visible = false;
			if (a.indexOf("_0s") >=0){
				aToAppear1.push(clips[a]);
			}else if (a.indexOf("_1s") >=0){
				aToAppear1.push(clips[a]);
			}else if (a.indexOf("_2s") >=0){
				aToAppear1.push(clips[a]);
			}else{	
				aToAppear0.push(clips[a]);
			}
		}
	}
	am0.visible = false;
	am1.visible = false;
	am2.visible = false;
	blink.visible = false;
	aToAppear0.push(am0)
	aToAppear0.push(am1)
	aToAppear0.push(am2)
	aToAppear0.push(blink)
	stage.update();
}

function makeTextAppear(){
	playSound("sndInnesto");
	for (var x=0;x<aToAppear0.length;x++){
		aToAppear0[x].visible = true;
		aToAppear0[x].alpha = 0;
		if (x == aToAppear0.length-1){
			TweenMax.to(aToAppear0[x],0.15,{alpha:1,onUpdate:updateStage,onComplete:makeMonthAppear,ease:Linear.easeNone});
		}else{
			TweenMax.to(aToAppear0[x],0.15,{alpha:1,ease:Linear.easeNone});
		}
	}
}

function playSound(id,loop){
	if (!lMobile){
		var instance
		if (!loop){
			instance = createjs.Sound.play(id); 
		}else{
			instance  = createjs.Sound.play(id,createjs.Sound.INTERRUPT_ANY, 0, 0, -1); 
		}
	}
}



function makeMonthAppear(){
	for (var x=0;x<aToAppear1.length;x++){
		aToAppear1[x].visible = true;
		aToAppear1[x].alpha = 0;
		if (x == aToAppear1.length-1){
			TweenMax.to(aToAppear1[x],0.15,{delay:0.15,alpha:1,onUpdate:updateStage,onComplete:initInteractions,ease:Linear.easeNone});
		}else{
			TweenMax.to(aToAppear1[x],0.15,{delay:0.15,alpha:1,ease:Linear.easeNone});
		}
	}
}

function updateStage(){
	stage.update();
}

function initInteractions(){
	stage.update();
	setTimeout(initBlink,250);
	createHotSpots();
	initCurrentTime();
	setTimeout(showHey,3000)
}

function initCurrentTime(){
	idtime = setTimeout(checkTime,1000);
}

function checkTime(){
	var now = (""+new Date()).split(":")
	var dif = (""+dPresent).split(":")
	if (now[0] == dif[0]){
		if (now[1] != dif[1]){
			dPresent = new Date();
			showMiddleText(normalize(dateToString(dPresent)),amOrPm(dPresent));
		}
	}

	idtime = setTimeout(checkTime,1000);
}

function showBackground(){
	background = new createjs.Bitmap(queue.getResult("backdrop"));
	background.x = 0;
	background.y = 0;
	stage.addChild(background);
	stage.update();
	background.onClick = function(){
		hideArrows();
		resizeArea(this);
		stage.update();
	}

}


function createArrows(){
	al0 = new createjs.Bitmap(queue.getResult("al0"));
	stage.addChild(al0);
	ar0 = new createjs.Bitmap(queue.getResult("ar0"));
	stage.addChild(ar0);
	al1 = new createjs.Bitmap(queue.getResult("al1"));
	stage.addChild(al1);
	ar1 = new createjs.Bitmap(queue.getResult("ar1"));
	stage.addChild(ar1);
	al2 = new createjs.Bitmap(queue.getResult("al2"));
	stage.addChild(al2);
	ar2 = new createjs.Bitmap(queue.getResult("ar2"));
	stage.addChild(ar2);

	hideArrows();
}


function createHotSpots(){
	stage.enableMouseOver(60);
	var aSpots = [
								[120,87,218,96,0,0,7], // posx,posy,w,h,row,type,divisor
								[365,84,132,96,0,1,4],
								[535,81,265,96,0,2,8],
								[860,79,133,96,0,3,4],
								[1032,79,135,96,0,4,4],
								[106,323,218,96,1,0,7],
								[351,322,132,96,1,1,4],
								[526,321,265,96,1,2,8],
								[851,321,133,96,1,3,4],
								[1023,324,135,96,1,4,4],
								[94,566,218,96,2,0,7],
								[340,565,132,96,2,1,4],
								[516,562,265,96,2,2,8],
								[843,561,133,96,2,3,4],
								[1014,561,135,96,2,4,4]
								];
	var a = aSpots
	for (var x=0;x<a.length;x++){
		var emp = new createjs.Container();
	  var g = new createjs.Graphics();
	  g.beginFill("#000000");
	  g.rect(0,0,a[x][2],a[x][3]);
	  var shp = new createjs.Shape(g);
	  emp.addChild(shp)

		stage.addChild(emp);
		emp.x = a[x][0]
		emp.y = a[x][1]
		emp.alpha = 0.01
		emp.origx = emp.x;
		emp.origw = a[x][2];
		emp.quale = a[x][4];
		emp.tipo = a[x][5];
		emp.show = false;
		emp.delta = Math.floor(a[x][2]/a[x][6]);
		var n = a[x][6];
		emp.delta = emp.delta * ((n-2)/2);

		emp.onClick = function(){
			if (interactive){
				this.show = !this.show;
				if (this.show){
					hideArrows();
					resizeArea(this);
					this.x -= 27;
					this.scaleX = (this.origw +27*2) / this.origw;
					showArrows(this)
					stage.update();
				}else{
					if ((stage.mouseX >= this.x+(this.origw/2-this.delta)+27) && (stage.mouseX <= this.x+(this.origw/2+this.delta)+27)){
						this.x += 27;
						this.scaleX = 1
						hideArrows()
						this.onPress = undefined;
						stage.update();
					}else{
						this.show = !this.show;
					}
				}
			}
		}
		aHotSpots.push(emp);

	}

}

function showArrows(mc){
	if (mc.quale == 0){
		al = al0
		ar = ar0
	}
	if (mc.quale == 1){
		al = al1
		ar = ar1
	}
	if (mc.quale == 2){
		al = al2
		ar = ar2
	}

	al.x = mc.x;
	al.y = mc.y;

	ar.x = mc.x+mc.origw+27;
	ar.y = mc.y;

	al.visible = true
	ar.visible = true

	initStepper(mc)

}
function hideArrows(){
	al0.visible = false;
	ar0.visible = false;
	al1.visible = false;
	ar1.visible = false;
	al2.visible = false;
	ar2.visible = false;
}

function resizeArea(excludeMc){
	for (var x=0;x<aHotSpots.length;x++){
		aHotSpots[x].onPress = undefined;
		if (aHotSpots[x] != excludeMc){
			if (aHotSpots[x].show){
				aHotSpots[x].show = false;
				aHotSpots[x].x += 27;
				aHotSpots[x].scaleX = 1
			}
		}
	}
}


function createAmPm(){
	am0 = new createjs.Bitmap(queue.getResult("ampm0"));
	stage.addChild(am0);
	am1 = new createjs.Bitmap(queue.getResult("ampm1"));
	stage.addChild(am1);
	am2 = new createjs.Bitmap(queue.getResult("ampm2"));
	stage.addChild(am2);

}


function showDefaultText(){
	
	showUpperText(normalize(dateToString(dDestination)),amOrPm(dDestination));
	showMiddleText(normalize(dateToString(dPresent)),amOrPm(dPresent));
	showLowerText(normalize(dateToString(dLast)),amOrPm(dLast));
}

function amOrPm(d){
	var ore = d.getHours();
	//trace(ore)
	if (ore >= 12){
		return false
	}
	return true
}

function dateToString(d){
	var ore = d.getHours();
	if (ore > 12){
		ore-=12;
	}
	if (ore == 0){
		ore = 12;
	}
	return getTextMonth(d)+ " " + pad("0",d.getDate(),2) + " "+pad("0",d.getFullYear(),4)+ " "+ pad("0",ore,2)+" " +pad("0",d.getMinutes(),2)
}

function getTextMonth(d){
	var m = MONTH;
	var n = d.getMonth();
	return m[n];
}
function pad(c,s,len){
	s = ""+s;
	while (s.length < len){
		s = c+s;
	}
	return s;
}

function normalize(s){
	s = Lng.safeReplace(s," ","");
	s = Lng.safeReplace(s,"1","i");
	return s
}

function showUpperText(s,lAm){

	if (lAm){
		am0.x = 812
		am0.y = 92
	}else{
		am0.x = 813
		am0.y = 146
	}
	
	putChars([
		[s.charAt(0),136,55,0],
		[s.charAt(1),194,54,0],
		[s.charAt(2),256,54,0],

		[s.charAt(3),364,52,0],
		[s.charAt(4),424,51,0],

		[s.charAt(5),536,50,0],
		[s.charAt(6),597,49,0],
		[s.charAt(7),661,49,0],
		[s.charAt(8),727,49,0],

		[s.charAt(9),859,48,0],
		[s.charAt(10),916,47,0],
		[s.charAt(11),1030,49,0],
		[s.charAt(12),1091,48,0],
		],"124px lcddregular","#EE3F08");		


}

function showMiddleText(s,lAm){

	if (lAm){
		am1.x = 800
		am1.y = 331
	}else{
		am1.x = 802
		am1.y = 387
	}
	
	putChars([
		[s.charAt(0),136-12,55+240,1],
		[s.charAt(1),194-12,54+240,1],
		[s.charAt(2),256-12,54+240,1],

		[s.charAt(3),364-12,52+240,1],
		[s.charAt(4),424-12,51+240,1],

		[s.charAt(5),536-12,50+240,1],
		[s.charAt(6),597-12,49+240,1],
		[s.charAt(7),661-12,49+240,1],
		[s.charAt(8),727-12,49+240,1],

		[s.charAt(9),859-8,48+240,1],
		[s.charAt(10),916-8,47+240,1],
		[s.charAt(11),1030-8,49+240,1],
		[s.charAt(12),1091-8,48+240,1],
		],"124px lcddregular","#57E753");		

}

function showLowerText(s,lAm){

	if (lAm){
		am2.x = 798
		am2.y = 571
	}else{
		am2.x = 799
		am2.y = 630
	}
	
	putChars([
		[s.charAt(0),136-24,55+483,2],
		[s.charAt(1),194-24,54+483,2],
		[s.charAt(2),256-24,54+483,2],

		[s.charAt(3),364-24,52+483,2],
		[s.charAt(4),424-24,51+483,2],

		[s.charAt(5),536-24,50+483,2],
		[s.charAt(6),597-24,49+483,2],
		[s.charAt(7),661-24,49+483,2],
		[s.charAt(8),727-24,49+483,2],

		[s.charAt(9),859-18,48+483,2],
		[s.charAt(10),916-18,47+483,2],
		[s.charAt(11),1030-18,49+483,2],
		[s.charAt(12),1091-18,48+483,2],
		],"124px lcddregular","#C89722");		
}

function putChars(a,dimface,color){
	for (var x=0;x<a.length;x++){
		putChar(a[x],dimface,color,x);
	}
	stage.update();
}

function putChar(a,dimface,color,quale){
	if (clips["mc"+a[3]+"_"+quale] != undefined){
		stage.removeChild(clips["mc"+a[3]+"_"+quale]);
	}
	if (clips["mc"+a[3]+"_"+quale+"s"] != undefined){
		stage.removeChild(clips["mc"+a[3]+"_"+quale+"s"]);
	}



  var text = new createjs.Text("8", dimface, color);
  text.x = a[1];
  text.y = a[2]+adjusty;
  text.alpha = 0.1;
  if (quale >= 3){
  	stage.addChild(text)
  	clips["mc"+a[3]+"_"+quale] = text;
	}

  var text = new createjs.Text(a[0], dimface, color);
  text.shadow = new createjs.Shadow(color, 0, 0, 10); 
  text.x = a[1]+getSpan(a[0]);
  text.y = a[2]+adjusty;
  stage.addChild(text)
  clips["mc"+a[3]+"_"+quale+"s"] = text;

}

function getSpan(c){
	var cl = c.toLowerCase();
	return ADJUST_CHARS[cl];
}

function showBlink(){
	blink = new createjs.Bitmap(queue.getResult("blink"));
	blink.x = 976;
	blink.y = 99;
	stage.addChild(blink);
	stage.update();
}

function initBlink(){
	setInterval(doBlink,500)
}


function doBlink(){
	blink.visible = !blink.visible;
	stage.update();
}

function initStepper(mc){
	stage.curMc = mc;
	mc.onPress = function(evt){
		var lMouse = false;
		if (stage.mouseX < this.x+(this.origw/2-this.delta)+27){
			beginDecStepper(this);
			lMouse = true;
		}else if (stage.mouseX > this.x+(this.origw/2+this.delta)+27){
			beginIncStepper(this);
			lMouse = true;
		}
		if (lMouse){
			evt.onMouseUp = function(){
				this.onMouseUp = undefined;
				stopIncDecStepper(this);
			}
		}
	}
}

function beginIncStepper(mc){
	isIncrement = true;
	increment = 1;
	numTimedOut = 0;
	doIncDec(mc,true);
	
}

function beginDecStepper(mc){
	isIncrement = false;
	increment = 1;
	numTimedOut = 0;
	doIncDec(mc,false);
}

function doIncDec(mc,lInc){
	numTimedOut++;
	clearTimeout(idTo);
	applyIncDec(mc,lInc);
	if (numTimedOut == 1){
		idTo = setTimeout(function(){doIncDec(mc,lInc)} , 250);
	}else{
		if (numTimedOut % 10 == 0){
			increment *=2;
		}
		idTo = setTimeout(function(){doIncDec(mc,lInc)} , 100);
	}
}

function stopIncDecStepper(mc){
	clearTimeout(idTo);
}


function getProperDateObj(mc){
	if (mc.quale == 0){
		return dDestination;
	}
	if (mc.quale == 1){
		return dPresent;
	}
	return dLast
}

function setNewDate(mc,dnew){
	if (mc.quale == 0){
		dDestination = dnew;
		return
	}
	if (mc.quale == 1){
		dPresent = dnew
		return
	}
	dLast = dnew;
}

function displayNewDate(mc){
	if (mc.quale == 0){
		showUpperText(normalize(dateToString(dDestination)),amOrPm(dDestination));
		return
	}
	if (mc.quale == 1){
		clearTimeout(idtime)
		showMiddleText(normalize(dateToString(dPresent)),amOrPm(dPresent));
		return
	}
	showLowerText(normalize(dateToString(dLast)),amOrPm(dLast));
}


function applyIncDec(mc,lInc){
	if (mc.tipo == 0){
		applyIncDecMonth(getProperDateObj(mc),mc,lInc);
	}
	if (mc.tipo == 1){
		applyIncDecDay(getProperDateObj(mc),mc,lInc);
	}
	if (mc.tipo == 2){
		applyIncDecYear(getProperDateObj(mc),mc,lInc);
	}
	if (mc.tipo == 3){
		applyIncDecHours(getProperDateObj(mc),mc,lInc);
	}
	if (mc.tipo == 4){
		applyIncDecMinutes(getProperDateObj(mc),mc,lInc);
	}
}


function applyIncDecMonth(d,mc,lInc){
	var curMonth = d.getMonth();
	if (lInc){
		curMonth+=increment;
		if (curMonth > 11){
			curMonth = 0;
		}
	}else{
		curMonth-=increment;
		if (curMonth < 0){
			curMonth = 11;
		}
	}

	var dnew = new Date(d.getFullYear(), curMonth, d.getDate(), d.getHours(), d.getMinutes())
	dnew.setFullYear(d.getFullYear())
	setNewDate(mc,dnew)
	displayNewDate(mc);
}


function applyIncDecDay(d,mc,lInc){
	var curDay = d.getDate();
	if (lInc){
		curDay+=increment;
		if (curDay > 31){
			curDay = 1;
		}
	}else{
		curDay-=increment;
		if (curDay < 1){
			curDay = 31;
		}
	}

	var dnew = new Date(d.getFullYear(), d.getMonth(), curDay, d.getHours(), d.getMinutes())
	dnew.setFullYear(d.getFullYear())
	setNewDate(mc,dnew)
	displayNewDate(mc);
}

function applyIncDecYear(d,mc,lInc){
	var curYear = d.getFullYear();
	if (lInc){
		curYear+=increment;
		if (curYear > 9999){
			curYear = 0;
		}
	}else{
		curYear-=increment;
		if (curYear < 0){
			curYear = 9999;
		}
	}
	var dnew = new Date(curYear, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes())
	dnew.setFullYear(curYear)
	setNewDate(mc,dnew)
	displayNewDate(mc);
}


function applyIncDecHours(d,mc,lInc){
	var curHours = d.getHours();
	if (lInc){
		curHours+=increment;
		if (curHours > 23){
			curHours = 0;
		}
	}else{
		curHours-=increment;
		if (curHours < 0){
			curHours = 23;
		}
	}

	var dnew = new Date(d.getFullYear(), d.getMonth(), d.getDate(),curHours, d.getMinutes())
	dnew.setFullYear(d.getFullYear())
	setNewDate(mc,dnew)
	displayNewDate(mc);
}

function applyIncDecMinutes(d,mc,lInc){
	var curMin = d.getMinutes();
	if (lInc){
		curMin+=increment;
		if (curMin > 59){
			curMin = 0;
		}
	}else{
		curMin-=increment;
		if (curMin < 0){
			curMin = 59;
		}
	}
	var dnew = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), curMin)
	dnew.setFullYear(d.getFullYear())
	setNewDate(mc,dnew)
	displayNewDate(mc);
}

function upload(){
	hideArrows();
	resizeArea(this);
	stage.update();

	var canvasData = jQuery("#stage")[0].toDataURL("image/jpeg",0.6);
	var file= dataURLtoBlob(canvasData);
	var fd = new FormData();
	fd.append("immagine", file);
	fd.append("nome","destination_"+(new Date()).getTime());
	fd.append("titolo",Lng.ln("shtitle",getDestDate()));
	fd.append("scegli",Lng.ln("scegli"));
	if (dDestination > new Date()){
		fd.append("desc",Lng.ln("shdescfut",getDestDate()));
	}else{
		fd.append("desc",Lng.ln("shdesc",getDestDate()));
	}
	var agg = jQuery("#tarea").val();
	agg = agg.charAt(0).toUpperCase() + agg.substr(1);
	fd.append("descagg",agg);
	$.ajax({
  	url: "upload.asp",
   	type: "POST",
   	data: fd,
   	processData: false,
   	contentType: false,
		}).done(function(respond){
			urlToShare = respond;
			checkShare();
	});
}


function dataURLtoBlob(dataURL) {
	// Thanks, got this code from "http://mitgux.com/send-canvas-to-server-as-file-using-ajax"
  // Decode the dataURL    
  var binary = atob(dataURL.split(',')[1]);
  // Create 8-bit unsigned array
  var array = [];
  for(var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
  }
  // Return our Blob object
  return new Blob([new Uint8Array(array)], {type: 'image/jpg'});
}

function showHey(){
	interactive = true;
  jQuery(".formdettaglio").show();
	curshown = "";
	curtime = 50;
	curwait = 2500;
  stage.update();
	displayButtons();
}


function showFormText(s,txt,callback){
	curtxt = txt;
	curstr = s;
	curindex = 0;
	curcal = callback;
	showNextLetter();
	
}

function showNextLetter(){
	if (curindex < curstr.length){
		curshown += curstr[curindex]
		curindex++;
		curtxt.text(curshown);
		setTimeout(showNextLetter,curtime);
	}else{
		setTimeout(curcal,curwait)
	}
}

function showPart2(){
	var s = Lng.ln("form0")
	curshown = s.substr(0,s.length-3)+", ";
	curwait = 1000
	showFormText(Lng.ln("form1"),jQuery(jQuery("#title")),showPart3);
}

function showPart3(){
	curtime = 25;
	curshown = "";
	if (!debug){
		showFormText(Lng.ln("form2"),jQuery(jQuery("#subtitle")),displayButtons);
	}
}

function displayButtons(){
	jQuery(".buttonsShare").show();
	var btn0 = jQuery("#btnFb")
	var btn1 = jQuery("#btnTwt")
	var btn2 = jQuery("#btnGp")
	btn0.css("opacity",0)
	btn1.css("opacity",0)
	btn2.css("opacity",0)
	TweenMax.to(btn0,1,{css:{opacity:1}})
	TweenMax.to(btn1,1,{delay:0.3,css:{opacity:1}})
	TweenMax.to(btn2,1,{delay:0.6,css:{opacity:1}})
	setTimeout(setButtons,1000)
}
function setButtons(){
	var btn0 = jQuery("#btnFb")
	var btn1 = jQuery("#btnTwt")
	var btn2 = jQuery("#btnGp")
	var btn3 = jQuery("#btnSend")
	var btn4 = jQuery("#btnBack")
	Pqp.addClick(btn0,onShareFb);
	Pqp.addClick(btn1,onShareTwt);
	Pqp.addClick(btn2,onShareGp);
	Pqp.addClick(btn3,onSend);
	Pqp.addClick(btn4,onBack);
}

function onShareFb(){
	showAskDesc();
	toShare = doShareFb

}
function onShareTwt(){
	showAskDesc();
	toShare = doShareTwt
}
function onShareGp(){
	showAskDesc();	
	toShare = doShareGp
}

function showAskDesc(){
	jQuery(".formshare").hide();
	jQuery(".formdettaglio").show();
	if (dDestination > new Date()){
		jQuery("#titdesc").text(Lng.ln("askdescfut",getDestDate()));
	}else{
		jQuery("#titdesc").text(Lng.ln("askdesc",getDestDate()));
	}
}

function onSendSuccess(){
  dLast = dPresent;
  dPresent = dDestination;
  showDefaultText();
}
function onSend(){
  jQuery.post(
      '/travel-back/goToTime',
      '{"destination_date": '+dDestination.toISOString()+'}',
      onSendSuccess,
      "json"
    );
}
function onBack(){
	jQuery(".formshare").show();
	jQuery(".formdettaglio").hide();
	playSound("sndHello"+Global.LNG)
}


function doShareFb(){
	showCounter();
	toShare = forFb
	upload();

}
function doShareTwt(){
	showCounter();
	toShare = forTwt
	upload();
}
function doShareGp(){
	showCounter();	
	toShare = forGp
	upload();
}

function showCounter(){

	interactive = false;
	jQuery(".formdettaglio").hide();
	jQuery(".counter").show();
	simulateUpload();
}

function simulateUpload(){
	curnindex = 0;
	curntime = 0;
	incValue();
}

function incValue(){
	curntime++;
	if (curntime <= 88){
		jQuery("#uploading").text(Lng.ln("form3",curntime));	
		setTimeout(incValue,50);
	}else{
		//setTimeout(checkShare,1000);
		checkShare();
	}
}

function checkShare(){
	curnindex++;
	if (curnindex == 2){
		jQuery("#uploading").text(Lng.ln("form4",88));	
		setTimeout(toShare,2000)
		idto = setTimeout(showButtonsAgain,3000)
	}
}

function showButtonsAgain(){
	interactive = true;
	jQuery(".formshare").show();
	jQuery(".counter").hide();
}

function forFb(){
	var	uri = "http://www.facebook.com/sharer/sharer.php?u=" + escape("http://www.int33h.com/public/tc/"+urlToShare);
	var popup = window.open(uri);
	if ((popup == null) || (typeof(popup)=='undefined')) { 	
		playSound("sndHello"+Global.LNG)
		jQuery("#uploading").html(Lng.ln("popup","facebook"));
		clearTimeout(idto);
		setTimeout(showButtonsAgain,12000)
	}
}

function forTwt(){
	var uri = "http://twitter.com/intent/tweet?url=http://tinyurl.com/qjhambn&text=[msg]&hashtags="+escape(Lng.ln("tags"))
	if (dDestination > new Date()){
		uri = Lng.safeReplace(uri,"[msg]",(Lng.ln("sharetwtfut",getDestDate())));
	}else{
		uri = Lng.safeReplace(uri,"[msg]",(Lng.ln("sharetwt",getDestDate())));
	}
	var popup = window.open(uri);
	if ((popup == null) || (typeof(popup)=='undefined')) { 	
		playSound("sndHello"+Global.LNG)
		jQuery("#uploading").html(Lng.ln("popup","twitter"));
		clearTimeout(idto);
		setTimeout(showButtonsAgain,12000)
	}
	
}
function forGp(){
	var	uri = "https://plus.google.com/share?url=" + escape("http://www.int33h.com/public/tc/"+urlToShare);
	var popup = window.open(uri);
	if ((popup == null) || (typeof(popup)=='undefined')) { 	
		playSound("sndHello"+Global.LNG)
		jQuery("#uploading").html(Lng.ln("popup","google plus"));
		clearTimeout(idto);
		setTimeout(showButtonsAgain,12000)
	}

}

function getDestDate(){
	var mese = Lng.ln("mesi")[dDestination.getMonth()];
	var anno = dDestination.getFullYear();
	var giorno = dDestination.getDate();
	var opt = ["st","nd","rd","th"];
	var pos
	if (giorno < 4){
		pos = opt[giorno-1];
	}else{
		pos = opt[3];
	}
	
	var s = Lng.ln("datef",mese,giorno,anno,pos);
	return s;
}

