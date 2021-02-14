class Form {
    constructor() {
      this.input=createInput("Enter your name here")
      this.button=createButton("Run")
      this.title=createElement("h3")
      this.greeting=createElement("h2")
     
  
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.greeting.hide();

    }
    
  
    display(){
      this.title.position(displayWidth/2-50,0)
      this.input.position(displayWidth/2-40,displayHeight/2-80)
      this.button.position(displayWidth/2+30,displayHeight/2)
      this.title.html("Game of Running")
      

      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();

       runner.name=this.input.value();
       this.greeting.html("Are you ready"+ "-"+ runner.name)
        this.greeting.position(displayWidth/2-70,displayHeight/4)

        
        
       runnerCount+=1;
      runner.index = runnerCount
       runner.update()
       runner.updateCount(runnerCount);
       
      });
      
  
    }
  }
  