import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/Content.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { faCalendarCheck, faDesktop, faHeart, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {Pie} from 'react-chartjs-2';

function InitAOS () {
    useEffect(() => {
        Aos.init({duration: 1500});
    }, []);    
}

function Content() {
    return ([
        <About />,
        <Skills />,
        <Projects />,
        <Hobby />
    ])
}

function About() {   
    InitAOS()

    const objSocialLinks = {
        'https://github.com/najwer23': <FontAwesomeIcon icon={faGithub} style={{color: "black"}}  size="2x" />,
        'https://twitter.com/najwer23': <FontAwesomeIcon icon={faTwitter}  style={{color: "#1DA1F2"}} size="2x" />,
        'https://www.linkedin.com/in/najwer23/': <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#0e76a8"}} size="2x" />,
        'https://najwer23.github.io/documents/pdf/CV_Mariusz_Najwer_PL.pdf': <FontAwesomeIcon icon={faFilePdf} style={{color: "#EC2126"}} size="2x" />,
    }
        
    const arr = [
        <p><FontAwesomeIcon style={{color: "orange"}} icon={faDesktop} size="1x" /> Programmer / Web Developer</p>,
        <p><FontAwesomeIcon style={{color: "tomato"}} icon={faHeart} size="1x" /> Love cakes </p>,
        <> 
            <p>Wrocław University of Science and Technology</p>
            <p><strong>Master of Science</strong>, Computer Science</p>
            <p><FontAwesomeIcon style={{color: "orange"}} icon={faCalendarCheck} size="1x" /> 1.02.2018 – 25.07.2019</p>
            <p><i>Research and comparative study of relational and non-relational database systems</i></p>      
        </>,
        <> 
            <p>Wrocław University of Science and Technology</p>
            <p><strong>Bachelor of Science</strong>, Control Engineering and Robotics</p>
            <p><FontAwesomeIcon style={{color: "orange"}} icon={faCalendarCheck} size="1x" /> 1.10.2014 – 19.01.2018</p>
            <p><i>Web application supporting online booking system</i></p>
        </>,
        <>  
            <address style={{display: "block", textAlign: "left!important"}}>
                <a href="mailto:najwer23@live.com">najwer23@live.com</a><br />
            </address>
        </>, 
        <div className="socialAbout"> 
            {Object.keys(objSocialLinks).map((v,i)=>(
                <a key={i} href={v} rel="noreferrer" target="_blank">
                    {objSocialLinks[v]}
                </a>
            ))} 
        </div>
    ]

    return (
        <section id="about" className='content-section'>
            <header style={{marginBottom: "20px", paddingTop: "0"}} data-aos="zoom-in-up">About</header>
            <ResponsiveMasonry className='wrapper-adv-m-c' columnsCountBreakPoints={{400: 1, 700: 2}}>
                <Masonry columnsCount={2}>
                    {arr.map((v,i)=> (<div data-aos="zoom-in-up" className="adv-m-c" key={i.toString()}>{v} </div>))} 
                </Masonry>  
            </ResponsiveMasonry>  
        </section> 
    )
}

function Skills() {   
    InitAOS()
    const arrSkills = [
        'HTML5 CSS3 LESS SASS',
        ' JAVASCRIPT JQUERY REACT',
        'JSON XML FREEMARKER TWIG',
        'YARN NPM WEBPACK BABEL',
        'CHARTJS LEAFLETJS WEBSOCKET',
        'SYMFONY5 PHP7 PHPUNIT ',
        'DOCTRINE NOSQL SQL',
        'C C++ C# MATLAB GIT',
        'LINUX AWS GROOVY',
        'CRYPTO ALGORITHMS',
    ]
    return (
        <section id="skills" className="content-section">
            <header style={{marginBottom: "50px"}}  data-aos="zoom-in-up">Skills</header>
            <img data-aos="zoom-in-up" className='content-img' src={`${process.env.PUBLIC_URL}/assets/images/undraw_percentages.svg`} alt="img about"/>
            <div className='boxLetters'>
                {arrSkills.map((v,i)=><div data-aos="zoom-in-up" key={i.toString()} className='letters'>{v}</div>)}                
            </div>
        </section> 
    )
}

function Projects() {   
    InitAOS(); 

    let objProjects = [
        {
            'title': 'Porfolio',
            'desc': 'You are here!',
            'lan': 'HTML5, CSS3, JavaScript (ReactJS)',
            'link': '/'
        },
        {
            'title': 'Antoni Gaudi (2021)',
            'desc': 'Main problem: Masonry Layout',
            'lan': 'Symfony5, Twig, webpack, JavaScript, HTML, CSS3, Leaflet',
            'link': 'https://antoni-gaudi.herokuapp.com/'
        },
        {
            'title': 'Blackjack (2020)',
            'desc': '',
            'lan': 'JavaScript HTML, CSS3, JSON',
            'link': 'https://najwer23.github.io/blackjack/'
        },
        {
            'title': 'Aktywni w Sporcie (2020)',
            'desc': 'Commercial product',
            'lan': 'HTML5, CSS3, Freemarker, GIT, JavaScript (jQuery, Gulp.js, Node.js), Groovy, SQL',
            'link': 'https://portal.tueuropa.pl/frontend/products/showProduct.html?prodId=2031&su=10000&lu=1&us=bieganie_grupa_1&o_ochrony=90'
        },
        {
            'title': 'WebSocket with Symfony5 - simply chat (2020)',
            'desc': '',
            'lan': 'Symfony5, JavaScript',
            'link': 'https://github.com/najwer23/symfony-5-websocket'
        },
        {
            'title': 'Custom video player (2020)',
            'desc': '',
            'lan': 'JavaScript',
            'link': 'https://najwer23.github.io/video-player/'
        },
        {
            'title': 'Fullscreen slider (2019)',
            'desc': '',
            'lan': 'JavaScript',
            'link': 'https://najwer23.github.io/fullscreen-slider/'
        },
        {
            'title': 'Fancy Calendar (2019)',
            'desc': 'Strange calendar - less than 6 steps for choice date!',
            'lan': 'JavaScript',
            'link': 'https://najwer23.github.io/fancy-calendar/'
        },
        {
            'title': 'RSA and ElGamal algorithm (2019)',
            'desc': 'Binary number with U2 format (operations * / - +), Miller-Rabin test, Extended Euclidean algorithm, private and public key',
            'lan': "C#",
            'link': 'https://github.com/najwer23/binary-rsa'
        },
        {
            'title': 'Binary Bose–Chaudhuri–Hocquenghem code (2019)',
            'desc': 'I had a lot of fun with this badass',
            'lan': "Matlab",
            'link': 'https://github.com/najwer23/bch-code'
        },
        {
            'title': 'TCP / IP multiplayer communicator (2018)',
            'desc': 'Writing a chat application with popular web applications stacks like LAMP (PHP) has traditionally been very hard. It involves polling the server for changes, keeping track of timestamps, and it’s a lot slower than it should be. Sockets have traditionally been the solution around which most realtime chat systems are architected, providing a bi-directional communication channel between a client and a server. This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.',
            'lan': "NodeJS (express), Socket.io, Diffie Hellman algorithm, JSON",
            'link': 'https://github.com/najwer23/chat-with-encrypted-messages'
        },
        {
            'title': 'Simply CMS for Blog (2018)',
            'desc': '',
            'lan': "Symfony4, Twig, Ajax, JSON, jQuery, SQL, JavaScript",
            'link': 'https://my23.000webhostapp.com/'
        },
        {
            'title': 'Web App for reservation place to doctor (2018)',
            'desc': '',
            'lan': "Symfony4, Twig, Ajax, JSON, JavaScript, jQuery, SQL",
            'link': 'https://github.com/najwer23/lekarz'
        },
        {
            'title': 'Complex number calculator (2017)',
            'desc': 'Polymorphism, Multiplication of 2 numbers, Dividing 2 numbers, Root of a complex number, Power of n-degree of a complex number.',
            'lan': "C++",
            'link': 'https://github.com/najwer23/kalkulator-liczb-zespolonych'
        },
        {
            'title': 'Graph algorithms  (2017)',
            'desc': 'BFS, Bellman Ford, DFS, Dijkstra, Kruskal, Prim.',
            'lan': "C++",
            'link': 'https://github.com/najwer23/graph-algorithms'
        },
        {
            'title': 'The basic astronomical algorithm  (2017)',
            'desc': 'An algorithm that finds the time of sunset and sunrise.',
            'lan': "C++",
            'link': 'https://github.com/najwer23/astronom'
        },
        {
            'title': 'Sorting algorithms (2017)',
            'desc': 'Bidirectional Bubble Sort, Bubble Sort, Heap Sort, Insertion Sort, Merge Sort, Quick Sort, Selection Sort, Shell Sort, Stupid Bubble Sort.',
            'lan': "C++",
            'link': 'https://github.com/najwer23/sorting-algorithms'
        }
    ];

    return (
        <section id="projects" className="content-section">
            <header style={{marginBottom: "50px"}}  data-aos="zoom-in-up">Projects</header>
            <img data-aos="zoom-in-up" className='content-img' src={`${process.env.PUBLIC_URL}/assets/images/undraw_freelancer.svg`} alt="img about"/>
        
            <ul className="projects-timeline">
                {objProjects.map((x,i) => (
                    <li data-aos="zoom-in-up" key={i.toString()} >
                        <strong> {x.title} </strong><br />
                        {x.lan} <br /> <br />
                        <i> {x.desc} </i> <br />
                        <br />
                        <div className="projects-timeline-btn"> 
                            <a href={x.link} rel="noreferrer" target="_blank">
                                <div className='btn wave'>Check out!</div>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </section> 
    )
}



function Hobby() {   
    const state = {
        labels: ['Sky', 'Shady side of pyramid', 'Sunny side of pyramid'],
        datasets: [
            {
                backgroundColor: [
                    '#7ECEFC',
                    '#BE5B06',
                    '#F3C12A'
                ],
                hoverBackgroundColor: [
                    '#237AB0',
                    '#D64804',
                    '#DB981A'
                ],
                data: [70, 10, 20]
            }
        ]
    }
   
    return (
        <section id="hobby" className="content-section">
            <header style={{marginBottom: "50px"}} >I do like charts</header>
            <div>
            <Pie
                data={state}
                options={{
                    legend:{
                        display:true,
                        position:'bottom'
                    },
                    rotation: 2.4  
                }}
            />

            </div>
        </section> 
    )
}

export default Content;


