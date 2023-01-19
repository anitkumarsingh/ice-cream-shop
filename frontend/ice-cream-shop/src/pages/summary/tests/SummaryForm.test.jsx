import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

describe('Testing Summary form', () => {
	test('Enabling and Disabling button on checking and unchecking checkbox', async () => {
		const user = userEvent.setup();
		render(<SummaryForm />);
		const orderSubmitBtn = screen.getByRole('button', { name: 'Confirm order' });
		const termsAndConditionCheckbox = screen.getByRole('checkbox', {
			name: 'I agree to Terms and Conditions'
		});
		expect(orderSubmitBtn).toBeDisabled();
		await user.click(termsAndConditionCheckbox);
		expect(orderSubmitBtn).toBeEnabled();
	});
});
