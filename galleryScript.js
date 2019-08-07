var seq = [];

var mid = document.getElementById("mid");
var lft = document.getElementById("lft");
var rht = document.getElementById("rht");

function pushFile(evt){
	var files = evt.target.files;
	for (var i = 0, f; f = files[i]; i++){
		seq.push()
	}
	
}



function next(){
	var i = 0;
	rht.src = seq[i];
	mid.src = seq[i - 1];
	lft.src = seq[i - 2];
	i++;
	if(i>=seq.length){
		i = 0;
	}
}

function prev(){
	var i = 0;
	lft.src = seq[i];
	mid.src = seq[i + 1];
	rht.src = seq[i + 2];
	i--;
	if(i <= seq.length){
		i = 0;
	}
}