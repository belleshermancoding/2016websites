var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
ctx.fillStyle = "Red"
ctx.fillRect(0,0,3,70)
ctx.fillStyle="blue"
ctx.fillRect(0,0,50,30)
canvas.addEventListener("mousedown",function(e) {var right = e.clientX-canvas.offsetLeft
var down = e.clientY- canvas.offsetTop
ctx.fillStyle ="purple"
ctx.fillRect(right,down,30,10)
ctx.fillStyle="orange"
ctx.fillRect(right,down,30,10)


  
})