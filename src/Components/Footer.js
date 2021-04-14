import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faRegistered} from '@fortawesome/free-solid-svg-icons'
import '../CSS/Footer.css';

export default function Footer() { 
    
    const objSocialLinks = {
        'https://github.com/najwer23': <FontAwesomeIcon icon={faGithub}  size="2x" />,
        'https://twitter.com/najwer23': <FontAwesomeIcon icon={faTwitter}  size="2x" />,
        'mailto:najwer23@live.com': <FontAwesomeIcon icon={faAt} size="2x" />,
        'https://www.linkedin.com/in/najwer23/': <FontAwesomeIcon icon={faLinkedinIn} size="2x" />,
        'https://najwer23.github.io/documents/pdf/CV_Mariusz_Najwer_PL.pdf': <FontAwesomeIcon icon={faFilePdf} size="2x" />
    }

    return (
        <footer className='foot'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#24272b" fillOpacity="1" d="M0,96L120,80C240,64,480,32,720,21.3C960,11,1200,21,1320,26.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <div className='foot-box'>
                <div className='foot-item flex-columns'>
                    <div className='flex-columns-item'> 
                        Each programmer is a poet at heart 
                        <br /><br />
                        <i>
                        Roses are Red,<br/>
                        Violets are Blue,<br/>
                        Unexpected '&#123;' <br />
                        on line </i><a style={{color: "orange"}} rel="noreferrer" target="_blank" href="https://www.scientificamerican.com/article/for-math-fans-a-hitchhikers-guide-to-the-number-42/">42</a>
                    </div>
                    <div className='flex-columns-item foot-social'>
                        {Object.keys(objSocialLinks).map((v,i)=>(
                            <a key={i} href={v} rel="noreferrer" target="_blank">
                                <div className='foot-social-item'>
                                    {objSocialLinks[v]}
                                </div>
                            </a>
                        ))}                    
                    </div>
                </div>
                <div className='foot-item'>
                    <FontAwesomeIcon icon={faCopyright}  size="1x" /> Mariusz Najwer 2021
                </div>
                <div className='foot-item'>
                    <FontAwesomeIcon icon={faRegistered}  size="1x" /> najwer23.github.io
                </div>
            </div>
        </footer>
    )
}


