var timer;
var elemID = "#disp";
var id=0;
/*
 * Waiting for the HTML page to load and being notified by jQuery.
 * Upon notification run the unnamed callback function.
 */
$().ready(function() {
    var top;
    var left;
    for(var i=0; i<10; i++) {
        left = Math.floor((Math.random() * 700) + 3);
        top = Math.floor((Math.random() * 600) + 3);
        $(elemID).append(   
         "<div id='" + i + "' class='tugce' style='top:"
         + top + "px; left:" + left + "px;'>" +
         i + "</div>");
    }
    timer = setInterval(function() {
        left = Math.floor((Math.random() * 700) + 3);
        top = Math.floor((Math.random() * 600) + 3);        
        $("#5").css("left",left+"px");
        $("#5").css("top",top+"px");
        $("#5").html(id++);
    },1000);
});/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


