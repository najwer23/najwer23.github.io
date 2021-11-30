import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faArrowRight, faCopyright, faRegistered, faMailBulk, faFilePdf, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(
    faCheck,
    faCodeBranch, 
    faArrowRight, 
    faCopyright, 
    faRegistered,
    faGithub,
    faTwitter,
    faMailBulk,
    faFilePdf,
    faLinkedin
);
dom.watch();

import { importAll } from '../utils'
importAll(require.context('/src/css', false, /\.(sass|scss|css)$/i));

