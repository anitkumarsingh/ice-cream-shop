import { render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('Testing Summary form', () => {
	test('Testing summary form component', () => {
		render(<SummaryForm />);
	});
});
