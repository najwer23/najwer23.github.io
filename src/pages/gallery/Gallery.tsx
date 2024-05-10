import { Text } from "najwer23storybook/lib/Text";
import { GridMasonry } from "najwer23storybook/lib/GridMasonry";
import { GALLERY } from "./Gallery.const";
import { Container } from "najwer23storybook/lib/Container";
import { useState } from "react";
import { Footer } from "najwer23storybook/lib/Footer";
import { Picture } from "najwer23storybook/lib/Picture";

// https://imgbb.com/
export const Gallery = () => {
	const [isLoadEnd, setIsLoadEnd]= useState(false)

	return <Container kind="section">
		<Text kind='h2'> Gallery </Text>
		<Text kind='p'>Wherever you go, go with all your heart</Text>
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
		}}
			onGridMasonryLoadEnd={(v) => setIsLoadEnd(v)}
		>
			{ GALLERY &&
				GALLERY.map(({ src, alt, ar}, id) => (
					<Picture src={src} alt={alt} key={id} ar={ar} kind="border"/>
				))}
		</GridMasonry>
		{isLoadEnd && <Footer />}
	</Container>
}