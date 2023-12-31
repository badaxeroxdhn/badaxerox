function randomRange(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomBoolean() {
  const rand_num = randomRange(0, 1);
  if (rand_num === 0) {
    return false;
  } else {
    return true;
  }
}

const app = new PIXI.Application(800, 600, { antialias: true });
document.body.appendChild(app.view);

let hasBg = false;
let bubleList = [];
const renderBuble = (newWidth, newHeight) => {
  if (buble) {
    buble.clear();
  }
  bubleList = [];
  for (let i = 0; i < 40; i++) {
    const start_x_pct = randomRange(2, 98);
    const start_y_pct = randomRange(2, 98);
    const size = randomRange(20, 40);
    const start_x = start_x_pct * newWidth / 100;
    const start_y = start_y_pct * newHeight / 100;
    bubleList = [...bubleList, buble.render(start_x, start_y, size)];
  }
};
let canvasGradient;
let gradient_ctx;
let bg_gradient;
const renderGradient = (newWidth, newHeight) => {
  if (!canvasGradient) {
    canvasGradient = document.createElement('canvas');
    gradient_ctx = canvasGradient.getContext('2d');
  }

  canvasGradient.width = newWidth;
  canvasGradient.height = newHeight;

  const gradient = gradient_ctx.createLinearGradient(newWidth / 2, 0, newWidth / 2, newHeight);
  gradient.addColorStop(0, '#46E5FB');
  gradient.addColorStop(1, '#2CC7DB');
  gradient_ctx.fillStyle = gradient;
  gradient_ctx.fillRect(0, 0, newWidth, newHeight);


  if (hasBg) {
    bg_gradient.texture.update();

  } else {
    const gradientTexture = PIXI.Texture.fromCanvas(canvasGradient);
    bg_gradient = new PIXI.Sprite(gradientTexture);
    bg_gradient.x = 0;
    bg_gradient.y = 0;
    app.stage.addChildAt(bg_gradient, 0);
    hasBg = true;
  }

};
const renderCanvas = (newWidth, newHeight) => {

  app.renderer.resize(newWidth, newHeight);
};

const renderAll = () => {
  const newWidth = document.body.clientWidth;
  const newHeight = document.body.clientHeight;
  renderCanvas(newWidth, newHeight);
  renderGradient(newWidth, newHeight);
  renderBuble(newWidth, newHeight);
};


const bubleCreate = buble => {
  app.stage.addChild(buble);
  const render = (start_x, start_y, size = 32) => {
    let dest_x = 0,dest_y = 0,isUp,isRight,acc_x = 0,acc_y = 0;
    const resetUp = () => {
      dest_x = Math.random() * 50;
      isUp = randomBoolean();
      acc_y = 0;
    };
    const resetRight = () => {
      dest_y = Math.random() * 50;
      isRight = randomBoolean();
      acc_x = 0;
    };
    resetUp();
    resetRight();
    return () => {
      let next_x_pos, next_y_pos;
      let next_x = Math.random() * .5;
      let next_y = Math.random() * .5;
      acc_x = acc_x + next_x;
      acc_y = acc_y + next_y;
      next_x_pos = next_x;
      next_y_pos = next_y;
      if (!isUp) {
        next_x_pos = next_x * -1;
      }
      if (!isRight) {
        next_y_pos = next_y * -1;
      }
      start_x = start_x + next_x_pos;
      start_y = start_y + next_y_pos;
      buble.beginFill(0x42E0F6, .8);
      buble.drawCircle(start_x, start_y, size);
      buble.endFill();
      if (acc_y >= dest_y) {
        resetUp();
      }
      if (acc_x >= dest_x) {
        resetRight();
      }
    };
  };
  return {
    render,
    clear: buble.clear.bind(buble) };


};
const buble = bubleCreate(new PIXI.Graphics());

app.ticker.add(function () {
  buble.clear();
  bubleList.map(bubleCreate => {bubleCreate();});
});

renderAll();
window.onresize = function () {
  renderAll();
};