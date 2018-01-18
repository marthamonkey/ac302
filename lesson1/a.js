alert("hi")

var c = document.getElementById("mycanvas")
var ctx = c.getContext("2d")

ctx.moveTo(0,0)
ctx.lineTo(100,200)
ctx.strokeStyle = "blue"
ctx.stroke()


ctx.fillStyle = "purple"
ctx.fillRect(100,100,200,100)