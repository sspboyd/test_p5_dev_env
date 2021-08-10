import P5 from "p5";
const script = (p55) => {
  p55.setup = () => {
    p55.createCanvas(window.innerWidth, window.innerHeight);
  };
  p55.draw = () => {
    p55.clear();
    p55.ellipse(p55.mouseX, p55.mouseY, 420, 220);
  };
};

const myp5 = new P5(script, "p55_div");
