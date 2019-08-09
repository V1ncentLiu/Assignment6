var seq = [];
var mid = document.getElementById("mid");
var lft = document.getElementById("lft");
var rht = document.getElementById("rht");
var fileName = document.getElementsByTagName("input");

var rightPic = document.createElement("img");
document.getElementById('lft').appendChild(rightPic);

var midPic = document.createElement("img");
document.getElementById('mid').appendChild(midPic);

var leftPic = document.createElement("img");
document.getElementById('rht').appendChild(leftPic);

function loadPic(){	
	$(function(){
		document.getElementById('file').onchange = function(){
			var file = this.files[0];
			var read = new FileReader();
			read.onload = function(evt){
				var lines = this.result.split('+');
				for (var i = 0; i < lines.length; i++){
					lines[i] = "img/" + lines[i];
					seq.push(lines[i]);
				}
			};
			read.readAsText(file);
		};
	});
	
	/*
	for (var i = 0; i < fileName.length; i++){
		var fileUp = fileName[i];
		if (fileUp.files.length){
			seq.push(fileUp.files[0]);
		}
	}
	*/
}
var i = 0;
function next(){
	rightPic.src = seq[i];
	rightPic.height = "150px";
	midPic.src = seq[i + 1];
	midPic.height = "180px";
	leftPic.src = seq[i + 2];
	leftPic.height = "150px";
	i++;
}

function prev(){	
	leftPic.src = seq[i];
	leftPic.height = "150px";
	midPic.src = seq[i - 1];
	midPic.height = "180px";
	rightPic.src = seq[i - 2];
	rightPic.height = "150px";
	i--;
}

function check(){
	if(i > seq.length){
		i = 0;
	}
	if (i < 0){
		i = seq.length;
	}
}

function resetPic(){
	midPic.src=seq[0];
}

function initialize(){
	loadPic();
}
