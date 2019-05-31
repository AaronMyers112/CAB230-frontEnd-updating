import React, { useState } from 'react';
import { RegisterBtn, LoginBtn } from './Api.js';


export function CreateNav() {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	return (
    <div className="App-header">
      <div className="App-header_logo">
        <h1>
          Crime Statistics
        </h1>
      </div>
      <div className="App-header_form">
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <input 
            placeholder="Email"
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            onDoubleClick={() => setEmail("")}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            autoComplete="email"
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={pass}
            onDoubleClick={() => setPass("")}
            onChange={(event) => {
              setPass(event.target.value)
            }}
            autoComplete="current-password"
          />
          <button type='submit' onClick={() => {RegisterBtn(email,pass); setPass(""); setEmail("")}}>Register</button>
          <button type='submit' onClick={() => {LoginBtn(email,pass); setPass("");   setEmail("")}}>Login</button>
        </form>
      </div>
    </div>
  )
}
