let cache = false;

export default (ctx: CanvasRenderingContext2D) => {
    if (cache) {
        console.log('restoring cache', cache)
        ctx.restore();
        return;
    }
    ctx.font = "30px sans-serif";
    ctx.strokeText("Snake", 10, 50, 50);
    ctx.font = "14px Arial";
    ctx.fillText("by avindra", 65, 50);
    ctx.font = "11px Arial";
    ctx.fillText("Use arrow keys to move.", 10, 99);
    ctx.font = "17px Arial";
    ctx.fillText("Press ENTER to start", 10, 124);
    if (!cache) {
        ctx.save();
        cache = true;
    }
}