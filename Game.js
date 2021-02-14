class Game{
    constructor(){}
    
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
       
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
         if(gameState === 0){
            runner = new Runner();
             var runnerCountRef = await database.ref('runnerCount').once("value");
              if(runnerCountRef.exists()){
                 runnerCount = runnerCountRef.val();
                  runner.getCount();
                 } 
                 form = new Form()
                  form.display();
                 } 
                 
                }
  play(){
                 runner1=createSprite(100,200)
                 runner2=createSprite(300,200)
                 runner3=createSprite(500,200)
                 runner4=createSprite(700,200)
                 runners=[runner1,runner2,runner3,runner4]
  form.hide();
    Runner.getRunnerInfo();
     if(allRunners !== undefined){
      var index=0
      var x=0
      var y;
         for(var rns in allRunners){
            index=index+1
        x=x+200
        y=displayHeight-allRunners[rns].distance;
        runners[index-1].x=x
        runners[index-1].y=y
        if(index===runner.index){
          runners[index-1].shapeColor="red"
          camera.position.x=displayWidth/2
          camera.position.y=runners[index-1].y
        }
            /*if (rns === "runner" + runner.index)
             fill("red")
              else fill("black");
               display_position+=20;
                textSize(15);
                 text(allRunners[rns].name + ": " + allRunners[rns].distance,
                  120,display_position)*/
                  } 
                 } 
                 if(keyIsDown(UP_ARROW) && runner.index !== null){
                    runner.distance +=50
                     runner.update();
                    }
                    } 
                  }
                   
                   

