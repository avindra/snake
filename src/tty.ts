
//import { goHome } from "https://denopkg.com/iamnathanj/cursor@v2.0.0/mod.ts";
import Canvas from "https://deno.land/x/drawille@0.1.1/canvas.ts";
import {main} from './game.ts';


const canvas = new Canvas();
const ctx = canvas.getContext('2d');

const render = () => {
	console.log(ctx.toString());
}

main(canvas as any, 20, 20, 3, render);