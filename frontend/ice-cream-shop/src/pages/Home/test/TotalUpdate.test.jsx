import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

describe('Scoops subtotal and topping subtotal updates', () => {
	test('Updates scoops total and topping total when options changes', async () => {
		const user = userEvent.setup();
		render(<Options optionType='scoops' />);
		// start with zero dollar
		const scoopSubTotal = screen.getByText('Scoops total :$', { exact: false });
		expect(scoopSubTotal).toHaveTextContext('0.00');

		// start with 1 vanilla scoops and check for total
		const vanillaInput = await screen.findByRole('spinbutton', {
			name: 'Vanilla'
		});
		await user.clear(vanillaInput);
		await user.type(vanillaInput, '1');
		expect(scoopSubTotal).toHaveTextContext('2.00');

		// start with 2 chocolate scoops and check for total
		const chocolateInput = await screen.findByRole('spinbutton', {
			name: 'Chocolate'
		});
		await user.clear(chocolateInput);
		await user.type(chocolateInput, '2');
		expect(scoopSubTotal).toHaveTextContext('6.00');
	});
});
