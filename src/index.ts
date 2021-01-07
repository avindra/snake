import {main} from './game.ts';

const $ = (a: string) => document.getElementById(a);
const canvas = $('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const width = 20;
const height = 20;
const scale = window.innerHeight / height;

canvas.width = width * scale;
canvas.height = height * scale;

const game = main(canvas, width, height, scale);
game();
