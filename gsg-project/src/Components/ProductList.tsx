import "../Style/Products.css";
import Product from "./Product";

interface props {
	products: { name: string; category: string; price: number }[];
}

function ProductList(props: props) {
	const products = props.products;

	return (
		<div id="products-container">
			{products.map((product) => (
				<Product
					key={product.name}
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			))}
		</div>
	);
}

export default ProductList;
