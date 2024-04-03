import './App.css'

function App() {

  	return (
		
		<>
			
			<div className="card">

				<div className="border"></div>

				<div className="filter"></div>

				<h2>First Card</h2>

				<p>Wow! Such an interesting card!<br/>Wanna hover over it?</p>

				<div className="shadow"></div>

				<div className="backdrop"></div>

				<svg style={{ position: "absolute"}}>

					<filter id='noiseFilter2'>

						<feTurbulence 

						type='fractalNoise' 

						baseFrequency='0.6' 

						stitchTiles='stitch'/>

					</filter>

					<clipPath id="rounded-clip">

						<rect x="0" y="0" width="300" height="300" rx="20" ry="20"/>

					</clipPath>

				</svg>

			</div>

		</>

  	)

}

export default App
