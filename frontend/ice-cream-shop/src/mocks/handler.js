import { rest } from 'msw';
import { BASE_URL } from '../constants/api';

export const handler = [
	rest.get(`${BASE_URL}/scoops`, (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'Mint chip',
					imagePath: '/images/mint-chip.png'
				},
				{
					name: 'Vanilla',
					imagePath: '/images/vanilla.png'
				},
				{
					name: 'Chocolate',
					imagePath: '/images/chocolate.png'
				},
				{
					name: 'Salted caramel',
					imagePath: '/images/salted-caramel.png'
				}
			])
		);
	}),
	rest.get(`${BASE_URL}/toppings`, (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'M&Ms',
					imagePath: '/images/m-and-ms.png'
				},
				{
					name: 'Hot fudge',
					imagePath: '/images/hot-fudge.png'
				},
				{
					name: 'Peanut butter cups',
					imagePath: '/images/peanut-butter-cups.png'
				},
				{
					name: 'Gummi bears',
					imagePath: '/images/gummi-bears.png'
				},
				{
					name: 'Mochi',
					imagePath: '/images/mochi.png'
				},
				{
					name: 'Cherries',
					imagePath: '/images/cherries.png'
				}
			])
		);
	}),
	rest.post(`${BASE_URL}/order`, (req, res, ctx) => {
		return res(ctx.json({ orderNumber: '1' }));
	})
];
