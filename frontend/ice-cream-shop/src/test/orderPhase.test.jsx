import { screen, render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from '../App';

describe('Order phase or happy path', () => {
	test('Order flow for customer', async () => {
		const user = UserEvent.setup();
		// render app
		const { unmount } = render(<App />);

		// add scoops and topping
		const mintInput = await screen.findByRole('spinbutton', { name: 'Mint chip' });
		const hotFudgeChkBox = await screen.findByRole('checkbox', { name: /Hot fudge/i });
		await user.clear(mintInput);
		await user.type(mintInput, '2');
		await user.click(hotFudgeChkBox);

		// find and click order button
		const orderBtn = screen.getByRole('button', { name: 'Confirm order' });
		await user.click(orderBtn);
		// accept terms and conditions and click button to confirm order
		const termsAndConditionCheckbox = screen.getByRole('checkbox', {
			name: 'I agree to Terms and Conditions'
		});
		expect(orderBtn).toBeDisabled();
		await user.click(termsAndConditionCheckbox);
		expect(orderBtn).toBeEnabled();
		await user.click(orderBtn);

		// check summary information based on order
		const orderSummaryTitle = await screen.findByRole('heading', {
			name: 'Order Summary'
		});
		const scoopsTotal = screen.getByText('Scoops :$', { exact: false });
		const toppingTotal = screen.getByText('Toppings :$', { exact: false });
		const grandTotal = screen.getByText('Grand Total : $', { exact: false });
		expect(orderSummaryTitle).toBeInTheDocument();
		expect(scoopsTotal).toHaveTextContent('4.00');
		expect(toppingTotal).toHaveTextContent('1.50');
		expect(grandTotal).toHaveTextContent('5.50');
		const confirmOrderBtn = screen.getByRole('button', { name: /Complete Order/i });
		await user.click(confirmOrderBtn);

		// confirm order number on confirmation page
		const orderNumber = await screen.findByText('Your order number is', { exact: false });
		expect(orderNumber).toBeInTheDocument();

		// click "New Order" on confirmation page
		const newOrderBtn = await screen.findByRole('button', { name: 'Create new order' });
		expect(newOrderBtn).toBeInTheDocument();
		unmount();
	});
});
