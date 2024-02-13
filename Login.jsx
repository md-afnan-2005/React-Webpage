import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Replace with your own authentication logic
    if (username === 'afnan' && password === 'Tmda@2005') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setUsername('');
    setPassword('');
  };

  return (
    <div class="b1 d-flex flex-row shadow">
      
      <div class="a">
      <h1 class="heading">Login</h1>
      <form onSubmit={handleLogin}>
        <label class="as">
          Username:<br/>
          <input type="text" class="q" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label class="as">
          Password:<br/>
          <input type="password" class="q" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit" class="button">Submit</button>
      </form>
      {loggedIn ? <h2 class="p">Welcome to our Website{username}!</h2> : <p class="p">Invalid credentials. Please try again.</p>}
      </div>
      <img src="https://img.freepik.com/premium-photo/freelance-remote-work-concept-freelance-man-working-laptop-home_934652-4308.jpg" class="mr-4"/>
    </div>
  );
}

export default Login;
