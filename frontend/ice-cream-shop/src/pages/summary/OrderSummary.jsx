import React from 'react';
import { useOrderDetails } from '../../context/OrderDetails';
import { formatCurrency } from '../../utils/formatCurrency';
import SummaryForm from './SummaryForm';

const OrderSummary = () => {
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
			<SummaryForm />
		</>
	);
};

export default OrderSummary;
