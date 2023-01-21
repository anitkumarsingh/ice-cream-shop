import { screen, render, waitFor } from '../../../utils/testing-utils';
import errorHandler from '../../../mocks/errorHandler';
import Order from '../Order';

describe('Order testing when network error', () => {
	test('Error response for scoop and topping end-point', async () => {
		errorHandler();
		render(<Order />);

		await waitFor(async () => {
			const alerts = await screen.findAllByRole('alert');
			expect(alerts).toHaveLength(2);
		});
	});
});
