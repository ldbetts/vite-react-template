import "./App.css";
import wanderLogo from "./assets/wander-logo.png";
import photoTree from "./assets/tree.jpg";
import photoCloud from "./assets/cloud.jpg";
import photoCanyon from "./assets/canyon.jpg";

const SIGNAL_URL =
	"https://signal.group/#CjQKIMDebriozi4mUjSQres13PquQ8kaFF9HAQQEZ_6RTR1PEhC5ckcbnpHWek0Bki6u34Z7";
const FACEBOOK_URL = "https://www.facebook.com/groups/wanderutah"; // double-check this against wanderutah

const PHOTOS = [photoTree, photoCloud, photoCanyon];
const randomPhoto = PHOTOS[Math.floor(Math.random() * PHOTOS.length)];

function App() {
	return (
		<main className="wander">
			<img className="wander__bg" src={randomPhoto} alt="" aria-hidden="true" />
			<div className="wander__scrim" aria-hidden="true" />

			<div className="wander__content">
				<div className="wander__brand">
					<img className="wander__logo" src={wanderLogo} alt="Wander." />
					<p className="wander__tagline">
						nature - new experiences - odd company
					</p>
				</div>

				<div className="wander__bottom">
					<nav className="wander__links">
						<a className="wander__link" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
							Facebook group
						</a>
						<a className="wander__link" href={SIGNAL_URL} target="_blank" rel="noreferrer">
							Signal group
						</a>
					</nav>

					<footer className="wander__footer">
						<p>no commitment - no agendas - no cliques</p>
						<p>activities every other saturday (age 18-28)</p>
					</footer>
				</div>
			</div>
		</main>
	);
}

export default App;
