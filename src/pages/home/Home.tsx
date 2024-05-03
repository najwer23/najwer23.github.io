import { TopNav } from '../../components/topNav/TopNav'
import styles from './index.module.css'

import { Text } from "najwer23storybook/lib/Text";
import { Marquee } from "najwer23storybook/lib/Marquee";
import { HomeSocialMedia } from './HomeSocialMedia';
import { MARQUEE_TECH } from './Home.const';

export const Home = () => {
	return (
		<>
			<TopNav />
			<div className={styles["homeContent"]}>
				<Text kind='h1'> Mariusz Najwer </Text>
				<div className={styles["homeContentText2"]}>Frontend Software Engineer</div>

				<HomeSocialMedia />

				<div className={styles["pageLinks"]} >
					<a href='/#/contact'>Contact</a> <b>/</b>
					<a href='/#/weather'>Weather</a>
				</div>
			</div>


			<div className={styles["deathlyHallows"]} >
				<div className={styles["veil"]}>
					<div className={styles["stone"]}></div>
					<div className={styles["wand"]}></div>
				</div>
			</div>

			<div className={[styles["homeContent"], styles["last"]].join(' ')}>
				<Text kind='h2'>
					What is a Frontend Software Engineer?
				</Text>
				<Text kind='p'>
					A frontend software engineer is a professional who focuses on the user-facing side of software, working on everything that users see and interact with while using an application. They are responsible for creating platforms that are visually appealing, easy to use, and meet the client or company's needs. Their work involves aspects such as functionality, layout, speed, and user experience. Frontend engineers typically plan, design, build, and implement the user interface systems of websites, software programs, and web-based applications. They are also known as front-end developers and are considered software engineers who specialize in website and web application design using technologies such as HTML, CSS, and JavaScript. This role requires a combination of coding and creativity, making it suitable for those interested in technology and design.
				</Text>

				<br />
				<Text kind='h3'>
					Why should You hire me?
				</Text>
				<Text kind='p'>
					<b>Detail-oriented:</b> I pay attention to the details to ensure a flawless user interface and experience.
				</Text>
				<Text kind='p'>
					<b>Adaptability and thirst for learning:</b> I have the ability to adapt to new technologies and a strong desire to constantly learn due to the constantly evolving nature of Internet technologies.
				</Text>
				<Text kind='p'>
					<b>Strong technical skills:</b> Proficiency in JavaScript, Typescript, React and Angular, which allows me to achieve success in frontend development.
				</Text>
				<Text kind='p'>
					<b>Soft skills:</b> I believe that effective communication, teamwork and a positive attitude are important for collaborating with other team members and understanding the client's requirements.
				</Text>
				<Text kind='p'>
					<b>Problem-solving mindset:</b> It helps me identify challenges, develop solutions and take appropriate action. Instead of focusing on the negative side of a problem, I try to find a creative solution.
				</Text>

				<br />
				<Text kind='h3'>
					Technologies I use!
				</Text>
				<br />
				<br />
				<Marquee>
					<>
						{MARQUEE_TECH &&
							MARQUEE_TECH.map(({ src, alt }) => (
								<div key={alt}>
									<img src={`marquee/${src}`} alt={alt} width={150} height={150} loading="lazy" />
								</div>
							))}
					</>
				</Marquee>
			</div>

		</>
	)

}