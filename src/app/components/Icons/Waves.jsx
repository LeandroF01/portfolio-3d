import React from "react";

export const Waves = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<defs>
				<linearGradient id="gradiente" gradientTransform="rotate(35)">
					<stop offset="0%" stopColor="rgb(255,0,169)" />
					<stop offset="23%" stopColor="rgb(237,0,15)" />
					<stop offset="49%" stopColor="rgb(146,1,95)" />
					<stop offset="73%" stopColor="rgb(56,1,173)" />
					<stop offset="100%" stopColor="rgb(2,1,221)" />
				</linearGradient>
			</defs>
			<path
				fill="url(#gradiente)"
				fillOpacity="1"
				d="M0,128L20,149.3C40,171,80,213,120,245.3C160,277,200,299,240,261.3C280,224,320,128,360,96C400,64,440,96,480,117.3C520,139,560,149,600,133.3C640,117,680,75,720,69.3C760,64,800,96,840,122.7C880,149,920,171,960,160C1000,149,1040,107,1080,128C1120,149,1160,235,1200,245.3C1240,256,1280,192,1320,176C1360,160,1400,192,1420,208L1440,224L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path>
		</svg>
	);
};
