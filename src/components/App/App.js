import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";

let business = {
	imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
	name: "MarginOtto Pizzeria",
	address: "1010 Paddington Way",
	city: "Flavortown",
	state: "NY",
	zipCode: " 10101",
	category: "Italian",
	rating: 4.5,
	reviewCount: 90,
};

const businessList = [
	business,
	business,
	business,
	business,
	business,
	business,
];

function App() {
	return (
		<div className="App">
			<h1>foodie</h1>
			<SearchBar />
			<BusinessList businesses={businessList} />
		</div>
	);
}

export default App;
