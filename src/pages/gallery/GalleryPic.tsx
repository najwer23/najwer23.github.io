import styles from './index.module.css'

interface Props {
	src: string;
	alt: string;
	ar?: number;
}

export const GalleryPic = ({ src, alt, ar }: Props) => {

	return <div className={styles["galleryPic"]} style={
		{
			"--n23-img-ar": ar ?? "auto",
		} as React.CSSProperties}>
		<img src={src} alt={alt} />
	</div>

}