import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import styles from './index.module.css'
import { useFetch } from "../../hooks/useFetch";
import { Input } from "najwer23storybook/lib/Input";
import { Textarea } from "najwer23storybook/lib/Textarea";
import { Button } from "najwer23storybook/lib/Button";
import { Text } from "najwer23storybook/lib/Text";


export const Contact = (): JSX.Element => {
	const [form, setForm] = useState<{ [key: string]: boolean }>({})
	const [showMsg, setShowMsg] = useState<boolean>(false)
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

	useEffect(() => {
		if (status === "done") {
			setShowMsg(true)

			const timeId = setTimeout(() => {
				setShowMsg(false)
			}, 3000)

			return () => clearTimeout(timeId)
		}
	}, [status]);

	function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>): void {
		e.preventDefault();

		let focusCheck = [
			email.current,
			msg.current
		];

		let skip = false;
		focusCheck.map(v => {
			if (((form[v!.name]) || (form[v!.name] === undefined)) && !skip) {
				v!.focus();
				skip = true;
			}
		})
		if (skip) return;

		if (Object.values(form).filter((v) => v).length === 0) {
			if (executeFetch) {
				let body = {
					email: email.current!.value,
					msg: msg.current!.value
				}
				executeFetch(body)
			}

			msg.current!.value = "";
			setForm({ ...form, [msg.current!.name]: true });
		}
	}

	const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>, isError: boolean) => {
		setForm({ ...form, [e.target.name]: isError });
	}

	return (
		<div className={styles["contact"]}>
			<Text kind='h2'> Contact </Text>

			<form onSubmit={handleSubmit}>

				<br />

				<div className={styles["customInputWrapper"]}>
					<Input
						innerRef={email}
						errorOptions={{
							empty: true,
							email: true
						}}
						label="Email"
						name="email"
						onBlur={(e, isError) => handleBlur(e, isError)}
						type="text"
					/>
				</div>

				<div className={styles["customInputWrapper"]}>
					<Textarea
						innerRef={msg}
						errorOptions={{
							empty: true
						}}
						label="Message"
						name="msg"
						onBlur={(e, isError) => handleBlur(e, isError)}
					/>
				</div>

				<Button
					type={"submit"}
					text={"Send"}
					ariaLabel={"Send msg"}
					disabled={status === "loading"}
				/>
			</form>

			{status === "loading" && (
				<div style={{ marginTop: "10px" }}>
					<FontAwesomeIcon icon={faSpinner} color={"black"} spinPulse size="1x" />
					{" "} Loading..
				</div>
			)}

			{status === "done" && showMsg && (
				<div style={{ marginTop: "10px" }}>
					Email sent :)
				</div>
			)}

		</div>
	)
}