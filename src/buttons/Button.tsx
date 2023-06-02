import { FC, InputHTMLAttributes } from "react";

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
	disabled?: boolean;
	text: String;
}

const Button: FC<ButtonProps> = ({disabled, text}) => {
	return (
		<>
			<button
				type="submit"
				disabled={disabled}
			>
				{text}
			</button>
		</>
	);
}

export default Button;