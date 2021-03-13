// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../CSS/RootInfo.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"

function RootInfo() {
    return ([
        <About />,
        <Education />,
        <Skills />,
        <Projects />
    ])
}

function About() {   
    InitAOS()
        
    const aboutCard = [
        'I am a Web Developer!',
        'I am always energetic and eager to learn new skills..',
        'even though I take my work seriously, I do have a good sense of humour!'
    ]

    return (
        <article id="about" className="rootInfo">
            <header data-aos="zoom-in-up"><h1>Hello!</h1></header>
            <img data-aos="zoom-in-up" className='rootImg' src={`${process.env.PUBLIC_URL}/assets/images/undraw_about_me.svg`} alt="img about"/>
            <div className='cardBox'>
                {aboutCard.map((v,i)=><div data-aos="zoom-in-up" key={i.toString()} className='card card-2'><p>{v}</p></div>)}
            </div>
        </article> 
    )
}

function InitAOS () {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);    
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
        <article id='projects' className="rootInfo">
            <header data-aos="zoom-in-up"><h1>Projects</h1></header>
            <img data-aos="zoom-in-up" className='rootImg' src={`${process.env.PUBLIC_URL}/assets/images/undraw_freelancer.svg`} alt="img about"/>
        
            <ul className="projects-timeline">
                {objProjects.map((x,i) => (
                    <li data-aos="zoom-in-up" key={i.toString()} >
                        <strong> {x.title} </strong><br />
                        {x.lan} <br /> <br />
                        <i> {x.desc} </i> <br />
                        <br />
                        <a href={x.link} rel="noreferrer" target="_blank">
                            <div className='btn wave'>Check out!</div>
                        </a>
                    </li>
                ))}
            </ul>
           
        </article> 
    )
}



function Skills() {   
    InitAOS()
    const arrSkills = [
        'HTML5 CSS3 LESS SASS,',
        'JAVASCRIPT JQUERY,',
        'AJAX JSON XML YARN NPM,',
        'SYMFONY5 PHP7 TWIG,',
        'DOCTRINE SQL PHPUNIT,',
        'BOOTSTRAP NOSQL GIT,',
        'C C++ C# MATLAB SCRUM,',
        'LINUX AWS GROOVY,',
        'CRYPTO ALGORITHMS.',
    ]
    return (
        <article id="skills" className="rootInfo">
            <header data-aos="zoom-in-up"><h1>Skills</h1></header>
            <img data-aos="zoom-in-up" className='rootImg' src={`${process.env.PUBLIC_URL}/assets/images/undraw_percentages.svg`} alt="img about"/>
            <div className='boxLetters'>
                {arrSkills.map((v,i)=><div data-aos="zoom-in-up" key={i.toString()} className='letters'>{v}</div>)}                
            </div>
        </article> 
    )
}

function Education() {  
    InitAOS()
    return (
        <article id="education" className="rootInfo">
            <header data-aos="zoom-in-up"><h1>Education</h1></header>
            <div data-aos="zoom-in-up" className="uni">
                <p>Wrocław University of Science and Technology<br />
                   <b><u>Master of Science</u></b> - Computer Science, <br />
                   1.02.2018 – 25.07.2019 <br /><br />
                   <b>Thesis: </b><i>Research and comparative study of relational and non-relational database systems</i></p>
                <br />
                ***
            </div>
            <div data-aos="zoom-in-up" className="uni">
                <p>Wrocław University of Science and Technology<br />
                    <b><u>Bachelor of Science</u></b> - Control Engineering and Robotics, <br />
                   1.10.2014 – 19.01.2018 <br /><br />
                   <b>Thesis: </b><i>Web application supporting online booking system</i></p>
            </div>
        </article> 
    )
}

export default RootInfo;


