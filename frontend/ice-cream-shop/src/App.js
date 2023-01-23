import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { OrderDetailsProvider } from './context/OrderDetails';
import Order from './pages/Home/Order';
import OrderConfirmation from './pages/Order/OrderConfirmation';
import OrderSummary from './pages/Summary/OrderSummary';

const App = () => {
	const [orderPhase, setOrderPhase] = useState('inProgress');

	let CurrentComponent = Order;
	switch (orderPhase) {
		case 'inProgress':
			CurrentComponent = Order;
			break;
		case 'review':
			CurrentComponent = OrderSummary;
			break;
		case 'complete':
			CurrentComponent = OrderConfirmation;
			break;
		default:
			CurrentComponent = Order;
			break;
	}
	console.log(orderPhase);
	return (
		<Container>
			<OrderDetailsProvider>
				<CurrentComponent setOrderPhase={setOrderPhase} />
			</OrderDetailsProvider>
		</Container>
	);
};

export default App;
