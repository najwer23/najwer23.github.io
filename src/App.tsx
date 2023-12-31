import { MENU_ASIDE } from './consts';
import { RouterHash } from './router/RouterHash';

import { MenuAside } from "najwer23storybook/lib/MenuAside";

export const App = () => {
    return (
        <div style={{display: "flex", maxWidth: "1920px", margin: "auto"}}>
            
            <div style={{flexShrink: 0 }}>
                <MenuAside {...MENU_ASIDE} />
            </div>
            
            <div style={{ flexGrow: "min(1,2)" }}>
                <RouterHash />
            </div>
        </div>
    )
}