import styles from './index.module.css'
import { Text } from "najwer23storybook/lib/Text";

interface Props {
	quote: string;
	author: string;
	quoteId: number;
}

export const QuoteCard = ({ quote, author, quoteId }: Props) => {

	return <div className={styles.quoteCard} >
		<span className={styles.quoteCardId}>#{quoteId}</span>
		<Text kind="p"> {quote} </Text>
		<Text kind="pSmallBold"> ~{author} </Text>
	</div>
}