import { FC, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	innerRef: React.RefObject<HTMLInputElement>;
	type: string;
	onBlur?: any;
}


const Input: FC<InputProps> = ({id, label, innerRef, type, onBlur}) => {
	function handleBlur(e: React.FocusEvent<HTMLElement>) {
		if (onBlur !== undefined) {
			onBlur(e);
		}
	}

	return (
		<>
			<div className="inputTextWithLabel">
				<label htmlFor={id}> {label}</label>

				<input
					onBlur={handleBlur}
					ref={innerRef}
					type={type}
					name={id}
					id={id}
				/>
			</div>
		</>
	);
}

export default Input;