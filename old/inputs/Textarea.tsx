import { InputHTMLAttributes } from "react";
import { IputWithLabel } from "./Forms.styled";

interface TextareaProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	innerRef: React.RefObject<HTMLTextAreaElement>;
	onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
}


export const Textarea = ({ id, label, innerRef, onBlur }: TextareaProps): JSX.Element => {

	function handleBlur(e: React.FocusEvent<HTMLElement>): void {
		if (onBlur !== undefined) {
			onBlur(e);
		}
	}

	return (
		<>
			<IputWithLabel>
				<label htmlFor={id}> {label}</label>

				<textarea
					onBlur={handleBlur}
					ref={innerRef}
					name={id}
					id={id}
				></textarea>
			</IputWithLabel>
		</>
	);
}