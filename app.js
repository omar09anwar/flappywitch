var myGamePiece
var myObstacles = []
var myScore
var flappy = "witch.png"

function startGame(){
myGameArea.start()
}

var myGameArea = {
canvas: document.createElement("canvas"),
start: function(){
this.canvas.width = 600
this.canvas.height = 300
this.context = this.canvas.getContext("2d")
document.body.insertBefore(this.canvas,document.body.childNodes[3])
this.frameNo = 0
this.interval = setInterval(updateGameArea , 20)
},
clear : function(){
this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
},
stop : function (){
clearInterval(this.interval)
}
}