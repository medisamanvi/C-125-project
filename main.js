var leftwristX =0;
var rightwristX =0;
var difference =0;

function setup(){
    canvas=createCanvas(550,550)
    canvas.position(590,100)
    video=createCapture(VIDEO);
    video.size(550,550)

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function draw(){
    background("#969A97");
    textSize(difference);
    fill("black");
    text('M.Samanvi',24,100)
}

function modelLoaded(){
    console.log("poseNet is intialised")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);
    }
}