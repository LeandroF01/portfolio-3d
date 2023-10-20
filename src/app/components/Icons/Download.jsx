import React from "react";
import PropTypes from "prop-types";

export const Cv = ({ color }) => {
	return (
		<svg fill={color} version="1.1" id="Capa_1" viewBox="0 0 60 60">
			<g>
				<g>
					<path
						d="M2,13h10c0.6,0,1-0.4,1-1V2h33v5h2V1c0-0.6-0.4-1-1-1H12l0,0c-0.1,0-0.2,0-0.3,0.1h-0.1c-0.1,0.1-0.2,0.1-0.3,0.2l0,0
           l-11,11l0,0c-0.1,0.1-0.1,0.2-0.2,0.3v0.1C0.1,11.8,0,11.9,0,12l0,0v47c0,0.6,0.4,1,1,1h29v-2H2L2,13L2,13z M3.4,11l3.8-3.8
           L11,3.4V11H3.4z"
					/>
					<path
						d="M53,39H43c-3.9,0-7,3.1-7,7v14h2V46c0-2.8,2.2-5,5-5h1.3l2.8,7.4c0.1,0.3,0.5,0.6,0.9,0.6s0.8-0.3,1.1-0.6l2.8-7.4H53
           c2.8,0,5,2.2,5,5v14h2V46C60,42.1,56.9,39,53,39z M48.1,45.2L46.5,41h3.2L48.1,45.2z"
					/>
					<rect x="47" y="51" width="2" height="2" />
					<rect x="47" y="55" width="2" height="2" />
					<path
						d="M47,38h2c2.8,0,5-2.2,5-5v-3c0-2.8-2.2-5-5-5h-2c-2.8,0-5,2.2-5,5v3C42,35.8,44.2,38,47,38z M44,30c0-1.7,1.3-3,3-3h2
           c1.7,0,3,1.3,3,3v3c0,1.7-1.3,3-3,3h-2c-1.7,0-3-1.3-3-3V30z"
					/>
					<rect x="41" y="49" width="2" height="11" />
					<rect x="53" y="49" width="2" height="11" />
					<path
						d="M59,14h-3v-3c0-0.6-0.4-1-1-1H34v2h20v2h-3H23c-0.2,0-0.4,0.1-0.5,0.1l-7.9,3C14.3,17.2,14,17.6,14,18s0.3,0.8,0.6,0.9
           l7.9,3c0.1,0,0.2,0.1,0.3,0.1s0.2,0,0.2,0h28h8c0.6,0,1-0.4,1-1v-6C60,14.4,59.6,14,59,14z M22,16.5v3.1L17.8,18L22,16.5z M24,16
           h26v4H24V16z M58,20h-6v-4h6V20z"
					/>
					<rect x="6" y="28" width="10" height="2" />
					<rect x="6" y="32" width="10" height="2" />
					<rect x="6" y="36" width="10" height="2" />
					<rect x="6" y="40" width="10" height="2" />
					<rect x="20" y="28" width="10" height="2" />
					<rect x="20" y="32" width="10" height="2" />
					<rect x="34" y="28" width="5" height="2" />
					<rect x="34" y="32" width="5" height="2" />
					<rect x="20" y="36" width="10" height="2" />
					<rect x="20" y="40" width="10" height="2" />
					<rect x="6" y="45" width="2" height="2" />
					<rect x="10" y="45" width="2" height="2" />
					<rect x="14" y="45" width="2" height="2" />
					<rect x="20" y="45" width="2" height="2" />
					<rect x="24" y="45" width="2" height="2" />
					<rect x="28" y="45" width="2" height="2" />
					<rect x="6" y="49" width="2" height="2" />
					<rect x="10" y="49" width="2" height="2" />
					<rect x="14" y="49" width="2" height="2" />
					<rect x="20" y="49" width="2" height="2" />
					<rect x="24" y="49" width="2" height="2" />
					<rect x="28" y="49" width="2" height="2" />
					<rect x="6" y="53" width="2" height="2" />
					<rect x="10" y="53" width="2" height="2" />
					<rect x="14" y="53" width="2" height="2" />
					<rect x="20" y="53" width="2" height="2" />
					<rect x="24" y="53" width="2" height="2" />
					<rect x="28" y="53" width="2" height="2" />
				</g>
			</g>
		</svg>
	);
};

export const DownArrow = ({ color, width, height }) => {
	return (
		<svg
			fill={color}
			width={width}
			height={height}
			viewBox="0 0 1920 1920"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M1559.238 360.762c-330.46-330.46-868.016-330.46-1198.476 0-330.46 330.46-330.46 868.016 0 1198.476 330.46 330.46 868.016 330.46 1198.476 0 330.46-330.46 330.46-868.016 0-1198.476ZM280.863 1639.137c-374.484-374.484-374.484-983.79 0-1358.274 374.484-374.484 983.79-374.484 1358.274 0 374.484 374.484 374.484 983.79 0 1358.274-374.484 374.484-983.79 374.484-1358.274 0Zm359.543-599.239 263.106 263.106-.08-822.395h113.136l-.08 822.395 263.106-263.106 79.898 79.899L960 1519.289l-399.492-399.492 79.898-79.899Z" />
		</svg>
	);
};

export const Checked = ({ color, width, height }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17 9L9.99998 16L6.99994 13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
				stroke={color}
			/>
		</svg>
	);
};

Checked.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

DownArrow.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};
Cv.propTypes = {
	color: PropTypes.string,
};
