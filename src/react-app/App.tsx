import "./App.css";

// Fill this in once your Signal group invite link is ready.
const SIGNAL_URL = "";
const FACEBOOK_URL = "https://www.facebook.com/groups/wanderutah";

function App() {
	return (
		<main className="wander">
			<h1 className="wander__title">Wander.</h1>
			<p className="wander__tagline">
				nature - new experiences - odd company
			</p>

			<div className="wander__photo" aria-hidden="true" />

			<nav className="wander__links">
				
					className="wander__link"
					href={FACEBOOK_URL}
					target="_blank"
					rel="noreferrer"
				>
					Facebook group
				</a>
				{SIGNAL_URL ? (
					
						className="wander__link"
						href={SIGNAL_URL}
						target="_blank"
						rel="noreferrer"
					>
						Signal group
					</a>
				) : (
					<span className="wander__link wander__link--pending">
						Signal group (coming soon)
					</span>
				)}
			</nav>

			<footer className="wander__footer">
				<p>no commitment - no agendas - no cliques</p>
				<p>activities every other saturday (age 18-28)</p>
			</footer>
		</main>
	);
}

export default App;
