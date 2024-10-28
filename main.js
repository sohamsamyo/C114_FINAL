eye_x = 0;
eye_y = 0;
img_eye = "";

function preload() {
    img_eye = loadImage("https://i.postimg.cc/4dpyJgzh/c114-GLASSES.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);

}

function gotPoses(results) {
    if (results.length > 0);
    {
        console.log(results);
        eye_x = results[0].pose.leftEye.x;
        eye_y = results[0].pose.leftEye.y;
        console.log("Position of left eye x = " + results[0].pose.leftEye.x);
        console.log("Position of left eye y = " + results[0].pose.leftEye.y);

    }
}

function modelLoaded() {
    console.log("Your website is up and running...");
}

function draw() {
    image(video, 0, 0, 400, 300);

    fill("red");
    stroke("darkred");
    image(img_eye, eye_x - 95, eye_y - 40, 150, 100);
}

function Filter() {
    save("Filtered_imageC114project");
}