let cache = false;

export default (scale, ctx: CanvasRenderingContext2D) => {
    if (cache) {
        console.log('restoring cache', cache)
        ctx.restore();
        return;
    }
    let yPos = 50;
    const fontSize = (base: number) => {
        const size = base * scale;
        // shove down yPos so that "next line" can render
        yPos += size;
        return size;
    }

    ctx.font = `${fontSize(1.5)}px sans-serif`;
    ctx.strokeText("Snake", 10, yPos, 2.5 * scale);

    ctx.font = `${fontSize(.7)}px Arial`;
    ctx.fillText("by avindra", 65, yPos);

    ctx.font = `${fontSize(.55)}px Arial`;
    ctx.fillText("Use arrow keys to move.", 10, yPos);

    ctx.font = `${fontSize(.85)}px Arial`;
    ctx.fillText("Press ENTER to start", 10, yPos);
    if (!cache) {
        ctx.save();
        cache = true;
    }
}