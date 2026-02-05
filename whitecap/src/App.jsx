import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div id = "container">
			<div id = "box">
				<div id = "signInOptions">
					<button className = "activeButton">User</button>
					<button>Admin</button>
				</div>
			
				<h1>Welcome Back</h1>
				<h3>Sign in with your Microsoft Entra ID</h3>
				
				<div id = "inputField">
					<h4>Username</h4>
					<input className = "inputBox" placeholder = "Enter your username"/>
				</div>

				<div id = "inputField">			
					<h4>Password</h4>
					<input className = "inputBox" placeholder = "Enter your password"/>
				</div>
				
				<div id = "stuff">
					<div id = "rmbr">
						<input type = "checkbox"/>
						<span>Remember me</span>
					</div>
					<div id = "forgot">
						<a href = "#"><span>Forgot password?</span></a>
					</div>
				</div>
				
				<button id = "signInButton">Sign in as User</button>
				
				<div id = "noAccount">
					<span>
						Dont have an account? 
						<a href = "#"> Sign Up</a>
					</span>
				</div>
			</div>
		</div>
    </>
  )
}

export default App
