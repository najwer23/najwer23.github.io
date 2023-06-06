import { Button } from "../buttons/Button";
import { Input } from "../inputs/Input";
import { Textarea } from "../inputs/Textarea";
import { Nav } from "../nav/Nav";
import { useRef } from "react";
import Validation from "../validation/Validation";
import { useAppSelector, useAppDispatch } from "./../hooks";
import { RootState } from "./../store";
import * as ContactSlice from "../features/contact/contactSlice";
import { Footer } from "../footer/Footer";


export const Contact = (): JSX.Element => {
	const email = useRef<HTMLInputElement>(null)
	const msg = useRef<HTMLTextAreaElement>(null)
	const dispatch = useAppDispatch();
	const status = useAppSelector((state: RootState) => state.contact.status);

	function validEmail() {
		return Validation("email", email.current!.parentNode, email.current!.value);
	}

	function validMsg() {
		return Validation("emptyString", msg.current!.parentNode, msg.current!.value);
	}

	function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): void {
		e.preventDefault()

		let valid = [
			validEmail(),
			validMsg()
		].filter((v) => !v);

		if (valid.length === 0) {
			let data: any = {
				email: email.current!.value,
				msg: msg.current!.value
			}
			dispatch(ContactSlice.postData(data));

			msg.current!.value = "";
		}
	}

	return (
		<>
			<Nav />
			<div className="layout1">
				<h2 className="fluid-h2">Send me a message!</h2>

				<form onSubmit={handleSubmit}>
					<Input
						innerRef={email}
						id={"email"}
						label={"Email"}
						type="text"
						onBlur={validEmail}
					/>

					<Textarea
						onBlur={validMsg}
						innerRef={msg}
						id={"msg"}
						label={"Message"}
					/>

					<Button
						type={"submit"}
						className={'noselect snail green'}
						title={"Send"}
						ariaLabel={"Send"}
						text={"Send"}
						disabled={status === "loading"}
					/>
				</form>

				{ status === "loading" && (
					<div className="custom-msg">Sending...</div>
				)}

				{ status === "done" && (
					<div className="custom-msg">Message sent :)</div>
				)}

				{ status === "error" && (
					<div className="custom-msg" >Ups.. :(</div>
				)}

			</div>
			<Footer />
		</>
	);
}
