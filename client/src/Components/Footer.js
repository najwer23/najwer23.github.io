import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import '../CSS/Footer.css';

function Footer() {
    const objSocialLinks = {
        'https://github.com/najwer23': <FontAwesomeIcon icon={faGithub}  size="2x" />,
        'https://twitter.com/najwer23': <FontAwesomeIcon icon={faTwitter}  size="2x" />,
        'mailto:najwer23@live.com': <FontAwesomeIcon icon={faAt} size="2x" />,
        'https://www.linkedin.com/in/najwer23/': <FontAwesomeIcon icon={faLinkedinIn} size="2x" />,
        'https://najwer23.github.io/PDF/CV_PL_Mariusz_Najwer_2019.pdf': <FontAwesomeIcon icon={faFilePdf}  size="2x" />,
    }
    
    return (
        <div className='foot'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#24272b" fill-opacity="1" d="M0,160L6.2,170.7C12.3,181,25,203,37,181.3C49.2,160,62,96,74,101.3C86.2,107,98,181,111,202.7C123.1,224,135,192,148,160C160,128,172,96,185,112C196.9,128,209,192,222,234.7C233.8,277,246,299,258,277.3C270.8,256,283,192,295,176C307.7,160,320,192,332,186.7C344.6,181,357,139,369,106.7C381.5,75,394,53,406,64C418.5,75,431,117,443,112C455.4,107,468,53,480,53.3C492.3,53,505,107,517,117.3C529.2,128,542,96,554,101.3C566.2,107,578,149,591,181.3C603.1,213,615,235,628,234.7C640,235,652,213,665,186.7C676.9,160,689,128,702,101.3C713.8,75,726,53,738,80C750.8,107,763,181,775,192C787.7,203,800,149,812,154.7C824.6,160,837,224,849,213.3C861.5,203,874,117,886,90.7C898.5,64,911,96,923,138.7C935.4,181,948,235,960,256C972.3,277,985,267,997,256C1009.2,245,1022,235,1034,208C1046.2,181,1058,139,1071,133.3C1083.1,128,1095,160,1108,170.7C1120,181,1132,171,1145,154.7C1156.9,139,1169,117,1182,133.3C1193.8,149,1206,203,1218,218.7C1230.8,235,1243,213,1255,197.3C1267.7,181,1280,171,1292,186.7C1304.6,203,1317,245,1329,234.7C1341.5,224,1354,160,1366,160C1378.5,160,1391,224,1403,234.7C1415.4,245,1428,203,1434,181.3L1440,160L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
            <div className='foot-contact'>
                <div className='foot-social'>
                    {Object.keys(objSocialLinks).map((v,i)=>(
                        <a key={i} href={v} rel="noreferrer" target="_blank">
                            <div className='foot-social-item'>
                                {objSocialLinks[v]}
                            </div>
                        </a>
                    ))}                    
                </div>
                <div className='foot-name'> 
                    <FontAwesomeIcon icon={faCopyright}  size="1x" /> Mariusz Najwer <br /> 2021
                 </div>
            </div>
        </div>
    )
}

export default Footer;


