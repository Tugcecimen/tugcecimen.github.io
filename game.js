var submit = function(){
    var fname = $('#fname').val();
    var lname = $('#lname').val();
    Cookies.set('fname', fname, {expires: 7});
    Cookies.set('lname', lname, {expires: 7});
    window.location.href = 'gamepage.html';
}
function _correct(){
	document.getElementById("correct").style.display = "block";
	setTimeout(function(){
		document.getElementById("correct").style.display = "none";
	},1000);
	clr(1);
}
function _wrong(){
	document.getElementById("wrong").style.display = "block";
	setTimeout(function(){
		document.getElementById("wrong").style.display = "none";
	},1000);
	clr(0);
}
function win(){
	document.getElementById("win").style.display = "block";
}
function clr(x){
	if(x){
		$("#"+temp).hide();
		$("#"+temp2).hide();
		score += 10;
		refresh_score();
	}
	temp = "";
	temp2 = "";
}
function refresh_score(){
    document.getElementById("score").innerHTML = "Score: " + score;
	if(score == 50){
		win();
                $(timer_stop);
	
};
}
function timer_start(){
	timer1 = setInterval(function(){
		cntr += 1;
		document.getElementById("time").innerHTML = "Time: " + cntr;
	},1000);
}
function timer_stop(){
	clearInterval(timer1);
}
var timer1;
var cntr = 0;
var left = new Array("x1","x2","x3","x4","x5");
var right = new Array("y4","y5","y2","y1","y3");
var temp = "", temp2 = "";
var score = 0;
function init(){
	timer_start();
	document.getElementById("wel").innerHTML = "Welcome, " + Cookies.get("fname") + " " + Cookies.get("lname") + "!";
	refresh_score();
	
	$("#x1").draggable();
	$("#x2").draggable();
	$("#x3").draggable();
	$("#x4").draggable();
	$("#x5").draggable();
	$("#y1").draggable();
	$("#y2").draggable();
	$("#y3").draggable();
	$("#y4").draggable();
	$("#y5").draggable();
	
	$("#center1").droppable({
	      drop: function( event, ui ) {
			  temp2 = ui.draggable.attr("id");
			  if(temp == ""){
				  temp = temp2;
			  }else{
				  if(left.indexOf(temp) == right.indexOf(temp2)){
					  _correct();
				  }else{
					  _wrong();
				  }
			  }
	      }
	    });
}