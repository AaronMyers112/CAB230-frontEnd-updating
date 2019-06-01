import { useState, useEffect } from 'react';

let JWT = null;

function getData(offence, params) {
	return fetch(`https://cab230.hackhouse.sh/search?offence=${offence}${params}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${JWT}`,
		}
	})
	.then((res) => res.json())
	.then((res) => res.result)
	.then((result) => 
		result.map((results) => ({
			LGA: results.LGA,
			total: results.total,
			lat: results.lat,
			lng: results.lng,
		})),
	);
}

function getArea(){
	return fetch("https://cab230.hackhouse.sh/areas", {
		method: "GET",
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		}
	})
	.then((res) => res.json())
	.then((res) => res.result)
	.then((result) =>
		result.map((results) => ({
			areas: results.areas,
		})),
	);
}

function getAge(){
	return fetch("https://cab230.hackhouse.sh/ages", {
		method: "GET",
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		}
	})
	.then((res) => res.json())
	.then((res) => res.result)
	.then((result) =>
		result.map((results) => ({
			ages: results.ages,
		}))
	);
}

function getGender(){
	return fetch("https://cab230.hackhouse.sh/genders", {
		method: "GET",
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		}
	})
	.then((res) => res.json())
	.then((res) => res.result)
	.then((result) =>
		result.map((results) => ({
			gender: results.gender,
		}))
	);
}

function getYear(){
	return fetch("https://cab230.hackhouse.sh/years", {
		method: "GET",
		headers: {
			"Content-type": "application/x-www-form-urlencoded"
		}
	})
	.then((res) => res.json())
	.then((res) => res.result)
	.then((result) =>
		result.map((results) => ({
			year: results.year,
		}))
	);
}

export function useData(search, params)
{
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	// const [area, setArea] = useState([]);
	useEffect(() => {
		getData(search, params)
			.then((data) => {
				setData(data);
				// setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
			});
		// getArea()
		// 	.then((area) => {
		// 		setArea(area);
		// 		setLoading(false);
		// 		console.log(area);
		// 	});

	}, [search, params]);
	return {
		loading,
		data,
		// area,
	}
}

export function useEndPoints()
{
	const [area, setArea] = useState([]);
	const [age, setAge] = useState([]);
	const [gender, setGender] = useState([]);
	const [year, setYear] = useState([]);
	useEffect(() => {
		getArea()
			.then((area) => {
				setArea(area);
				console.log(area);
			});
		getAge()
			.then((age) => {
				setAge(age);
			})
		getGender()
			.then((gender) => {
				setGender(gender);
			})
		getYear()
			.then((year) => {
				setYear(year);
			})
	}, []);
	return {
		area,
		age,
		gender,
		year,
	}
}

export function RegisterBtn(email, pass)
{
	return(
		fetch("https://cab230.hackhouse.sh/register", {
          	method: "POST",
          	body: `email=${email}&password=${pass}`,
          	headers: {
          		"Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(function(response) {
          	return response.json();
        })

        .then(function(result) {
			alert(result.message);   	
        })
        .catch(function(error) {
          	console.log("Problem with fetch ",error.message);
        })
    )
}

export function LoginBtn(email,pass)
{
	let loggedIn = false;
	return(
		fetch("https://cab230.hackhouse.sh/login", {
			method: "POST",
			body: `email=${email}&password=${pass}`,
			headers: {
				"Content-type": "application/x-www-form-urlencoded"
			}
		})
		.then(function(response) {
			if(response.status === 200)
			{
				alert("Logged In");
				loggedIn = true;
			}
			return response.json();

		})
		.then(function(result) {
			if(!loggedIn){
				alert(result.message);
			}
			JWT = result.token;
		})
		.catch(function(error) {
			console.log("Problem with fetch ", error.message);
		})
	)
}