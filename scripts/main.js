requirejs.config({baseUrl:"scripts",paths:{jquery:"//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min",game:"./lib/game"},waitSeconds:5});require(["jquery","game"],function(e,t){const n=document.getElementById("scene");const i=document.getElementById("num");let o={canvas:n,width:n.offsetWidth,height:n.offsetHeight,ctx:n.getContext("2d")};e(document).ready(()=>{i.innerHTML="3";t.init(o);e(document).keydown(e=>{t.input(e.key)})})});