import { Nav } from './Nav/Nav'

import { Text } from "najwer23storybook/lib/Text";
import { Container } from "najwer23storybook/lib/Container";
import { HomeSocialMedia } from './HomeSocialMedia';

export const Home = () => {
	return (
		<Container kind='main'>
			<Nav />
			<Container kind="homeContent">
				<Text kind='h1'> Mariusz Najwer </Text>
				<Text kind='pSubTitle'> Frontend Software Engineer </Text>
				<HomeSocialMedia />
				<Text kind='p'><i>„Great web design without functionality is like a sports car with no engine.”</i></Text>
			</Container>
		</Container>
	)

}