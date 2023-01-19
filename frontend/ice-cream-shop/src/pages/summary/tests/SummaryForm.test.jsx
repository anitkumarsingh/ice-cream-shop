import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('Testing Summary form', () => {
	test('Enabling and Disabling button on checking and unchecking checkbox', () => {
		render(<SummaryForm />);
		const orderSubmitBtn = screen.getByRole('button', { name: 'Confirm order' });
		const termsAndConditionCheckbox = screen.getByRole('checkbox', {
			name: 'I agree to Terms and Conditions'
		});
		expect(orderSubmitBtn).toBeDisabled();
		fireEvent.click(termsAndConditionCheckbox);
		expect(orderSubmitBtn).toBeEnabled();
	});
});
