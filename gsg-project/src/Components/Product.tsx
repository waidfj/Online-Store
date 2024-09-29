interface props {
	name: string;
	category: string;
	price: number;
}

function Product(props: props) {
	const name = props.name;
	const category = props.category;
	const price = props.price;

	// this is to reduce big text's size
	function resizeToFit(defaultFontSize: number, text: string) {
		const fontSize = defaultFontSize - 1;

		if (text.length >= 8)
			return resizeToFit(fontSize, text.slice(0, text.length - 1));

		return fontSize;
	}

	return (
		<div className="product">
			<h3
				className="product-name"
				style={{ fontSize: resizeToFit(39, name) + "px" }}>
				{name}
			</h3>
			<h5 className="product-category">{category}</h5>
			<h5 className="product-price">{price}$</h5>
		</div>
	);
}

export default Product;
