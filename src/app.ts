export default () => {
  const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");
  if (ctx?.canvas.height) ctx.canvas.height = 600;
  if (ctx?.canvas.width) ctx.canvas.width = 800;
  if (ctx?.globalAlpha) ctx.globalAlpha = 0.025
  if (ctx?.fillStyle) ctx.fillStyle = 'black'

  let loop = (timestamp: number) => {
    requestAnimationFrame(loop)
    if (ctx) {
      const w = ctx?.canvas.width;
      const h = ctx?.canvas.height;
      ctx?.save();
      ctx?.fillRect(0, 0, w, h);
      ctx.fillStyle = "white";
      ctx.globalAlpha = 1;
      const x = Math.floor(Math.random() * w);
      const y = Math.floor(Math.random() * h);
      const size = Math.floor(Math.random() * 5);
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.restore();
    }
  }

  requestAnimationFrame(loop)
};
