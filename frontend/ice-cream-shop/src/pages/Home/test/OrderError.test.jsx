import { screen, render } from '@testing-library/react';
import errorHandler from '../../../mocks/errorHandler';
import Order from '../Order';

describe('Order testing when network error', () => {
	test('Error response for scoop and topping end-point', async () => {
		errorHandler();
		render(<Order />);
		const alerts = await screen.findAllByRole('alert', {
			name: /An unexpected error occurred. Please try again later./i
		});
		expect(alerts).toHaveLength(2);
	});
});
