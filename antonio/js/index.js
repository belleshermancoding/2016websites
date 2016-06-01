var canvas= document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
ctx.fillStyle="red"
ctx.fillRect(0,0,200,200)                     


canvas.addEventListener("mousedown", function(e) {
  var right = e.clientX - canvas.offsetLeft
  var down = e.clientY - canvas.offsetTop
  ctx.fillStyle = "black"
  ctx.fillRect (right, down, 80, 80) 
})