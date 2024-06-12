const TodoDone = ({ width, height }: { width: string; height: string }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="rgb(30 41 59 / 0.7)"
				fillRule="evenodd"
				d="M3 13.5a.5.5 0 0 1-.5-.5V3a.5.5 0 0 1 .5-.5h9.25a.75.75 0 0 0 0-1.5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3Zm12.78-8.82a.75.75 0 0 0-1.06-1.06L9.162 9.177L7.289 7.241a.75.75 0 1 0-1.078 1.043l2.403 2.484a.75.75 0 0 0 1.07.01L15.78 4.68Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export { TodoDone };
