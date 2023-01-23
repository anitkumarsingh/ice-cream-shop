import React from 'react';
import { useOrderDetails } from '../../context/OrderDetails';
import { formatCurrency } from '../../utils/formatCurrency';
import SummaryForm from '../Summary/SummaryForm';
import Options from './Options';

const Order = ({ setOrderPhase }) => {
	const { total } = useOrderDetails();
	return (
		<>
			<h1 className='mb-5 mt-4'>Design your Ice-cream</h1>
			<Options optionType='scoops' />
			<Options optionType='toppings' />
			<br />
			<div className='mt-5 mb-5'>
				<hr />
				<h2>Grand Total : {formatCurrency(total.scoops + total.toppings)}</h2>
				<hr />
				<SummaryForm setOrderPhase={setOrderPhase} />
			</div>
		</>
	);
};

export default Order;
