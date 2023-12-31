import { InputHTMLAttributes } from "react";
import styles from './index.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    innerRef: React.RefObject<HTMLInputElement>;
    type: string;
    onBlur?: (e: React.FocusEvent<HTMLElement>) => void;
}


export const Input = ({ id, label, innerRef, type, onBlur }: InputProps): JSX.Element => {

    function handleBlur(e: React.FocusEvent<HTMLElement>): void {
        if (onBlur !== undefined) {
            onBlur(e);
        }
    }

    return (
        <>
            <div className={styles["inputWithLabel"]}>
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