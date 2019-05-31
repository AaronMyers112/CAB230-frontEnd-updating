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

export function useData(search, params)
{
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	useEffect(() => {
		getData(search, params)
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
			});
	}, [search, params]);
	return {
		loading,
		data,
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