import { useState, createContext, useContext } from 'react';
import { calculateTotalCount } from '../utils/calculateTotalCount';

const OrderDetailContext = createContext();

export const useOrderDetails = () => {
	const contextValue = useContext(OrderDetailContext);
	if (!contextValue) {
		throw new Error('Order details must be called within order detail provider');
	}
	return contextValue;
};

export const OrderDetailsProvider = (props) => {
	const [optionsCount, setOptionCount] = useState({
		scoops: {},
		toppings: {}
	});
	const updateOptionCount = (itemName, newOptionCount, optionType) => {
		// make a copy of existing option count
		const newCounts = { ...optionsCount };
		// update a copy with new information
		newCounts[optionType][itemName] = newOptionCount;
		// update the state
		setOptionCount(newCounts);
	};

	const resetOrder = () => {
		setOptionCount({ scoops: {}, toppings: {} });
	};

	const total = {
		scoops: calculateTotalCount('scoops', optionsCount),
		toppings: calculateTotalCount('toppings', optionsCount)
	};

	const value = { optionsCount, updateOptionCount, resetOrder, total };

	return <OrderDetailContext.Provider value={value} {...props} />;
};
