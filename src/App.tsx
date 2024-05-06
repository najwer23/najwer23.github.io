import { RouterHash } from './router/RouterHash';

import { MenuAside } from "najwer23storybook/lib/MenuAside";
import { Footer } from "najwer23storybook/lib/Footer";

import styles from './App.module.css'
import { MENU_ASIDE } from './App.const';

export const App = () => {
	return (
		<div className={styles.container}>

			<div className={styles.asideMenu}>
				<MenuAside {...MENU_ASIDE} />
			</div>

			<div className={styles.routeDiv}>
				<RouterHash />
				<Footer />
			</div>

		</div>
	)
}