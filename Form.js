class Form {

  constructor() {
    this.Breakfast = createInput("Breakfast");
    this.Lunch = createInput("Lunch");
    this.Snacks = createInput("Snacks");
    this.Dinner = createInput("Dinner");
    this.Calories2 = createInput("Total Calories");
    this.Exersise = createInput("Total Exersise");
    this.Calories1 = createInput("Calories Goal");
    this.button = createButton('Play Basketball!');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.Breakfast.hide();
    this.Lunch.hide();
    this.Snacks.hide();
    this.Dinner.hide();
    this.Calories2.hide();
    this.Exersise.hide();
    this.Calories1.hide();
    this.button .hide();
    this.greeting.hide();
    this.title.hide();
    this.reset.hide();
  }

  display(){
    this.title.html("Kids fitness Pal");
    this.title.position(displayWidth/2 - 50, 0);

    this.Calories2.position(displayWidth/2 - 200 , displayHeight/2 - 100);
    this.Exersise.position(displayWidth/2 - 10 , displayHeight/2 - 100);
    this.Calories1.position(displayWidth/2 - 40 , displayHeight/2 - 100);
    this.Breakfast.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.Lunch.position(displayWidth/2 - 40 , displayHeight/2 - 60);
    this.Snacks.position(displayWidth/2 - 40 , displayHeight/2 - 40);
    this.Dinner.position(displayWidth/2 - 40 , displayHeight/2 - 20);
    this.button.position(displayWidth-150,60);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.Breakfast.hide();
      this.Lunch.hide();
      this.Snacks.hide();
      this.Dinner.hide();
      this.Calories2.hide();
      this.Exersise.hide();
      this.Calories1.hide();
      this.button .hide();
      this.greeting.hide();
      this.title.hide();
      this.reset.hide();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
