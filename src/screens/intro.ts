export default (ctx: CanvasRenderingContext2D) => {
    ctx.font = "30px Arial";
    ctx.fillText("Snake", 10, 50);
    ctx.font = "14px Arial";
    ctx.fillText("a game by avindra", 17, 73);
    ctx.font = "11px Arial";
    ctx.fillText("Use arrow keys to move. Press R to restart game.", 10, 99);
    ctx.font = "17px Arial";
    ctx.fillText("Press ENTER to start", 10, 124);
}