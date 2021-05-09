//variable for gameState
let gameState;
//image loading variable for start wallpaper
let start;
//image loading variable for log in with guest
let guestbutton;
//image loading variable for log in with email
let emailbutton;
//variable for checking click
var counter;
//variable for checking release of mouse button;
var release;
//button for sign in with guest;
var guest;
//button for sign with email
var email;
class Button{
  constructor(img,x,y,w,h){
    this.img=img;
    this.x=x;
    this.y=y;
    this.width=w;
    this.height=h;
    this.tint=255;
  }
  display(){
    push();
    imageMode(CENTER);
    tint(this.tint);
    image(this.img,this.x,this.y,this.width,this.height);
    pop();
     if(mouseIsPressed && buttonpress(this.x,this.y,this.width,this.height) ){
        this.tint=100;
      }else{
        this.tint=255;
      }
  }
  released(){
     if(release && buttonpress(this.x,this.y,this.width,this.height)){
       return true;
     }else{
       return false;
     }
  }
}
function preload() {
  start = loadImage("assets/start wallpaer.png");
  guestbutton = loadImage("assets/guestbutton.png");
  emailbutton = loadImage("assets/emailbutton.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  guest=new Button(guestbutton,width / 2.5, height / 4, width / 2.3, height / 4.7);
  email=new Button(emailbutton,width / 2.5, height / 1.4, width / 2.3, height / 4.7);
  gameState = "start";
  release = false;
}

function draw() {
  background(255);
  if (gameState === "start") {
    //indicating release{
    if (mouseIsPressed) {
      counter++;
    } else {
      release=false;
      if (counter > 0) {
        release = true;
      }
      counter = 0;
    }
    //}
    push();
    //start wallpaper
    imageMode(CENTER);
    image(start, width / 2, height / 2, width, height);
    pop();
    //display email button
    email.display();
    //display guest button
    guest.display();
    //what will happen if email button is relased
    if(email.released()){
      gameState="email";
    }
    //what will happen if guest button is relased
    if(guest.released()){
      gameState="guest";
    }
  }
}

function buttonpress(xp, yp, w, h) {
  if (mouseX - xp <= w / 2 &&
    xp - mouseX <= w / 2 &&
    yp - mouseY <= h / 2 &&
    mouseY - yp <= h / 2) {
    return true;
  } else {
    return false;
  }
}