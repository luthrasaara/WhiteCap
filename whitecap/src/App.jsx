import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import msLogo from './assets/ml.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<header className="navbar">
			<div className="nav-left">
				<span className="text">WhiteCap</span>
			</div>

			<div className="nav-right">
				<button className="sign-in">
					<img src={msLogo} alt="Microsoft" className="logo" />
					Sign In
				</button>
			</div>
		</header>

			
		<div className="hero">
			<h1>Welcome</h1>

			<button>
				<img src={msLogo} alt="Microsoft" className="btn-logo" />
				Get Started
			</button>
		</div>
	
	</>
	
		
    
  );
}

export default App
