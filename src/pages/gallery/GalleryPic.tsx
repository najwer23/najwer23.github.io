import { useState } from 'react';
import styles from './index.module.css'

interface Props {
	src: string;
	alt: string;
	ar?: number;
}

export const GalleryPic = ({ src, alt, ar }: Props) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className={`${styles.galleryPic} ${loaded && styles.loaded}`} style={
			{
				"--n23-img-ar": ar ?? "auto",
			} as React.CSSProperties}
		>
			<img src={src} alt={alt} loading='lazy' onLoad={() => setLoaded(true)} />
		</div>
	);
}