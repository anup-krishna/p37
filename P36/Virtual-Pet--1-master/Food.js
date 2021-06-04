class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.button1;
        this.button2;
        foodStock = database.ref('food');
        
        this.currenttime = d.getHours();
        this.date;
/*        this.input = createInput("Name of the dog");
        this.button = createButton('Set Name');
        this.greeting = createElement('h3');*/

/*        this.name = "Dog";
        this.nam;
        this.nam = database.ref("name");
        this.nam.on("value", this.readName);
        */
        }

    getFoodStock(y){
        y=y+1;
        database.ref('/').update({food:y});
    }

    deductFood(x){
        if(x<=0){
            x=0;
          }else{
            x=x-1;
            Happy=true;
            hours= d.getSeconds();
            h = hours;
            //ampm();
            setHours(hours);
            s = -1;
          }
          database.ref('/').update({food:x});
            }
      
    readName(data){
        this.name = data.val();
    }

    setName(n){
        database.ref('/').update({name:n})
    }

        display(){
            this.button2 = createButton("Add Food");
            this.button1 = createButton("Feed the Dog");
/*        this.input.position(520,270);
        this.button.position(610,295);
        this.button.mousePressed(()=>
        {this.name = this.input.value();
         this.setName(this.name);
         this.button1 = createButton("Feed "+this.name);
         this.button2 = createButton("Add Food");
         this.button.hide();
         this.input.hide();
         this.greeting.html(this.name);
         this.greeting.position(575, 235);
        })*/

//        if(this.button1){
        this.button1.position(450,75);
        this.button1.mousePressed(()=>
        {this.deductFood(foodS);
        })
        //}
//        if(this.button1){
        this.button2.position(650,75);
        this.button2.mousePressed(()=>
        {this.getFoodStock(foodS);
        })
    //}

        this.date = new Date();
        this.currenttime = this.date.getSeconds();

        imageMode(CENTER);
        if(this.button1){
        image(this.image,235,245,50,50);
        console.log(this.currenttime);
    }}

    Bedroom(){
        background(bedroom);
        gameState = "Bedroom";
        gs = gameState;
        console.log(gs);
    }
    Garden(){
        image(garden,250,400);
        gameState = "Garden";
        gs = gameState;
        console.log(gs);
    }
    Washroom(){
        background(washroom);
        gameState = "Washroom";
        gs = gameState;
        console.log(gs);
    }
    getGs(data){
        gs = data.val()
        }
        
    update(x){
    database.ref('/').update({gamestate:x})
    }
    }