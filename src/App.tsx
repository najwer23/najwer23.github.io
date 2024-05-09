import { RouterHash } from './router/RouterHash';

import { MenuAside } from "najwer23storybook/lib/MenuAside";

import styles from './App.module.css'
import { MENU_ASIDE } from './App.const';

export const App = () => (
	<div className={styles.container}>

		<div className={styles.asideMenu}>
			<MenuAside {...MENU_ASIDE} />
		</div>

		<div className={styles.routeDiv}>
			<RouterHash />
		</div>

	</div>
)