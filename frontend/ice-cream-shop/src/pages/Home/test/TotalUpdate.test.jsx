import { screen, render } from '../../../utils/testing-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

describe('Scoops subtotal and topping subtotal updates', () => {
	test('Updates scoops  subTotal when options changes', async () => {
		const user = userEvent.setup();
		render(<Options optionType='scoops' />);
		// start with zero dollar
		const scoopSubTotal = screen.getByText('Scoops total :$', { exact: false });
		expect(scoopSubTotal).toHaveTextContent('0.00');

		// start with 1 vanilla scoops and check for total
		const vanillaInput = await screen.findByRole('spinbutton', {
			name: 'Vanilla'
		});
		await user.clear(vanillaInput);
		await user.type(vanillaInput, '1');
		expect(scoopSubTotal).toHaveTextContent('2.00');

		// start with 2 chocolate scoops and check for total
		const chocolateInput = await screen.findByRole('spinbutton', {
			name: 'Chocolate'
		});
		await user.clear(chocolateInput);
		await user.type(chocolateInput, '2');
		expect(scoopSubTotal).toHaveTextContent('6.00');
	});
	test('Update topping subTotal when checkbox checked', async () => {
		const user = userEvent.setup();
		render(<Options optionType='toppings' />);
		const toppingSubTotal = screen.getByText('Toppings total :$', { exact: false });
		expect(toppingSubTotal).toHaveTextContent('0.00');

		const toppingGummiCheckBox = await screen.findByRole('checkbox', {
			name: /Gummi bears/i
		});
		expect(toppingGummiCheckBox).not.toBeChecked();
		await user.click(toppingGummiCheckBox);
		expect(toppingGummiCheckBox).toBeChecked();
		expect(toppingSubTotal).toHaveTextContent('1.50');
		const toppingHotFudgeCheckBox = await screen.findByRole('checkbox', {
			name: /Hot Fudge/i
		});
		expect(toppingHotFudgeCheckBox).not.toBeChecked();
		await user.click(toppingHotFudgeCheckBox);
		expect(toppingHotFudgeCheckBox).toBeChecked();
		expect(toppingSubTotal).toHaveTextContent('3.00');

		// remove hot fudge
		await user.click(toppingHotFudgeCheckBox);
		expect(toppingSubTotal).toHaveTextContent('1.50');
	});
});
