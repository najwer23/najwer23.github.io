import "./Button.css"

interface ButtonProps  {
	disabled?: boolean;
	text: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	className: string;
	title: string;
	ariaLabel: string;
	type: 'submit' | 'reset' | 'button' | undefined;
}

export const Button = ({disabled, text, onClick, className, ariaLabel, title, type}: ButtonProps): JSX.Element => {

	function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
		if (onClick !== undefined) {
			onClick(e);
		}
	}

	return (
		<>
			<button
				type={type}
				disabled={disabled}
				onClick={handleClick}
				className={className}
				title={title}
				aria-label={ariaLabel}
			>
				{text}
			</button>
		</>
	);
}
