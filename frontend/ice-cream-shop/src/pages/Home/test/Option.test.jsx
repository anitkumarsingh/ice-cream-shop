import { screen, render } from '../../../utils/testing-utils';
import Option from '../Options';

describe('Display image for each option', () => {
	test('Displays image for each scoop option from server', async () => {
		render(<Option optionType='scoops' />);
		// find image
		const image = await screen.findAllByRole('img', { name: /scoops$/i });
		expect(image).toHaveLength(4);

		const altText = image.map((i) => i.alt);
		expect(altText).toEqual([
			'Mint chip scoops',
			'Vanilla scoops',
			'Chocolate scoops',
			'Salted caramel scoops'
		]);
	});
	test('Displays images from each of tooping option from server', async () => {
		render(<Option optionType='toppings' />);
		// find tooping images
		const toopingImages = await screen.findAllByRole('img', { name: /toppings$/i });
		expect(toopingImages).toHaveLength(6);
		// checking for alt text
		const toopingAltTxt = toopingImages.map((item) => item.alt);
		expect(toopingAltTxt).toEqual([
			'M&Ms toppings',
			'Hot fudge toppings',
			'Peanut butter cups toppings',
			'Gummi bears toppings',
			'Mochi toppings',
			'Cherries toppings'
		]);
	});
});
