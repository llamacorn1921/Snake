define(["../src/reverb"],function(n){let e=n;const t=document.getElementById("munch");let i;function o(){e.extend(i)}return{init:function(){i=new AudioContext;console.log("Audio Script init loaded")},play:function(){t.pause();t.currentTime=.1;t.play()}}});