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
  describe('Popover appearing and disappearing on mouse in-out', () => {
		test('Popover response to hover', async () => {
      render(<SummaryForm />);
			const user = userEvent.setup();
			// popover starts out disappeared
			const hiddenPopover = screen.queryByText(
				/no ice cream will actually be delivered/i
			);
			await user.hover(hiddenPopover);
			expect(hiddenPopover).not.toBeInTheDocument();

			// popover apprear when mouse over
			const termsAndConditions = screen.getByText(/terms and conditions/i);
			await user.hover(termsAndConditions);
			const popover = screen.getByText(/no ice cream will actually be delivered/i);
			expect(popover).toBeInTheDocument();

			// popover disappeared when mouse out
			await user.unhover(termsAndConditions);
			expect(popover).not.toBeInTheDocument();
		});
	});
 
});
