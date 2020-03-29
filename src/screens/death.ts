export default (scale: number, ctx: CanvasRenderingContext2D, score) => {
    let yPos = 50;
    const fontSize = (base: number) => {
        const size = base * scale;
        // shove down yPos so that "next line" can render
        yPos += size;
        return size;
    }

    ctx.font = `${fontSize(1.5)}px Arial`;
    ctx.fillText("You died :/", 10, yPos);

    ctx.font = `${fontSize(.7)}px Arial`;
    ctx.fillText(`Your final score is ${score}`, 17, yPos);

    ctx.font = `${fontSize(1.4)}px Arial`;
    ctx.fillText("Press Enter to respawn", 10, yPos);
}