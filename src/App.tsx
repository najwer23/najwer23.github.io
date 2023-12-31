import { MENU_ASIDE } from './consts';
import { RouterHash } from './router/RouterHash';

import { MenuAside } from "najwer23storybook/lib/MenuAside";

export const App = () => {
    return (
        <div style={{display: "flex"}}>
            
            <div style={{flexShrink: 0}}>
                <MenuAside {...MENU_ASIDE} />
            </div>
            
            <RouterHash />
        </div>
    )
}