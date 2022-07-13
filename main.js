function preload()
{

}

function setup()
{
canvas = createCanvas(200,200);
canvas.position(300,250);
video = createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video,0,0,200,200);
rect(30, 20, 55, 55);
}

function take_snapshot()
{
save('makayla.png');
}
