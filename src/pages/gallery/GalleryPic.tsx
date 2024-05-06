import { useEffect, useState } from 'react';
import styles from './index.module.css'

interface Props {
	src: string;
	alt: string;
	ar?: number;
}

const loadImg = (src: string): Promise<string> =>
	new Promise((resolve, reject) => {
		const img = new Image();
		img.src = src;
		img.onload = () => resolve(src);
		img.onerror = () => reject(new Error("could not load image"));
	});

export const GalleryPic = ({ src, alt, ar }: Props) => {
	const [srcImg, setSrcImg] = useState("https://i.ibb.co/PGXfnCw/Bez-tytu-u.jpg");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const load = async () => await loadImg(src).then((src) => setSrcImg(src));
			load();
		}, 200);

		return () => clearTimeout(timeoutId);
	}, [src, setSrcImg]);

	return (
		<div className={styles.galleryPic} style={
			{
				"--n23-img-ar": ar ?? "auto",
			} as React.CSSProperties}
		>
			<img src={srcImg} alt={alt} />
		</div>
	);
}