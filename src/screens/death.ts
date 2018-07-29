export default (ctx: CanvasRenderingContext2D, score) => {
    ctx.font = "30px Arial";
    ctx.fillText("You died :/", 10, 50);
    ctx.font = "14px Arial";
    ctx.fillText(`Your final score is ${score}`, 17, 73);
    ctx.font = "28px Arial";
    ctx.fillText("Press R to respawn", 10, 99);
}