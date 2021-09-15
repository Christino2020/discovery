function setup(){
    canvas = createCanvas(450, 450)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
song = "";

function play(){
   song.play()
   song.setVolume(1)
   song.rate(1)
   song.loop = "true";
}
function modelLoaded(){
    console.log('Posenet is ready')
}
leftWristX = 0 
rightWristX = 0
leftWristY = 0
rightWristY = 0

function preload(){
    song = loadSound("hp.mp3") 
     
}
function draw(){
    image(video, 0, 0, 450, 450)
}
function gotPoses(results){
    if (results.length > 0){
console.log(results)

rightWristX = results[0].pose.rightWrist.x
leftWristX = results[0].pose.leftWrist.x
rightWristY = results[0].pose.rightWrist.y
leftWristY = results[0].pose.leftWrist.y
console.log("leftWristY = "+ leftWristY+ "rightWristY = " + rightWristY + "rightWristX = " + rightWristX + "leftwristX = "+ leftWristX)

    }
}
