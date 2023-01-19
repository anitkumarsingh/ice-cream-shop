import { screen, render } from '@testing-library/react';
import Option from '../Options';

describe('Display image for each option', () => {
	test('Displays image for each scoop option from server', async () => {
		render(<Option optionType='scoops' />);
		// find image
		const image = await screen.findAllByRole('img', { name: /scoop$/i });
		expect(image).toHaveLength(4);

		const altText = image.map((i) => i.alt);
		expect(altText).toEqual([
			'Mint chip scoop',
			'Vanilla scoop',
			'Chocolate scoop',
			'Salted caramel scoop'
		]);
	});
});
