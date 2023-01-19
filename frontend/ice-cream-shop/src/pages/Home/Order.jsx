import React from 'react';
import Options from './Options';

const Order = () => {
	return (
		<>
			<Options optionType='scoops' />
			<Options optionType='toppings' />
		</>
	);
};

export default Order;
