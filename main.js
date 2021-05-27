song = "";
left_wrist_y = 0;
left_wrist_x = 0;
right_wrist_y = 0;
right_wrist_x = 0;
score_y = 0;
score_y_right = 0;
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotposes)
}
function modelLoaded(){
    console.log("posenetokkkkkkkkkkkb")
}
function draw(){
    image(video,0,0,600,500)
    fill("#00FF00")
    stroke("#00FF00")
if(score_y_right > 0.2){
        circle(right_wrist_x, right_wrist_y, 20 );
    if(right_wrist_y > 0 && right_wrist_y <= 100){
       document.getElementById("speed").innerHTML = "Speed = 0.5"
       song.rate(0.5); 
    }
    if(right_wrist_y > 101 && right_wrist_y <= 200){
        document.getElementById("speed").innerHTML = "Speed = 1"
        song.rate(1); 
     }
     if(right_wrist_y > 201 && right_wrist_y <= 300){
        document.getElementById("speed").innerHTML = "Speed = 1.5"
        song.rate(1.5); 
     }
     if(right_wrist_y > 301 && right_wrist_y <= 400){
        document.getElementById("speed").innerHTML = "Speed = 2"
        song.rate(2); 
     }
     if(right_wrist_y > 401 && right_wrist_y <= 500){
        document.getElementById("speed").innerHTML = "Speed = 2.5"
        song.rate(2.5); 
     }
}
    fill("#ff000")
    stroke("#ff000")
    if(score_y > 0.2){
    circle(left_wrist_x, left_wrist_y, 20)
    numberleft_wristY = Number(left_wrist_y);
    remove_decimal  = floor(numberleft_wristY);
    volume = remove_decimal/500;
    document.getElementById("volume").innerHTML = "Volume = "+ volume;
    song.setVolume(volume);
    }
}
function preload(){
    song  = loadSound("music.mp3")
}
function play(){
    song.play();
    song.setVolume(0.5); 
    song.rate(1);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results)
left_wrist_x = results[0].pose.leftWrist.x;
right_wrist_x = results[0].pose.rightWrist.x;
left_wrist_y = results[0].pose.leftWrist.y;
right_wrist_y = results[0].pose.rightWrist.y
console.log("right wrist y =  "  + right_wrist_y + " right wrist x =  "+ right_wrist_x + " leftwrist y  = "+ left_wrist_y + " left wrist x  = "+ left_wrist_x );
score_y =  results[0].pose.keypoints[9].score ;
score_y_right = results[0].pose.keypoints[10].score ;
    }
}
