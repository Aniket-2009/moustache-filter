noseX = 0;
noseY = 0;
function preload() {
    moustache_image = loadImage(
      "https://i.postimg.cc/wMg3CmWN/istockphoto-162244806-612x612-removebg-preview.png"
    );
}



function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is intialised');
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y ;
         console.log("noseX = " + results[0].pose.nose.x );
        console.log("noseY = " + results[0].pose.nose.y );
        }
}


function draw() {
  image(video, 0, 0, 300, 300);
  image(moustache_image, noseX, noseY, 40, 40);
}

function take_snapshot() {
    save('snoutchat.png');
}
