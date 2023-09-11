import { ButtonStyle } from "./Button.styled";

interface ButtonProps {
	disabled?: boolean;
	text: string | React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	title: string;
	ariaLabel: string;
	type: 'submit' | 'reset' | 'button' | undefined;
	styled?: string;
}

export const Button = ({ disabled, text, onClick, className, ariaLabel, title, type, styled }: ButtonProps): JSX.Element => {

	function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
		if (onClick !== undefined) {
			onClick(e);
		}
	}

	return (
		<ButtonStyle $styled={styled}>
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
		</ButtonStyle>
	);
}