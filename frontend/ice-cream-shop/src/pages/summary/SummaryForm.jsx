import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SummaryForm = () => {
	const [disabled, setDisabled] = useState(true);

	const checkboxLabel = (
		<span>
			I agree to
			<span style={{ color: 'blue' }}> Terms and Conditions</span>
		</span>
	);
	return (
		<>
			<Form>
				<Form.Group controlId='terms-and-conditions'>
					<Form.Check
						type='checkbox'
						onChange={() => setDisabled(!disabled)}
						label={checkboxLabel}
					/>
				</Form.Group>
				<Button variant='primary' type='submit' disabled={disabled}>
					Confirm order
				</Button>
			</Form>
		</>
	);
};

export default SummaryForm;
