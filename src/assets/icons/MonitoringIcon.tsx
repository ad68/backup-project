export function MonitoringIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} id="Icons" viewBox="0 0 32 32">
			<path
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10
				}}
				d="M3,5v16c0,1.1,0.9,2,2,2h22c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H5C3.9,3,3,3.9,3,5z"
			/>
			<line
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10
				}}
				x1="9"
				y1="29"
				x2="23"
				y2="29"
			/>
			<path
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10
				}}
				d="M13,23c0,2.1-0.7,4.6-1.8,6"
			/>
			<path
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10
				}}
				d="M20.8,29c-1.1-1.4-1.8-3.9-1.8-6"
			/>
			<polyline
				style={{
					fill: 'none',
					stroke: 'currentColor',
					strokeWidth: 2,
					strokeLinecap: 'round',
					strokeLinejoin: 'round',
					strokeMiterlimit: 10
				}}
				points="7,13 12,13 14,11 16,15 18,10 20,13 25,13"
			/>
		</svg>

	);
}