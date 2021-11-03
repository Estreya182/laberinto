var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(10, 10, 18, 18);
Sofia.shapeColor = "yellow";
var cup = createSprite(395, 210, 10, 80);
cup.shapeColor = "orange";
var fakeCup = createSprite(395, 400, 10, 140);
fakeCup.shapeColor = "yellow";
var fakeCup2 = createSprite(0, 400, 20, 140);
fakeCup2.shapeColor = "blue";
var Wall1 = createSprite(70, 60, 20, 80);
Wall1.shapeColor = "white";
var Wall2 = createSprite(130, 90, 100, 20);
Wall2.shapeColor = "white";
var Wall3 = createSprite(140, 130, 20, 100);
Wall3.shapeColor = "white";
var Wall4 = createSprite(60, 200, 70, 20);
Wall4.shapeColor = "white";
var Wall5 = createSprite(190, 130, 20, 100);
Wall5.shapeColor = "white";
var Wall6 = createSprite(250, 170, 100, 20);
Wall6.shapeColor = "white";
var Wall7 = createSprite(85, 260, 20, 100);
Wall7.shapeColor = "white";
var Wall8 = createSprite(80, 300, 100, 20);
Wall8.shapeColor = "white";
var Wall9 = createSprite(120, 385, 20, 100);
Wall9.shapeColor = "white";
var Wall10 = createSprite(160, 30, 100, 20);
Wall10.shapeColor = "white";
var Wall11 = createSprite(190, 230, 20, 100);
Wall11.shapeColor = "white";
var Wall12 = createSprite(290, 30, 100, 20);
Wall12.shapeColor = "white";
var Wall13 = createSprite(250, 85, 20, 100);
Wall13.shapeColor = "white";
var Wall14 = createSprite(390, 80, 100, 20);
Wall14.shapeColor = "white";
var Wall15 = createSprite(375, 170, 100, 20);
Wall15.shapeColor = "white";
var Wall16 = createSprite(290, 220, 20, 100);
Wall16.shapeColor = "white";
var Wall17 = createSprite(350, 260, 100, 20);
Wall17.shapeColor = "white";
var Wall18 = createSprite(350, 320, 100, 20);
Wall18.shapeColor = "white";
var Wall19 = createSprite(310, 400, 20, 80);
Wall19.shapeColor = "white";
var Wall20 = createSprite(200, 350, 100, 20);
Wall20.shapeColor = "white";
var Wall21 = createSprite(40, 300, 100, 20);
Wall21.shapeColor = "white";
var Wall22 = createSprite(240, 220, 20, 100);
Wall22.shapeColor = "white";

createEdgeSprites();

function draw() {
  background("cyan");
  checkwin();
drawSprites();
  Sofia.bounceOff(edges);
  if (keyDown("UP_ARROW")) {
    Sofia.velocityY = -2;
     }
  if (keyDown(DOWN_ARROW)) {
    Sofia.velocityY = 2;
  }
  if (keyDown (RIGHT_ARROW)) {
    Sofia.velocityX = 2;
  }
  if (keyDown (LEFT_ARROW)) {
    Sofia.velocityX = -2; 
  }
  
  
  Sofia.bounceOff(cup);
  Sofia.bounceOff(fakeCup);
  Sofia.bounceOff(fakeCup2);
  Sofia.bounceOff(Wall1);
  Sofia.bounceOff(Wall2);
  Sofia.bounceOff(Wall3);
  Sofia.bounceOff(Wall4);
  Sofia.bounceOff(Wall5);
  Sofia.bounceOff(Wall6);
  Sofia.bounceOff(Wall7);
  Sofia.bounceOff(Wall8);
  Sofia.bounceOff(Wall9);
  Sofia.bounceOff(Wall10);
  Sofia.bounceOff(Wall11);
  Sofia.bounceOff(Wall12);
  Sofia.bounceOff(Wall13);
  Sofia.bounceOff(Wall14);
  Sofia.bounceOff(Wall15);
  Sofia.bounceOff(Wall16);
  Sofia.bounceOff(Wall17);
  Sofia.bounceOff(Wall18);
  Sofia.bounceOff(Wall19);
  Sofia.bounceOff(Wall20);
  Sofia.bounceOff(Wall21);
  Sofia.bounceOff(Wall22);

}



























function checkwin()
{
  if ( Sofia.isTouching(cup))  
  {
  textSize(30);
  stroke("red");
  text("You Win", 1,150);
   }
  if (Sofia.isTouching(fakeCup)) {
    textSize(15);
    stroke("red");
    text("This cup is fake too", 1, 150);
  }
  if (Sofia.isTouching(fakeCup2)) {
    textSize(15);
    stroke("red");
    text("This cup is fake ", 1, 150);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
