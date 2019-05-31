import React, { useState } from 'react';
import { CreateNav } from './nav.js';
import { useData } from './Api.js'
import ReactDOM from 'react-dom';
import './App.css';

// let filter = false;

function Data(props) {
	return (	
			<tr>
				<td>{props.LGA}</td>
				<td>{props.total}</td>
			</tr>
	);
}

function SearchBar(props){
	const[innerSearch, setInnerSearch] = useState("");
	return (
		<div className="search">
			<input
				placeholder="Search"
				aria-labelledby="search-button"
				name="search"
				id="search"
				value={innerSearch}
				onDoubleClick={() => setInnerSearch("")}
				onChange={(e) => setInnerSearch(e.target.value)}
			/>
			<button id="search-button"
				type="button"
				onClick={() => props.onSubmit(innerSearch)}
			>
				Search
			</button>
		</div>
		)
}

function Filters(props) {
	const [area, setArea] = useState("");
	const [age, setAge] = useState("");
	const [sex, setSex] = useState("");
	const [year, setYear] = useState("");
	const [month, setMonth] = useState("");
	let innerSearch = `&area=${area}&age=${age}&gender=${sex}&year=${year}&month=${month}`;

	const numbers = [];
	const years = [];
	const months = [1,2,3,4,5,6,7,8,9,10,11,12]

	for(let i = 0; i < 30; i++){
		numbers.push(i);
	};
	for(let y = 2001; y < 2019; y++){
		years.push(y);
	};

	return (
		<div className = "filter">
	  		<form>
				<select onChange={(e) => setArea(e.target.value)}>
					<option value="">Area</option>
				  	{props.data.map((dataSet, index) => {
				  		return <option key={index} value={dataSet.LGA}>{dataSet.LGA}</option>
				  	})}
		  		</select>
		  		<select onChange={(e) => setAge(e.target.value)}>
		  			<option value="">Age</option>
					{numbers.map((numberSet, index) => {
		  				return(<option key={index} value={numberSet}>{numberSet}</option>)
		  			})}
		  		</select>
		  		<select onChange={(e) => setSex(e.target.value)}>
		  			<option value="">Gender</option>
		  			<option value="Male">Male</option>
		  			<option value="Female">Female</option>
		  			<option value="other">other</option>
		  		</select>
		  		<select onChange={(e) => setYear(e.target.value)}>
		  			<option value="">Year</option>
		  			{years.map((yearSet, index) => {
		  				return(<option key={index} value={yearSet}>{yearSet}</option>)
		  			})}
		  		</select>
		  		<select onChange={(e) => setMonth(e.target.value)}>
		  			<option value="">Month</option>
		  			{months.map((monthSet, index) => {
		  				return(<option key={index} value={monthSet}>{monthSet}</option>)
		  			})}
		  		</select>
		  		<button id="search-button"
					type="button"
					onClick={() => props.onSubmit(innerSearch)}
				>
					Filter
				</button>
		  	</form>
		</div>
	)
}


function App() {
	const [search, setSearch] = useState("");
	const [params, setParams] = useState("");
	const { loading, data } = useData(search, params);


	if(loading){
		return(
		<div>
			<h1>Please wait one moment, loading...</h1>
		</div>)
	}
	return (
	<div className="App">
	 	<CreateNav />
	  	<SearchBar onSubmit={setSearch} />
	  	<Filters data={data} onSubmit={setParams}/>
	  	<div className="body">
	    	<table className="tableData">
    			<thead>
    				<tr>
		    			<th onClick={() => console.log(data)}>
		    				Area
		    			</th>
		    			<th onClick={() => data.sort()}>
		    				Total
		    			</th>
	    			</tr>
    			</thead>
    			<tbody>
				    {data.map((dataSet, index) => (
				    	<Data key={index} total={dataSet.total} LGA={dataSet.LGA} />
				      	))}
	      	    </tbody>
	    	</table>
		</div>
	  <div id="app">
	  </div>
	</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
