import { pricePerItem } from '../constants/pricePerItem';

export const calculateTotalCount = (optionType, obj) => {
	const countArray = Object.values(obj[optionType]);
	// calculating total
	const totalCount = countArray.reduce((total, value) => total + value, 0);
	return totalCount * pricePerItem[optionType];
};
