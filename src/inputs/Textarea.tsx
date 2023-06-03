import { InputHTMLAttributes} from "react";
import "./Input.css"

interface TextareaProps extends InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
	innerRef: React.RefObject<HTMLTextAreaElement>;
	onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
}


export const Textarea = ({id, label, innerRef, onBlur}: TextareaProps): JSX.Element => {

	function handleBlur(e:  React.FocusEvent<HTMLElement>): void {
		if (onBlur !== undefined) {
			onBlur(e);
		}
	}

	return (
		<>
			<div className="textarea-with-label">
				<label htmlFor={id}> {label}</label>

				<textarea
					onBlur={handleBlur}
					ref={innerRef}
					name={id}
					id={id}
				></textarea>
			</div>
		</>
	);
}