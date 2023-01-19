import { rest } from 'msw';
import { BASE_URL } from '../constants/api';
import { server } from './server';

const errorHandler = () => {
	server.resetHandlers(
		rest.get(`${BASE_URL}/scoops`, (req, res, ctx) => {
			return res(ctx.status(500));
		}),
		rest.get(`${BASE_URL}/toppings`, (req, res, ctx) => {
			return res(ctx.status(500));
		})
	);
};

export default errorHandler;
