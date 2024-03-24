import styles from './index.module.css'

interface Props {
	src: string;
	alt: string;
}

export const GalleryPic = ({ src, alt }: Props) => {

	return <div className={styles["galleryPic"]}>
		<img src={src} alt={alt} />
	</div>

}