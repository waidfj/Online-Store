import "../Style/Filters.css";
import { MouseEvent } from "react";

interface props {
	setCategory(e: MouseEvent): void;
}

function FiltersContainer(props: props) {
	const setCategory = (e: MouseEvent) => props.setCategory(e);

	return (
		<div className="filter-container">
			<button
				className="categoryBtn active"
				id="All"
				onClick={setCategory}>
				All
			</button>
			<button
				className="categoryBtn"
				id="Electronics"
				onClick={setCategory}>
				Electronics
			</button>
			<button
				className="categoryBtn"
				id="Clothes"
				onClick={setCategory}>
				Clothes
			</button>
			<button
				className="categoryBtn"
				id="Food"
				onClick={setCategory}>
				Food
			</button>
		</div>
	);
}

export default FiltersContainer;
