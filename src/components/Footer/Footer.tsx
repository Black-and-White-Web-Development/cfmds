import "./Footer.scss";

const Footer = function () {
	return (
		<footer className="footer fb-col-wrapper">
			<div className="footer__content-wrapper">
				<h2 className="footer__heading">Chichester Festival for Music, Dance & Speech</h2>
				<p className="footer__text">
					Copyright © 1954 - {new Date().getFullYear()} Chichester Festival for Music, Dance &
					Speech. All rights reserved. The Festival is a registered charity, number 1040782, and is
					affiliated to the British and International Federation of Festivals, of which Her Majesty
					Queen Elizabeth II was patron for over 70 years.
				</p>
			</div>
			<div className="footer__content-wrapper">
				<h3 className="footer__heading">Acknowledgements</h3>
				<dl className="footer__list">
					<div className="footer__list-item">
						<dt className="footer__list-term">The Arts Society (Chichester)</dt>
						<dd className="footer__list-details">
							The Festival Committee acknowledge the support of the Arts Society (Chichester).
						</dd>
					</div>
					<div className="footer__list-item">
						<dt className="footer__list-term">
							Chichester City Council & Bognor Regis Town Council
						</dt>
						<dd className="footer__list-details">
							The Festival Committee gratefully acknowledge the support of the Chichester City
							Council and Bognor Regis Town Council.
						</dd>
					</div>
					<div className="footer__list-item">
						<dt className="footer__list-term">Ackerman Music Shop</dt>
						<dd className="footer__list-details">
							The Festival Committee gratefully acknowledge the generous support which it receives
							from the management and staff of Ackerman Music 42 West Street Chichester PO19 1RP.
						</dd>
					</div>
					<div className="footer__list-item">
						<dt className="footer__list-term">34SP.com</dt>
						<dd className="footer__list-details">
							The Festival Committee gratefully acknowledge the support of 34SP.com for providing a
							charity web hosting package.
						</dd>
					</div>
				</dl>
			</div>
		</footer>
	);
};

export default Footer;
