import { Text } from "najwer23storybook/lib/Text";
import styles from './index.module.css'
import { GridMasonry } from "najwer23storybook/lib/GridMasonry";
import { GalleryPic } from "./GalleryPic";
import { GALLERY } from "./Gallery.const";

// https://imgbb.com/
export const Gallery = () => {
	return <div className={styles.gallery}>
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
		}} >

			{ GALLERY &&
				GALLERY.map(({ src, alt, ar}, id) => (
					<GalleryPic src={src} alt={alt} key={id} ar={ar}/>
				))}

		</GridMasonry>
	</div>
}