import "./App.css";
import wanderLogo from "./assets/wander-logo.png";
import photoTree from "./assets/tree.jpg";
import photoCloud from "./assets/cloud.jpg";
import photoCanyon from "./assets/canyon.jpg";

// Fill this in once your Signal group invite link is ready.
const SIGNAL_URL = "";
const FACEBOOK_URL = "https://www.facebook.com/groups/wanderutah"; // double-check this against wanderutah

const PHOTOS = [photoTree, photoCloud, photoCanyon];
const randomPhoto = PHOTOS[Math.floor(Math.random() * PHOTOS.length)];

function App() {
	return (
		<main className="wander">
			<img className="wander__logo" src={wanderLogo} alt="Wander." />
			<p className="wander__tagline">
				nature - new experiences - odd company
			</p>

			<img className="wander__photo" src={randomPhoto} alt="" />

			<nav className="wander__links">
				<a className="wander__link" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
					Facebook group
				</a>
				{SIGNAL_URL ? (
					<a className="wander__link" href={SIGNAL_URL} target="_blank" rel="noreferrer">
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
