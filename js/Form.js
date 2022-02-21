class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementsPosition(){
    this.input.position(200,120);
    this.playButton.position(width/2-100, height/2 - 80);
    this.titleImg.position(width/2-80, height/2 - 120);
    this.greeting.position(width/2-50, height/2 - 150);
  }

  setElementsStyle(){
     this.titleImg.class("gameTitle");
     this.input.class("customInput");
     this.playButton.class("customButton");
     this.greeting.class("greeting")
  }


  display(){
    this.setElementsPosition();
    this.setElementsStyle();
  }

  handleButtonPress(){
    this.playButton.mousePressed(()=>{



      
    });
  }

  
}
