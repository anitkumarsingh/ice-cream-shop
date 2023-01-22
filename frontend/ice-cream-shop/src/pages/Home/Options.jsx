import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/api';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToopingOption';

import { Row } from 'react-bootstrap';
import AlertBanner from '../../components/Alert';
import { pricePerItem } from '../../constants/pricePerItem';
import { formatCurrency } from '../../utils/formatCurrency';
import { useOrderDetails } from '../../context/OrderDetails';

const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);
	const [isError, setIsError] = useState(false);
	const { total } = useOrderDetails();

	useEffect(() => {
		axios
			.get(`${BASE_URL}/${optionType}`)
			.then((response) => {
				setItems(response.data);
			})
			.catch((err) => setIsError(true));
	}, [optionType]);
	const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
	const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

	const renderOptions = items.map((item) => (
		<ItemComponent
			key={item.name}
			name={item.name}
			imagePath={item.imagePath}
			optionType={optionType}
		/>
	));

	if (isError) return <AlertBanner />;

	return (
		<>
			<h2 className='mt-3'>{title}</h2>
			<hr />
			<p>{formatCurrency(pricePerItem[optionType])} each</p>
			<p>
				{title} total :{formatCurrency(total[optionType])}
			</p>
			<hr />
			<Row>{renderOptions}</Row>
		</>
	);
};

export default Options;
