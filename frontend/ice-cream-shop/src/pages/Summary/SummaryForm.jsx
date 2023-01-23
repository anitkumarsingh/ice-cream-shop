import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Popover } from 'react-bootstrap';

const SummaryForm = ({ setOrderPhase }) => {
	const [disabled, setDisabled] = useState(true);

	const popover = (
		<Popover id='popover-basic'>
			<Popover.Body>No ice cream will actually be delivered</Popover.Body>
		</Popover>
	);
	const checkboxLabel = (
		<span>
			I agree to
			<OverlayTrigger placement='right' overlay={popover}>
				<span style={{ color: 'blue' }}> Terms and Conditions</span>
			</OverlayTrigger>
		</span>
	);

	const submitHandler = (e) => {
		e.preventDefault();
		setOrderPhase('review');
	};
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
				<br />
				<Button
					variant='primary'
					type='submit'
					disabled={disabled}
					onClick={submitHandler}>
					Confirm order
				</Button>
			</Form>
		</>
	);
};

export default SummaryForm;
