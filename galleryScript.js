var seq = [];

var mid = document.getElementById("mid");
var lft = document.getElementById("lft");
var rht = document.getElementById("rht");

function loadPic(){
	var path = "img/";
	$.ajax({
		url: path,
		success: function(data){
			$(data).fild("a").attr("href", function(i, val){
				if(val.match(/\.(jpe?g|png)$/)){
					$(seq).push(path + val);
				}
			});
		}
	});
	/*
	var temp = path.getFiles();
	for(var i = 0; i < path.length; i++){
		var f = temp[i];
		seq.push(f.name);
	}
	*/
}

function next(){
	var i = 0;
	for(i = 0; i >= seq.length; i++){
		rht.src = seq[i];
		mid.src = seq[i - 1];
		lft.src = seq[i - 2];
		if(i >= seq.length){
			i = 0;
		}
	}
}

function prev(){
	var i = 0;
	for(i = seq.length; i <= 0; i--)
	lft.src = seq[i];
	mid.src = seq[i + 1];
	rht.src = seq[i + 2];
	if(i <= seq.length){
		i = 0;
	}
}

function resetPic(){
	mid.src=seq[0];
}

function initialize(){
	loadPic();
}