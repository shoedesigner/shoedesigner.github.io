(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1280,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/animateCCimage.jpg", id:"animateCCimage"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.animateCCimage = function() {
	this.initialize(img.animateCCimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1400,788);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.animateCCimage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1400,788);


(lib.buy_web = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4AAAD").s().p("EhmrASkMAAAglIMDNXAAAMAAAAlIg");
	this.shape.setTransform(657.3,118.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1314.5,237.8);


(lib.BUY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4AAAD").s().p("EApgADoQAigIAPgPQAPgOAAgZQAAgbgYgTQgPgOgsgTQgwgVgSgIQgSgJgQgNQhJgyAAhXQAAgtASglQASgmAhgXQAuggBDgEIAAAtQgYAHgMAOQgNANAAAVQAAATAKAPQALAOAYAOQAQAJA6AaQAjAOAUANQATAMARASQAuAvAABDQAAAygZAqQgZAqgsAYQgXAMgcAIQgcAGgYABgEAn7AECIgUgIQgFgDgFAAQgIAAgEAEQgEACgIAKQgHAIgJAAQgVAAAAghIAAiPQAAgKAGgIQAGgHAJgBQAJgBAFAGQAFAFADANQAJAiARAdQARAeAXAUQAXAVAeAGIAAAtQgggBgngSgEAiwAD3QgdgdAAg1IAAhCIAAgZQgCgQgJgLQgMgOgVgCIAAgoQAVgDAJgIQAIgHADgJQADgJAAgRIAAhoQAAgYgJgNQgKgMgZgHIAAgrIAKAAQArAAAfADQAtAEAkAaQAzAkAABDQAAA3giAjQgPAPgTAKQgUAJgnAJQAkAGATAHQAUAHAPALQARAMAJARQAIAQAAATIAABRQAAAMAIAAQAEABACgCIAGgHQAKgNAKAAQAGgBAHAIQAHAHAAAHQAAAMgMARQgLASgSAOQgQAMgSAGQgTAGgaAAQgzgBgdgdgAuMDoQAigIAPgPQAPgOAAgZQAAgbgYgTQgPgOgsgTQgwgVgSgIQgSgJgQgNQhJgyAAhXQAAgtASglQASgmAhgXQAuggBDgEIAAAtQgYAHgMAOQgNANAAAVQAAATAKAPQALAOAYAOQAQAJA6AaQAjAOAUANQATAMARASQAuAvAABDQAAAygZAqQgZAqgsAYQgXAMgcAIQgcAGgYABgAvxECIgUgIQgFgDgFAAQgIAAgEAEQgEACgIAKQgHAIgJAAQgVAAAAghIAAiPQAAgKAGgIQAGgHAJgBQAJgBAFAGQAFAFADANQAJAiARAdQARAeAXAUQAXAVAeAGIAAAtQgggBgngSgA/uDiQAngFAagcQAegeAAg7IAAj8QAAg2gpgUQgMgHgEgEQgEgFAAgJQAAgKAIgEQAHgEARAAIBgAAIAQAAQAEABAEADQAKAFAAAKQAAAJgGAGIgRAKQgRAJgKAUQgKATAAAZIAAD9QAABCgdAqQgVAfgnATQgUAJgbAFgEggbAEVQgygBgigIQgngLgegVQgegUgMgaQgOgcAAg0IAAkwQAAgOgEgGIgEgFIgQgFQgPgFAAgQQAAgJAHgFQAIgGAOAAIDRABQAGACAEAFQAFAFAAAHQAAAQgQAFIgPAFQgCABgCAEQgFAGAAAOIAAFFQAAAiACANQABANAGAKQAFAKAGAFQAGAEASAGIAAAzgAeQEKQgOAAgHgFQgIgFAAgLQAAgQAPgEIAQgGQACgBACgDQAFgGAAgOIAAmFQAAgOgFgGQgCgEgCgBIgQgFQgPgFAAgQQAAgKAIgEQAHgGAOAAIC4AAIAAHJQAAAPAGAHQADADADABIASAGQATADAAASQAAAKgLAHQgHAEgRAAgAaWEKIAAgqQAZgEARgHQAQgHARgPQARgOAKgPQAKgQAJgaQAEgMAFgEQAEgFAJAAQALAAAEAHQAEAGAAAQIAACKgAW7EKQgOAAgIgFQgIgFAAgLQAAgQAQgEIAPgGQACgBACgDQAFgGAAgOIAAmFQAAgOgFgGQgCgEgCgBIgPgFQgQgFAAgQQAAgKAIgEQAIgGAOAAIC4AAIAAITgASGEKQgOAAgHgGQgIgFAAgLQAAgNAOgHIAMgHQADgEABgFIgDgMIgyiVQgHgVAAgPQAAgLALgQIBdiEQAOgSAAgUQAAgLgGgJQgGgJgKgFIgOgFQgNgGAAgMQAAgLAIgHQAGgEAMAAICLAAQAOAAAIAGQAHAGAAALQAAAQgSAHIgVAIQgNAFgTARQgPAMgWAdIgbAlIB2EzQAFANAFAGQAFAHAIADIAKAGQAGAFAAAJQAAAVgdAAgAN4EKQgOAAgIgFQgIgFAAgLQAAgQAQgEIAPgGIAFgEQAEgGAAgOIAAmFQAAgOgEgGIgFgFIgPgFQgQgFAAgQQAAgKAIgEQAIgGAOAAIDCAAQAOAAAIAGQAIAEAAAKQAAAQgQAFIgPAFQgCABgDAEQgEAGAAAOIAAGFQAAAWALADIAMAFQAPAEAAAQQAAAVgcAAgAJREKQgMAAgHgFQgHgHAAgJQAAgHADgEQADgFALgFQAIgEADgFQADgEAAgIQAAgGgBgFIgNg5IhtAAIALguIBYAAIhIk8IAJgmICeAAIBsHJIAHAWQAEAHAMAFQAKADAEAFQAEAFAAAGQAAAVgeAAgAFiEKQgOAAgJgGQgIgGAAgKQAAgMARgHQAQgIAIgFQAHgGAHgJQALgRAHgaIBYlAIAUBRIhFD6QgDALAAAJQAAAZAXAKIAOAHQANAGAAANQAAAUgdAAgACGEKIAAgqQAZgEARgHQAQgHARgPQARgOAKgPQAKgQAJgaQAEgMAFgEQAEgFAJAAQALAAAEAHQAEAGAAAQIAACKgAhTEKQgOAAgIgFQgIgFAAgLQAAgQAQgEIAPgGQACgBACgDQAFgGAAgOIAAmFQAAgOgFgGQgCgEgCgBIgPgFQgQgFAAgQQAAgKAIgEQAIgGAOAAIC2AAIAAITgAlHEKIkKnHQgIgPgGgGQgFgFgJgEIgPgFQgGgBgDgGQgEgFAAgGQAAgHAEgGQADgFAGgDQAHgCAdAAICrAAIDQFmIAACtgApmEKQgkAAAAgVQAAgGAEgEQAEgFAMgGQAmgWAAg2IAAkUIApBFIAADPQAAAbAJASQAJARAUAMIAMAGQAKAHAAALQAAAJgHAGQgGAFgUAAgA6JEKQgSAAgHgEQgKgHAAgKQAAgSATgDIASgGQACgBADgDQAGgHAAgPIAAiEIhvkGQgGgPgLgGQgLgHgCgEQgEgEAAgHQAAgUAeAAIDAAAQAPAAAGAEQAJAGAAAJQAAANgLAIIgLAGQgHAFAAAIQAAAKAEAKIBbDPIAACrQAAAPAGAHQADADADABIASAGQATADAAASQAAALgLAGQgGAEgSAAgEgovAEKIAAgpQAPgBAJgEQAJgDAHgIQANgOAAgfIAAhYQAAgUgDgKQgDgMgJgIQgHgIgIgDQgIgDgOgCIAAgnQAOgBAJgDQAHgCAHgHQAGgFAFgKQAEgJAAgIIAAhZQAAgLgDgLQgEgMgFgGQgHgJgJgEQgKgEgPgCIAAgrIAtAAQBZAAAvAkQAVARALAYQAMAYAAAbQAAAcgMAYQgLAYgVARQgPAMgUAIQgUAIgkAIQAjAHATAEQATAHAPAKQAaARAOAcQAOAbAAAiQAABDgxAlQgaAUgeAIQgfAIgyAAgEgsHAEKQgOAAgHgFQgIgFAAgLQAAgQAPgEIAQgGQACgBACgDQAFgGAAgOIAAmFQAAgOgFgGQgCgEgCgBIgQgFQgPgFAAgQQAAgKAIgEQAHgGAOAAIC4AAIAAITgAbOBgQgFgFgDgOQgGgagNgOQgMgPgUgFIAAgrQAXgLALgNQALgNAFgWQADgOAFgFQAFgGAKgBQAMABAFAJQADAGAAARIAACTQAAASgEAHQgFAIgLgBQgJAAgFgFgAC+BgQgFgFgDgOQgGgagNgOQgMgPgUgFIAAgrQAXgLALgNQALgNAFgWQADgOAFgFQAFgGAKgBQAMABAFAJQADAGAAARIAACTQAAASgEAHQgFAIgLgBQgJAAgFgFgAkGgkIAAhtQAAgggKgSQgJgSgZgMQgIgEgDgEQgDgFAAgHQAAgKAHgFQAHgFAPAAIBiAAQATAAAHAGQAGAGAAAJQAAAIgDAFQgEAEgOAGQgVALgKAWQgIAQAAAbIAACwgA3VhBIAphcQAFgMAAgTQAAgYgZgJQgOgGgEgEQgEgEAAgIQAAgLAHgFQAFgEAGgBIAUgBIBgAAQAcAAAAAWQAAAHgEAFQgEAEgKAFQgTAJgJAIQgLANgIAPIhKCjgEArtgBaQgDgDgCgFQgDgFgCgKQgEgUgKgTQgLgVgOgQQgcgfgrgLIAAgrQAYACARAFQARAEAgANQAHADAGAAQAHAAAEgFIAIgLQAGgJAJAAQALAAAFAIQAFAHAAARIAACAQAAAMgHAHQgGAIgKgBQgIAAgHgEgAr/haQgDgDgCgFQgDgFgCgKQgEgUgKgTQgLgVgOgQQgcgfgrgLIAAgrQAYACARAFQARAEAgANQAHADAGAAQAHAAAEgFIAIgLQAGgJAJAAQALAAAFAIQAFAHAAARIAACAQAAAMgHAHQgGAIgKgBQgIAAgHgEgAcThrQgEgEgEgLQgPgtgcgYQgdgYgugFIAAgtICeAAIAACKQAAAMgFAFQgFAGgKAAQgIAAgEgDgAEDhrQgEgEgEgLQgPgtgcgYQgdgYgugFIAAgtICeAAIAACKQAAAMgFAFQgFAGgKAAQgIAAgEgDg");
	this.shape.setTransform(285.4,27.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,570.8,55.4);


// stage content:
(lib.animate_banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.buy_web.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=buy+trainers&*", "_blank");
		}
	}
	this.frame_119 = function() {
		this.buy_web.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("https://www.google.co.uk/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=buy+trainers&*", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(1));

	// Layer 4
	this.instance = new lib.BUY();
	this.instance.setTransform(1583.1,105,1,1,0,0,0,285.4,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1582.8},0).wait(1).to({x:1582.5,y:105.1},0).wait(1).to({x:1582.3},0).wait(1).to({x:1582},0).wait(1).to({x:1581.8},0).wait(1).to({x:1581.5,y:105.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1581},0).wait(1).to({x:1580.8},0).wait(1).to({x:1580.5,y:105.3},0).wait(1).to({x:1580.2},0).wait(1).to({x:1580},0).wait(1).to({x:1579.7},0).wait(1).to({x:1579.5,y:105.4},0).wait(1).to({x:1579.2},0).wait(1).to({x:1579},0).wait(1).to({x:1578.7},0).wait(1).to({x:1578.5,y:105.5},0).wait(1).to({x:1578.2},0).wait(1).to({x:1578},0).wait(1).to({x:1577.7,y:105.6},0).wait(1).to({x:1565.7},0).wait(1).to({x:1553.6},0).wait(1).to({x:1541.6},0).wait(1).to({x:1529.6},0).wait(1).to({x:1517.5},0).wait(1).to({x:1505.5},0).wait(1).to({x:1493.5},0).wait(1).to({x:1481.4},0).wait(1).to({x:1469.4},0).wait(1).to({x:1457.4},0).wait(1).to({x:1445.3},0).wait(1).to({x:1433.3},0).wait(1).to({x:1421.3},0).wait(1).to({x:1409.2},0).wait(1).to({x:1397.2},0).wait(1).to({x:1385.2},0).wait(1).to({x:1373.1},0).wait(1).to({x:1361.1},0).wait(1).to({x:1349.1},0).wait(1).to({x:1337},0).wait(1).to({x:1325},0).wait(1).to({x:1313},0).wait(1).to({x:1300.9},0).wait(1).to({x:1288.9},0).wait(1).to({x:1276.9},0).wait(1).to({x:1264.8},0).wait(1).to({x:1252.8},0).wait(1).to({x:1240.7},0).wait(1).to({x:1228.7},0).wait(1).to({x:1216.7},0).wait(1).to({x:1204.6},0).wait(1).to({x:1192.6},0).wait(1).to({x:1180.6},0).wait(1).to({x:1168.5},0).wait(1).to({x:1156.5},0).wait(1).to({x:1144.5},0).wait(1).to({x:1132.4},0).wait(1).to({x:1120.4},0).wait(1).to({x:1108.4},0).wait(1).to({x:1096.3},0).wait(1).to({x:1084.3},0).wait(1).to({x:1072.3},0).wait(1).to({x:1060.2},0).wait(1).to({x:1048.2},0).wait(1).to({x:1036.2},0).wait(1).to({x:1024.1},0).wait(1).to({x:1012.1},0).wait(1).to({x:1000.1},0).wait(1).to({x:988},0).wait(1).to({x:976},0).wait(1).to({x:964},0).wait(1).to({x:951.9},0).wait(1).to({x:939.9},0).wait(46));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhkKAQqMAAAghTMDIVAAAMAAAAhTg");
	var mask_graphics_119 = new cjs.Graphics().p("EhkKAQqMAAAghTMDIVAAAMAAAAhTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:640,y:104.5}).wait(119).to({graphics:mask_graphics_119,x:640,y:104.5}).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(662.2,56.2,1,1,0,0,0,700,394);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:661.7,y:58.7},0).wait(1).to({x:661.1,y:61.2},0).wait(1).to({x:660.5,y:63.7},0).wait(1).to({x:659.9,y:66.1},0).wait(1).to({x:659.3,y:68.6},0).wait(1).to({x:658.7,y:71.1},0).wait(1).to({x:658.1,y:73.6},0).wait(1).to({x:657.5,y:76},0).wait(1).to({x:656.9,y:78.5},0).wait(1).to({x:656.3,y:81},0).wait(1).to({x:655.7,y:83.5},0).wait(1).to({x:655.1,y:85.9},0).wait(1).to({x:654.5,y:88.4},0).wait(1).to({x:653.9,y:90.9},0).wait(1).to({x:653.3,y:93.4},0).wait(1).to({x:652.7,y:95.8},0).wait(1).to({x:652.1,y:98.3},0).wait(1).to({x:651.5,y:100.8},0).wait(1).to({x:650.9,y:103.3},0).wait(1).to({x:650.3,y:105.7},0).wait(1).to({x:649.7,y:108.2},0).wait(1).to({x:649.1,y:110.7},0).wait(1).to({x:648.5,y:113.2},0).wait(1).to({x:647.9,y:115.6},0).wait(1).to({x:647.3,y:118.1},0).wait(1).to({x:646.7,y:120.6},0).wait(1).to({x:646.1,y:123.1},0).wait(1).to({x:645.5,y:125.5},0).wait(1).to({x:644.9,y:128},0).wait(1).to({x:644.3,y:130.5},0).wait(1).to({x:643.7,y:133},0).wait(1).to({x:643.1,y:135.4},0).wait(1).to({x:642.5,y:137.9},0).wait(1).to({x:641.9,y:140.4},0).wait(1).to({x:641.3,y:142.9},0).wait(1).to({x:640.7,y:145.3},0).wait(1).to({x:640.1,y:147.8},0).wait(1).to({x:639.5,y:150.3},0).wait(1).to({x:638.9,y:152.8},0).wait(1).to({x:638.4,y:155.2},0).wait(1).to({x:637.8,y:157.7},0).wait(1).to({x:637.2,y:160.2},0).wait(1).to({x:636.6,y:162.6},0).wait(1).to({x:636,y:165.1},0).wait(1).to({x:635.4,y:167.6},0).wait(1).to({x:634.8,y:170.1},0).wait(1).to({x:634.2,y:172.5},0).wait(1).to({x:633.6,y:175},0).wait(1).to({x:633,y:177.5},0).wait(1).to({x:632.4,y:180},0).wait(1).to({x:631.8,y:182.4},0).wait(1).to({x:631.2,y:184.9},0).wait(1).to({x:630.6,y:187.4},0).wait(1).to({x:630,y:189.9},0).wait(1).to({x:629.4,y:192.3},0).wait(1).to({x:628.8,y:194.8},0).wait(1).to({x:628.2,y:197.3},0).wait(1).to({x:627.6,y:199.8},0).wait(1).to({x:627,y:202.2},0).wait(1).to({x:626.4,y:204.7},0).wait(1).to({x:625.8,y:207.2},0).wait(1).to({x:625.2,y:209.7},0).wait(1).to({x:624.6,y:212.1},0).wait(1).to({x:624,y:214.6},0).wait(1).to({x:623.4,y:217.1},0).wait(1).to({x:622.8,y:219.6},0).wait(1).to({x:622.2,y:222},0).wait(1).to({x:621.6,y:224.5},0).wait(1).to({x:621,y:227},0).wait(1).to({x:620.4,y:229.5},0).wait(1).to({x:619.8,y:231.9},0).wait(1).to({x:619.2,y:234.4},0).wait(1).to({x:618.6,y:236.9},0).wait(1).to({x:618,y:239.4},0).wait(1).to({x:617.4,y:241.8},0).wait(1).to({x:616.8,y:244.3},0).wait(1).to({x:616.2,y:246.8},0).wait(1).to({x:615.6,y:249.3},0).wait(1).to({x:615,y:251.7},0).wait(1).to({x:614.5,y:254.2},0).wait(1).to({x:613.9,y:256.7},0).wait(1).to({x:613.3,y:259.1},0).wait(1).to({x:612.7,y:261.6},0).wait(1).to({x:612.1,y:264.1},0).wait(1).to({x:611.5,y:266.6},0).wait(1).to({x:610.9,y:269},0).wait(1).to({x:610.3,y:271.5},0).wait(1).to({x:609.7,y:274},0).wait(1).to({x:609.1,y:276.5},0).wait(1).to({x:608.5,y:278.9},0).wait(1).to({x:607.9,y:281.4},0).wait(1).to({x:607.3,y:283.9},0).wait(1).to({x:606.7,y:286.4},0).wait(1).to({x:606.1,y:288.8},0).wait(1).to({x:605.5,y:291.3},0).wait(1).to({x:604.9,y:293.8},0).wait(1).to({x:604.3,y:296.3},0).wait(1).to({x:603.7,y:298.7},0).wait(1).to({x:603.1,y:301.2},0).wait(1).to({x:602.5,y:303.7},0).wait(1).to({x:601.9,y:306.2},0).wait(1).to({x:601.3,y:308.6},0).wait(1).to({x:600.7,y:311.1},0).wait(1).to({x:600.1,y:313.6},0).wait(1).to({x:599.5,y:316.1},0).wait(1).to({x:598.9,y:318.5},0).wait(1).to({x:598.3,y:321},0).wait(1).to({x:597.7,y:323.5},0).wait(1).to({x:597.1,y:326},0).wait(1).to({x:596.5,y:328.4},0).wait(1).to({x:595.9,y:330.9},0).wait(1).to({x:595.3,y:333.4},0).wait(1).to({x:594.7,y:335.9},0).wait(1).to({x:594.1,y:338.3},0).wait(1).to({x:593.5,y:340.8},0).wait(1).to({x:592.9,y:343.3},0).wait(1).to({x:592.3,y:345.7},0).wait(1).to({x:591.7,y:348.2},0).wait(1).to({x:591.1,y:350.7},0).wait(1));

	// Layer 5
	this.buy_web = new lib.buy_web();
	this.buy_web.setTransform(635.1,105.6,1,1,0,0,0,657.3,118.9);

	this.timeline.addTween(cjs.Tween.get(this.buy_web).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(617.8,76.7,1890.6,237.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;