import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Button } from "najwer23storybook/lib/Button";
import styles from './index.module.css'
import { useFetch } from "../../hooks/useFetch";
import { Input } from "./inputs/Input";
import { Textarea } from "./inputs/Textarea";
import { Validation } from "./inputs/Validation";


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
        <div className={styles["contactStyled"]}>
            <h1>Contact </h1>

            <form onSubmit={handleSubmit}>

                <br />
                
                <Input
                    innerRef={email}
                    id={"email"}
                    label={"Email"}
                    type="text"
                    onBlur={validEmail}
                />

                <br />

                <Textarea
                    onBlur={validMsg}
                    innerRef={msg}
                    id={"msg"}
                    label={"Message"}
                />

                <br />

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

            {status === "done" && (
                <div style={{ marginTop: "10px" }}>
                    Email sent :)
                </div>
            )}

        </div>
    )
}