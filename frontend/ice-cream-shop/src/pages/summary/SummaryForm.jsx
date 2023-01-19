import React, { useState } from 'react';

const SummaryForm = () => {
	const [disabled, setDisabled] = useState(true);

	return (
		<div className='text-center mt-5'>
			<button disabled={disabled}>Submit Order</button>
			<br />
			<input
				type='checkbox'
				id='terms and conditions'
				onChange={() => setDisabled(!disabled)}
			/>
			<label htmlFor='terms and conditions'>Terms and Conditions</label>
		</div>
	);
};

export default SummaryForm;
