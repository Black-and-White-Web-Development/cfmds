import "./Home.scss";

const Home = function () {
	return (
		<div className="home">
			<h1 className="home__heading">Chichester Festival for Music, Dance and Speech</h1>
			<p className="home__text">
				Our website is getting an upgrade! Check back here on 27/06/2025.
			</p>
			<p className="home__text">
				In the meantime, you can still check our Facebook page or log in to Play&Perform to see the
				latest updates to the 2026 syllabus.
			</p>
			<div className="home__links">
				<a className="home__link" href="https://www.facebook.com/CFMDandS">
					CFMDS on Facebook
				</a>
				<a
					className="home__link"
					href="https://playandperform.uk/oe/oe_signin.php?pnp_token=ch&initsw=1901"
				>
					CFMDS on Play&Perform
				</a>
			</div>
		</div>
	);
};

export default Home;
