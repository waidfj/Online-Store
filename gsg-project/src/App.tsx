import "./Style/App.css";
import ProductList from "./Components/ProductList";
import FiltersContainer from "./Components/FiltersContainer";
import { MouseEvent } from "react";
import { useState } from "react";

const products = [
	{ name: "Jumper", category: "Clothes", price: 49.99 },
	{ name: "Iphone 16", category: "Electronics", price: 1299 },
	{ name: "Iphone 15", category: "Electronics", price: 1199 },
	{ name: "Noodles", category: "Food", price: 1.99 },
	{ name: "Tuxedo Shirt", category: "Clothes", price: 59.99 },
	{ name: "AirPods Pro", category: "Electronics", price: 199 },
	{ name: "45W Charger", category: "Electronics", price: 19.99 },
	{ name: "Eggs", category: "Food", price: 5.99 },
	{ name: "T-shirt", category: "Clothes", price: 15.99 },
	{ name: "Blue Jeans", category: "Clothes", price: 49.99 },
	{ name: "S24 Ultra", category: "Electronics", price: 1399 },
	{ name: "Fish", category: "Food", price: 20 },
	{ name: "Pajamas", category: "Clothes", price: 9.99 },
];

function App() {
	const [displayProducts, setDisplayProducts] = useState(products);

	function setCategory(e: MouseEvent) {
		document.getElementsByClassName("active")[0].classList.remove("active");
		e.target.classList.add("active");

		if (e.target.id == "All") setDisplayProducts(products);
		else {
			let display: { name: string; category: string; price: number }[];
			display = [];
			products.map((product) => {
				if (product.category == e.target.id) {
					display.push(product);
				}
			});
			setDisplayProducts(display);
		}
	}

	return (
		<div className="main-container">
			<h1 className="title">Online Store</h1>
			<FiltersContainer setCategory={setCategory} />
			<ProductList products={displayProducts} />
		</div>
	);
}

export default App;
