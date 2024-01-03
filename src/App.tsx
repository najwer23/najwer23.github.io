import { MENU_ASIDE } from './consts';
import { RouterHash } from './router/RouterHash';

import { MenuAside } from "najwer23storybook";

import styles from './App.module.css'

export const App = () => {
    return (
        <div className={styles["container"]}>
            
            <div className={styles["asideMenu"]}>
                <MenuAside {...MENU_ASIDE} />
            </div>
            
            <div className={styles["routeDiv"]}>
                <RouterHash />
            </div>
        </div>
    )
}