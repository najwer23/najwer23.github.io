let projectArrOfObj = [
  {
    title: "Custom scrollbar with JavaScript",
    desc: "The same scrollbar on every page",
    lan: "HTML, CSS3, JavaScript",
    link: "https://najwer23.github.io/scrollbar/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Infinite pure JavaScript carousel (click and touch events)",
    desc: "Netflix carousel",
    lan: "HTML, CSS3, JavaScript",
    link: "https://najwer23.github.io/carousel/",
    lanColor: "#D9BA5F",
  },

  {
    title:
      "The traveling salesman problem with Simulated Annealing. Euclidean distance (2021)",
    desc: "The traveling salesman problem is a classic problem in combinatorial optimization.This problem is to find the shortest path that a salesman should take to traverse through a list of cities and return to the origin city.The list of cities and the distance between each pair are provided. Simulated annealing(SA) is a probabilistic technique for approximating the global optimum of a given function.",
    lan: "HTML, CSS3, JavaScript, Canvas, Webpack, Babel",
    link: "https://najwer23.github.io/tsp/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Reed Solomon algorithm BCH: encoder, decoder (2021)",
    desc: "Reed–Solomon codes are a group of error-correcting codes that were introduced by Irving S. Reed and Gustave Solomon in 1960. They have many applications, the most prominent of which include consumer technologies such as MiniDiscs, CDs, DVDs, Blu-ray discs, QR codes, data transmission technologies such as DSL and WiMAX, broadcast systems such as satellite communications, DVB and ATSC, storage systems such as RAID 6, coding schemes used by NASA missions.",
    lan: "HTML, CSS3, JavaScript, Webpack, Babel",
    link: "https://najwer23.github.io/bch-code-js/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Numerical integration (2021)",
    desc: "Monte Carlo Integration, Rectangle rule Integration, Trapezoidal rule Integration, Graph of a function of one variable",
    lan: "HTML, CSS3, JavaScript Chart.js, Webpack, Babel",
    link: "https://najwer23.github.io/chart/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Coffee4u (2021)",
    desc: "Website for a cafe with the possibility of checking coffee prices",
    lan: "HTML, CSS3, JavaScript, React.js (ES6, JSX, class-inheritance, events, route, hooks, Masonry Layout, Leaflet)",
    link: "https://coffee4u.herokuapp.com/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Antoni Gaudi (2021)",
    desc: "Website about Antoni Gaudi",
    lan: "Symfony5, Twig, webpack, JavaScript, HTML, CSS3, Leaflet",
    link: "https://antoni-gaudi.herokuapp.com/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Blackjack (2020)",
    desc: "A card game the object of which is to be dealt cards having a higher count than those of the dealer up to but not exceeding 21",
    lan: "JavaScript HTML, CSS3, JSON",
    link: "https://najwer23.github.io/blackjack/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Aktywni w Sporcie (2020)",
    desc: "A web application that allows you to buy sports insurance",
    lan: "HTML5, CSS3, Freemarker, GIT, JavaScript (jQuery, Gulp.js, Node.js), Groovy, SQL",
    link: "https://portal.tueuropa.pl/frontend/products/showProduct.html?prodId=2031&su=10000&lu=1&us=bieganie_grupa_1&o_ochrony=90",
    lanColor: "#D9BA5F",
  },

  {
    title: "WebSocket with Symfony5 - simply chat (2020)",
    desc: "I am using websocket to make a 2-way chat with new Symfony 5.",
    lan: "Symfony5, JavaScript",
    link: "https://github.com/najwer23/symfony-5-websocket",
    lanColor: "#D9BA5F",
  },

  {
    title: "Custom video player (2020)",
    desc: "",
    lan: "JavaScript",
    link: "https://najwer23.github.io/video-player/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Fullscreen slider (2019)",
    desc: "Looping slider with photos",
    lan: "JavaScript",
    link: "https://najwer23.github.io/fullscreen-slider/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Fancy Calendar (2019)",
    desc: "Custom calendar that only requires 6 steps to select a date. A new idea for standard calendars",
    lan: "JavaScript",
    link: "https://najwer23.github.io/fancy-calendar/",
    lanColor: "#D9BA5F",
  },

  {
    title: "RSA and ElGamal algorithm (2019)",
    desc: "Asymmetric cryptography, also known as public-key cryptography, is a process that uses a pair of related keys one public key and one private key to encrypt and decrypt a message and protect it from unauthorized access or use. A public key is a cryptographic key that can be used by any person to encrypt a message so that it can only be deciphered by the intended recipient with their private key. A private key also known as a secret key is shared only with key's initiator. Main problem of this task is represent big Prime Numbers and making operations of this numbers. Binary number with U2 format (operations * / - +), Miller-Rabin test, Extended Euclidean algorithm, private and public key",
    lan: "C#",
    link: "https://github.com/najwer23/binary-rsa",
    lanColor: "#D9BA5F",
  },

  {
    title: "TCP / IP multiplayer communicator (2018)",
    desc: "Writing a chat application with popular web applications stacks like LAMP (PHP) has traditionally been very hard. It involves polling the server for changes, keeping track of timestamps, and it’s a lot slower than it should be. Sockets have traditionally been the solution around which most realtime chat systems are architected, providing a bi-directional communication channel between a client and a server. This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.",
    lan: "NodeJS (express), Socket.io, Diffie Hellman algorithm, JSON",
    link: "https://github.com/najwer23/chat-with-encrypted-messages",
    lanColor: "#D9BA5F",
  },

  {
    title: "Simply CMS for Blog (2018)",
    desc: "I solved the problem of content management on blog pages. Own paging mechanism and sql database",
    lan: "Symfony4, Twig, Ajax, JSON, jQuery, SQL, JavaScript",
    link: "https://my23.000webhostapp.com/",
    lanColor: "#D9BA5F",
  },

  {
    title: "Web App for reservation place to doctor (2018)",
    desc: "A simple application that allows you to book a place with a doctor",
    lan: "Symfony4, Twig, Ajax, JSON, JavaScript, jQuery, SQL",
    link: "https://github.com/najwer23/lekarz",
    lanColor: "#D9BA5F",
  },

  {
    title: "Complex number calculator (2017)",
    desc: "A Complex Number is a combination of a Real Number and an Imaginary Number. e.g. 1+2i. I have implemented possible operations on complex numbers: Polymorphism, Multiplication of 2 numbers, Dividing 2 numbers, Root of a complex number, Power of n-degree of a complex number.",
    lan: "C++",
    link: "https://github.com/najwer23/kalkulator-liczb-zespolonych",
    lanColor: "#D9BA5F",
  },

  {
    title: "Graph algorithms  (2017)",
    desc: "A graph is an abstract notation used to represent the connection between pairs of objects. I have implemented the following algorithms: BFS, Bellman Ford, DFS, Dijkstra, Kruskal, Prim.",
    lan: "C++",
    link: "https://github.com/najwer23/graph-algorithms",
    lanColor: "#D9BA5F",
  },

  {
    title: "The basic astronomical algorithm  (2017)",
    desc: "An algorithm that finds the time of sunset and sunrise.",
    lan: "C++",
    link: "https://github.com/najwer23/astronom",
    lanColor: "#D9BA5F",
  },

  {
    title: "Sorting algorithms (2017)",
    desc: "A sorting algorithm is a method for reorganizing a large number of items into a specific order, such as alphabetical, highest-to-lowest value or shortest-to-longest distance. I have implemented the following algorithms: Bidirectional Bubble Sort, Bubble Sort, Heap Sort, Insertion Sort, Merge Sort, Quick Sort, Selection Sort, Shell Sort, Stupid Bubble Sort.",
    lan: "C++",
    link: "https://github.com/najwer23/sorting-algorithms",
    lanColor: "#D9BA5F",
  },
];

let toolsArrOfObj = [
  {
    title: "Webpack5 with HTML page - starter kit",
    desc: "Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.",
    lan: "",
    link: "https://github.com/najwer23/website-starter-pack",
    lanColor: "#D9BA5F",
  },

  {
    title: "Webpack5 with React.js - starter kit",
    desc: "Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.",
    lan: "",
    link: "https://github.com/najwer23/website-starter-pack-react",
    lanColor: "#D9BA5F",
  },
];

export { projectArrOfObj, toolsArrOfObj };
