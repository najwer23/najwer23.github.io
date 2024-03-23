import { Text } from "najwer23storybook/lib/Text";
import { GridMasonry } from "najwer23storybook/lib/GridMasonry"
import styles from './index.module.css'
import { QuoteCard } from "./QuoteCard";

const QUOTES = [
	{
		quote: "The best way to predict the future is to invent it.",
		author: "Alan Kay",
	},
	{
		quote: "Stay hungry, stay foolish",
		author: "Steve Jobs",
	},
	{
		quote: "Growth and comfort do not coexist.",
		author: "Ginni Rometty",
	},
	{
		quote: "The purpose of software engineering is to control complexity, not to create it.",
		author: "Pamela Zave",
	},
	{
		quote: "If it doesn't work, it doesn't matter how fast it doesn't work.",
		author: "Mich Ravera",
	},
	{
		quote: "What one programmer can do in one month, two programmers can do in two months.",
		author: "Fred Brooks",
	},
	{
		quote: "Computers are good at following instructions, but not at reading your mind.",
		author: "Donald Knuth",
	},
]

export const Quotes = () => {
	return <div className={styles["quotes"]}>
		<Text kind='h2'> Quotes </Text>
		<br />
		<br />
		<GridMasonry gap={{
			col: "20px",
			row: "20px"
		}} col={{
			mobile: 1,
			smallDesktop: 2,
			desktop: 3,
			tablet: 2
		}} >
			{QUOTES &&
				QUOTES.map(({ quote, author }, id) => (
					<QuoteCard quote={quote} author={author} quoteId={id+1} key={id} />
				))}
		</GridMasonry>

	</div>
}