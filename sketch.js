const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: "A4",
  units: "cm",
  pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, 1, 0, Math.PI * 2, false);
    context.fillStyle = "red";
    context.fill();
    context.lineWidth = 0.005 * width;
    context.strokeStyle = "black";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
