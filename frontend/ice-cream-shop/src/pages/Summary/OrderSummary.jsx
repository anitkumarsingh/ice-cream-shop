import React from 'react';
import { useOrderDetails } from '../../context/OrderDetails';
import { formatCurrency } from '../../utils/formatCurrency';

const OrderSummary = ({ setOrderPhase }) => {
	const { total, optionsCount } = useOrderDetails();
	const scoopArray = Object.entries(optionsCount.scoops);
	const scoopsList = scoopArray.map(([key, value]) => (
		<li key={key}>
			{value} {key}
		</li>
	));

	const toppingsArray = Object.entries(optionsCount.toppings);
	const toppingsList = toppingsArray.map(([key, value]) => (
		<li key={key}>
			{value} {key}
		</li>
	));

	return (
		<>
			<h1>Order Summary</h1>
			<h2>Scoops :{formatCurrency(total.scoops)}</h2>
			<ul>{scoopsList}</ul>
			<h2>Toppings :{formatCurrency(total.toppings)}</h2>
			<ul>{toppingsList}</ul>
			<div className='mt-5 mb-5'>
				<h2>Grand Total : {formatCurrency(total.scoops + total.toppings)}</h2>
				<br />
				<br />
				<button onClick={() => setOrderPhase('complete')}>Complete Order</button>
			</div>
		</>
	);
};

export default OrderSummary;
