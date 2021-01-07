import keys from './keys.ts';
import {rand} from './util.ts';
import Point from './point.ts';

type Coord = [number, number];
type SpawnCode = [Coord, number];
type SpawnConfig = [Point, number];
type Spawner = () => SpawnConfig;

type F = (w: number, h: number) => Spawner;

export const createSpawner: F = (width, height) =>  {
	const spawns: SpawnCode[] = [
		[[0, 0], keys.right],
		[[0, 0], keys.down],
		[[width - 1, 0], keys.left],
		[[width - 1, 0], keys.down],
		[[0, height - 1], keys.up],
		[[0, height - 1], keys.right],
		[[width - 1, height - 1], keys.up],
		[[width - 1, height - 1], keys.left],
	];
	return () => {
		const cfg = spawns[rand(0, spawns.length - 1)];
		const pt = new Point();
		pt.move(cfg[0][0], cfg[0][1]);
		return [pt, cfg[1]];
	};
}

