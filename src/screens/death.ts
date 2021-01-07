export default (scale: number, ctx: CanvasRenderingContext2D, score: number) => {
    let yPos = 50;
    const fontSize = (base: number) => {
        const size = base * scale;
        // shove down yPos so that "next line" can render
        yPos += size;
        return size;
    }

    ctx.font = `${fontSize(1.3)}px Arial`;
    ctx.fillText("Game over", 10, yPos);

    ctx.font = `${fontSize(.9)}px Arial`;
    ctx.fillText(`Your final score is ${score}`, 17, yPos);

    ctx.font = `${fontSize(.7)}px Arial`;
    ctx.fillText("press Enter to play again", 10, yPos);
}