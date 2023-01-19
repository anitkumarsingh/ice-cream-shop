import { render, screen } from '@testing-library/react';
import OrderSummary from '../OrderSummary';

describe('Testing Order form', () => {
	test('Testing order form component', () => {
		render(<OrderSummary />);
	});
});
