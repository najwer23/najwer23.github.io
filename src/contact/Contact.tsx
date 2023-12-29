import { useRef } from "react"
import { Input } from "../inputs/Input"
import { Textarea } from "../inputs/Textarea"
import { ContactStyled, FormContact } from "./Contact.styled"
import { Validation } from "../validation/Validation"
import { useFetch } from "../hooks/useFetch"
import { Form } from "../inputs/Forms.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Button } from "najwer23storybook/lib/Button";

export const Contact = (): JSX.Element => {
	const email = useRef<HTMLInputElement>(null)
	const msg = useRef<HTMLTextAreaElement>(null)

	const { status, executeFetch } = useFetch<any>("https://zany-ray-bonnet.cyclic.app/najwer23api/contact-me", {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json",
		}
	},
		false
	)

	console.log(status)

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
			if (executeFetch) {
				let body: any = {
					email: email.current!.value,
					msg: msg.current!.value
				}
				executeFetch(body)
			}

			msg.current!.value = "";
		}
	}

	return (
		<ContactStyled>
			<h1>Contact </h1>

			<FormContact>
				<Form onSubmit={handleSubmit}>
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
						text={"Send"}
						ariaLabel={"Send msg"}
						disabled={status === "loading"}
					/>
				</Form>
			</FormContact>

			{status === "loading" && (
				<div style={{ marginTop: "10px" }}>
					<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="1x" />
					{" "} Loading..
				</div>
			)}

			{status === "done" && (
				<div style={{ marginTop: "10px" }}>
					Email sent :)
				</div>
			)}

		</ContactStyled>
	)
}