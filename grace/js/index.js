var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")
canvas.addEventListener("mousedown", function(e) {
  var right = e.clientX - canvas.offsetLeft
  var down = e.clientY - canvas.offsetTop
  ctx.fillStyle = "green"
  ctx.fillRect(right,down,20,20)
})

ctx.fillStyle="purple"
ctx.fillRect(0,100,80,100)