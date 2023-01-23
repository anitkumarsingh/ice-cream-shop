import { screen, render, waitFor } from '../../../utils/testing-utils';
import errorHandler from '../../../mocks/errorHandler';
import Order from '../Order';
import OrderConfirmation from '../../Order/OrderConfirmation';

describe('Order testing when network error', () => {
	test('Error response for scoop and topping end-point', async () => {
		errorHandler();
		render(<Order />);

		await waitFor(async () => {
			const alerts = await screen.findAllByRole('alert');
			expect(alerts).toHaveLength(2);
		});
	});
	test('Erro response from server when unable for place order on confirmation page', async () => {
		errorHandler();
		render(<OrderConfirmation />);
		await waitFor(async () => {
			const alert = await screen.findByRole('alert');
			expect(alert).toBeInTheDocument();
		});
	});
});
