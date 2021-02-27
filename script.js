function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
  
function draw(){
    /*
    Image(video, 250, 200, 550, 500);
*/
}
function modelLoaded(){
console.log("Model has been loaded!")
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
}
}