import {main} from './game';

const $ = a => document.getElementById(a);
const canvas = $('game') as HTMLCanvasElement;

const width = 20;
const height = 20;
const scale = window.innerHeight / height;

main(canvas, width, height, scale);
