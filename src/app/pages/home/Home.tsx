import { Grid } from 'najwer23morsels/lib/grid';
import { Masonry } from 'najwer23morsels/lib/masonry';
import { Picture } from 'najwer23morsels/lib/picture';
import { Slider } from 'najwer23morsels/lib/slider';
import { SliderScroll } from 'najwer23morsels/lib/sliderscroll';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Home.module.css';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Grid layout="container" widthMax={'1400px'} padding={'clamp(40px, 8vw, 60px) 20px 0px 20px'}>
        <Grid
          layout="flex"
          flexWrap="wrap"
          justifyContent="flexstart"
          alignItems="flexstart"
          widthMax={'1400px'}
          padding={'0 0 20px 0'}
          gap={{ col: '75px', row: '40px' }}
        >
          <div style={{ width: 'min(400px, 100%)' }}>
            <div className={styles.mePicture}>
              <Picture
                figcaption="I byte on both code and class."
                figcaptionColor="grey"
                src={'/me.jpg'}
                alt={'Photo of Mariusz Najwer'}
                ar={1}
                border
                loading="eager"
              ></Picture>
            </div>
          </div>
          <div
            className={styles.meDesc}
            style={{ background: 'white', padding: '40px', boxSizing: 'border-box', borderRadius: '10px' }}
          >
            <Grid layout="container" padding={'0 0 40px 0'} margin={0}>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                Hello, World! 🦄
              </TextBox>
            </Grid>
            <Grid layout="container" widthMax={'800px'} margin={0}>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                I am a passionate and detail-oriented Software Engineer with over 10 years of experience specializing in
                modern <b>JavaScript </b>frameworks like React, Angular, Remix, and Svelte. I excel at translating
                business requirements into technical solutions, delivering high-quality, responsive, and mobile-first
                web applications on time and within budget. Committed to writing clean and maintainable code, I thrive
                in agile environments while effectively collaborating with cross-functional teams and mentoring junior
                developers. I am continuously growing by engaging with the tech community, contributing to open-source
                projects, and staying current with industry best practices. My strong problem-solving skills and clear
                communication allow me to bridge the gap between technical concepts and stakeholder needs efficiently.
              </TextBox>
            </Grid>
            <Grid layout="container" widthMax={'700px'} padding={'40px 0 0px 0'} margin={0}>
              <ul style={{ margin: 0, paddingLeft: 14 }}>
                {[
                  ['github.com/najwer23', 'https://github.com/najwer23'],
                  ['x.com/najwer23', 'https://x.com/najwer23'],
                  ['linkedin.com/in/najwer23', 'https://www.linkedin.com/in/najwer23'],
                  ['npmjs.com/~najwer23', 'https://www.npmjs.com/~najwer23'],
                  ['leetcode.com/u/najwer23', 'https://leetcode.com/u/najwer23'],
                ].map(([text, href]) => (
                  <li key={href}>
                    <TextBox tag="a" desktopSize={18} mobileSize={16} href={href} target="_blank">
                      {text}
                    </TextBox>
                  </li>
                ))}
              </ul>
            </Grid>
          </div>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={'1400px'} padding={'clamp(30px, 8vw, 60px) 20px 20px 20px'}>
        <Grid layout="container" widthMax={'900px'} padding={'0 0 40px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500}>
            The way I work is not an accident.
          </TextBox>
        </Grid>
        <Grid layout="container" widthMax={'700px'} padding={'0 0 clamp(40px, 8vw, 100px) 0'} margin={0}>
          <TextBox tag="p" desktopSize={28} mobileSize={22} fontWeight={400}>
            My approach blends precision, creativity, and relentless focus, ensuring that every project I undertake
            delivers beyond expectations.
          </TextBox>
        </Grid>
      </Grid>
      <Grid layout="container" widthMax={'1360px'} padding={'0'}>
        <div style={{ height: '260px', width: '100%' }}>
          <SliderScroll gap="10px" isCircular autoPlay autoPlaySpeed={0.5}>
            {[
              'Angular',
              'React',
              'Typescript',
              'JavaScript',
              'Node.js',
              'Fastify',
              'CSS',
              'AWS',
              'Next.js',
              'Expo',
              'React Native',
            ].map((v) => (
              <div key={v} className={styles.homeSliderTech}>
                <TextBox tag="p" desktopSize={48} mobileSize={35} fontWeight={400} color="black">
                  {v}
                </TextBox>
              </div>
            ))}
          </SliderScroll>
        </div>
      </Grid>
      <div style={{ background: 'rgb(225, 223, 223)' }}>
        <Grid layout="container" widthMax={'1400px'} padding={'20px 20px 20px 20px'} margin={'120px auto 80px auto'}>
          <Grid layout="container" padding={'60px 0 60px 0'} margin={'0'}>
            <Grid
              layout="columns"
              gap={{ col: '100px', row: '40px' }}
              col={{
                smallDesktop: 2,
                desktop: 2,
                mobile: 1,
                tablet: 2,
              }}
            >
              <>
                {[
                  {
                    title: 'Deliberate Problem-Solving',
                    text: 'I deeply analyze challenges to choose the best fit solutions rather than quick fixes.',
                  },
                  {
                    title: 'Code Quality and Maintainability',
                    text: 'I write clean, readable, well-documented code that is easy to understand and extend.',
                  },
                  {
                    title: 'Continuous Learning and Improvement',
                    text: 'I constantly update my skills to leverage the latest technology advancements.',
                  },
                  {
                    title: 'Collaboration and Communication',
                    text: 'I value open feedback and clear communication to align expectations and drive progress.',
                  },
                  {
                    title: 'User-Centric Design',
                    text: 'I prioritize accessibility and usability to create intuitive user experiences.',
                  },
                  {
                    title: 'Efficiency and Scalability',
                    text: 'I design solutions that are efficient today and scalable for future growth.',
                  },
                ].map(({ title, text }) => (
                  <div key={title}>
                    <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                      {title}
                    </TextBox>
                    <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400} textWrap="pretty">
                      {text}
                    </TextBox>
                  </div>
                ))}
              </>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 0px 20px'}>
        <Grid layout="container" widthMax={'700px'} padding={'0 0 40px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500}>
            Sample projects
          </TextBox>
        </Grid>
      </Grid>
      <Grid layout="container" widthMax={'1360px'} padding={'0 0 0px 0'} className={styles.homeSliderProjects}>
        <div className={styles.homeSliderProjectsWrapper}>
          <Slider
            key={'homeSliderItemsDesktop'}
            isCircular
            slidesConfig={{
              desktop: {
                items: 1,
                slidesToScroll: 1,
              },
              mobile: {
                items: 1,
                slidesToScroll: 1,
              },
              tablet: {
                items: 1,
                slidesToScroll: 1,
              },
            }}
          >
            <div className={styles.homeSliderProjectsPicture}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/77/ff/b4/77ffb4f3c2b432a22e51e25fe7dc255c.jpg"
                arMobile={485 / 681}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/24/d1/e5/24d1e5325c8e3d5b7a0a295f919ea8d4.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of tvn24.pl'}
                loading="eager"
              ></Picture>
            </div>
            <div className={styles.homeSliderProjectsPicture}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/8b/96/df/8b96dfc8a5c03b79263ab93b857e2325.jpg"
                arMobile={481 / 680}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/9b/f6/21/9bf621356954e8629d7e0177fd13fcf1.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of stock quotes, tvn24.pl'}
                loading="eager"
              ></Picture>
            </div>
            <div className={styles.homeSliderProjectsPicture}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/e5/d1/06/e5d106151ca82149c3b7c56cd99a1646.jpg"
                arMobile={197 / 338}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/65/b2/d4/65b2d4d4779a740edb4e5c9b7b95f3d5.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of Restilo'}
                loading="eager"
              ></Picture>
            </div>
            <div className={styles.homeSliderProjectsPicture}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/21/14/c6/2114c62617df7f42b7f0ad6333369423.jpg"
                arMobile={391 / 677}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/ce/81/67/ce8167dae6118358abfa038361209028.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of Europa Ubezpieczenia'}
                loading="eager"
              ></Picture>
            </div>
          </Slider>
        </div>
      </Grid>

      <div>
        <Grid layout="container" widthMax={'1400px'} padding={'20px 20px 20px 20px'} margin={'0px auto 0px auto'}>
          <Grid layout="container" padding={'60px 0 100px 0'} margin={'0'}>
            <Grid
              layout="columns"
              gap={{ col: '40px', row: '40px' }}
              col={{
                smallDesktop: 2,
                desktop: 2,
                mobile: 1,
                tablet: 2,
              }}
            >
              <div style={{ background: 'white', padding: '40px', boxSizing: 'border-box', borderRadius: '10px' }}>
                <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500} margin={'0 0 20px 0'}>
                  APPLIED SYSTEMS INC.
                </TextBox>
                <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400} textWrap="balance">
                  My responsibility was to create a frontend application enabling the purchase of insurance through a
                  website. The application was developed using React.js and TypeScript, leveraging the Applied Systems
                  design system. The primary technical challenge was implementing a recursive Depth-First Search (DFS)
                  algorithm to conditionally render a nested, graph-like structure of questions, where each question’s
                  visibility depended on previous answers. The question data was fetched from the backend as a large
                  JSON payload (around 60,000 lines), structured as a Server Driven UI model. The development was part
                  of a 8-person international team spanning Poland, India, Canada, England, the USA, and Australia. In
                  addition to the core questionnaire, I contributed to building an admin panel, implementing user action
                  tracking scripts, creating statistical charts, and ensuring compliance with WCAG 2.1 AA accessibility
                  standards.
                </TextBox>
              </div>
              <div
                style={{
                  backgroundColor: '#FFF2D5',
                  padding: '40px',
                  boxSizing: 'border-box',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500} margin={'0 0 20px 0'}>
                  WARNER BROS. DISCOVERY, TVN24.pl
                </TextBox>
                <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400} textWrap="balance">
                  My responsibility was to develop a new version of the TVN24.pl website from the ground up using SSR
                  technology. The architecture was inspired by the islands concept popularized by Astro.js, featuring
                  microfrontend applications implemented with React.js and Web Components. As part of the development
                  team, I contributed to building multiple interactive widgets, including stock quotes, weather
                  forecasts, polls, quizzes, election tools, TV program guides, and a custom SSR-based microfrontend
                  rendering algorithm that operates without relying on external libraries.
                </TextBox>

                <Grid
                  layout="flex"
                  widthMin="100%"
                  widthMax="100%"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  minHeight="fit-content"
                  style={{ flexGrow: 1 }}
                >
                  <div style={{ width: '70px', margin: '20px 0 0 0' }}>
                    <Picture
                      src={'https://upload.wikimedia.org/wikipedia/commons/c/c0/Sign_of_the_Deathly_Hallows.svg'}
                      alt={'Deathly Hallows'}
                      ar={259 / 225}
                      loading="eager"
                    ></Picture>
                  </div>
                </Grid>
              </div>

              <div
                style={{
                  backgroundColor: '#FFF2D5',
                  padding: '40px',
                  boxSizing: 'border-box',
                  borderRadius: '10px',
                }}
              >
                <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500} margin={'0 0 20px 0'}>
                  FLHF S.A
                </TextBox>
                <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400} textWrap="balance">
                  My responsibility was to enhance a website initially developed by a software house while
                  simultaneously refreshing its graphic design. The core focus was to develop ecommerce-specific
                  components such as sliders, carousels, product listings, search functionality, and a shopping cart.
                  Key priorities included optimizing for mobile view, improving SEO, descriptive markup and metadata,
                  and enhancing performance metrics such as Cumulative Layout Shift (CLS), page speed, and
                  accessibility, measured and optimized using Lighthouse.
                </TextBox>
              </div>
              <div style={{ background: 'white', padding: '40px', boxSizing: 'border-box', borderRadius: '10px' }}>
                <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500} margin={'0 0 20px 0'}>
                  EUROPA UBEZPIECZENIA
                </TextBox>
                <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400} textWrap="balance">
                  My duty was to maintain and develop an internal system for managing insurance policies. The system was
                  used by insurance agents and office workers. My tasks included creating new modules, integrating
                  external systems (online payments, client data verification, insurance application creation), and
                  optimizing application performance. I worked on both the frontend (Angular) and backend (Java, Groovy,
                  SQL) of the application.
                </TextBox>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style={{ background: '#FFE083' }}>
        <Grid layout="container" widthMax={'1400px'} padding={'20px 20px 20px 20px'} margin={'0px auto 80px auto'}>
          <Grid
            layout="flex"
            widthMax={'1400px'}
            padding={'50px 20px 50px 20px'}
            margin={'auto'}
            justifyContent="center"
            alignItems="center"
          >
            <Grid layout="container" widthMax={'850px'} padding={'40px 0px 20px 0px'}>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500} textAlign="center">
                Have questions or want to collaborate? Feel free to reach out! Click the button below to go to the
                contact form, and I'll get back to you as soon as possible. Let's start a conversation!
              </TextBox>
            </Grid>
          </Grid>

          <Grid
            layout="flex"
            widthMax={'1400px'}
            padding={'0 0 80px 0'}
            margin={'auto'}
            justifyContent="center"
            alignItems="center"
          >
            <Grid layout="container" widthMax={'850px'} padding={'0'}>
              <TextBox
                tag="a"
                href="/#/contact"
                desktopSize={30}
                mobileSize={24}
                fontWeight={800}
                color="black"
                colorHover="black"
              >
                Contact Me
              </TextBox>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <Grid layout="container" widthMax={'1600px'}>
        <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 60px 20px'} minHeight="3000px">
          <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin={'20px 0 40px'} textWrap="balance">
            Travel Snapshots in Pixels
          </TextBox>

          <Masonry
            gap={{
              col: '20px',
              row: '20px',
            }}
            col={{
              mobile: 1,
              smallDesktop: 3,
              desktop: 3,
              tablet: 2,
            }}
            delay={10}
          >
            {[
              {
                src: 'https://i.pinimg.com/originals/6d/a7/bf/6da7bf87e217fa0efe1bfdb290fa162e.jpg',
                alt: 'The Da Vinci Glow',
                ar: 296 / 443,
              },
              {
                src: 'https://i.pinimg.com/originals/26/79/47/267947eeae9cc87f649f427cbf91ac98.jpg',
                alt: 'A Night Sky over the Tatra Mountains..',
                ar: 274 / 301,
              },
              {
                src: 'https://i.pinimg.com/1200x/f9/c0/f0/f9c0f05a0f2b34e887de76158189c79f.jpg',
                alt: 'Pyrenees from an airplane',
                ar: 120 / 161,
              },
              {
                src: 'https://i.pinimg.com/736x/ad/ee/00/adee00c3e14918e042d865545756c0be.jpg',
                alt: 'Basketball museum in Madrid',
                ar: 120 / 161,
              },
              {
                src: 'https://i.pinimg.com/736x/9d/c0/86/9dc0865ba564486c6b206661873a44a5.jpg',
                alt: 'Temple Expiatori de la Sagrada Família',
                ar: 3 / 4,
              },
              {
                src: 'https://i.ibb.co/PxQ2gPG/beach-1236581-1280.jpg',
                alt: 'Let’s have some Margaritas and make some bad decisions!',
                ar: 16 / 9,
              },
              {
                src: 'https://i.ibb.co/HqDCPGd/nature-3279419-1280.jpg',
                alt: 'Meteora in Greece',
                ar: 1280 / 853,
              },
              {
                src: 'https://i.ibb.co/XsgHyx3/guell-park-1157681-1280.jpg',
                alt: 'Park Güell, Barcelona',
                ar: 160 / 83,
              },
              {
                src: 'https://i.ibb.co/8sQ3XdY/avignon-1521541-1280.jpg',
                alt: 'Avinhon, France, Provence-Alpes-Côte d’Azur',
                ar: 16 / 9,
              },
              {
                src: 'https://i.ibb.co/71RfB42/sunset-6007980-1280.jpg',
                alt: 'Lavender in Provence-Alpes-Côte d’Azur, France',
                ar: 1280 / 853,
              },
              {
                src: 'https://i.ibb.co/42tv8k2/great-way-968932-1280.jpg',
                alt: 'Gran Vía nr 1, Madryt',
                ar: 1280 / 853,
              },
              {
                src: 'https://i.ibb.co/WySmVXZ/308961156-649702816779384-5607195473166324459-n.jpg',
                alt: 'Camp Nou, Barcelona',
                ar: 537 / 403,
              },
              {
                src: 'https://i.ibb.co/C5XpQkh/barcelona-2371946-1280.jpg',
                alt: 'Barcelona',
                ar: 16 / 9,
              },
              {
                src: 'https://i.ibb.co/tsCt9tX/el-born-5301517-1280.jpg',
                alt: 'Barcelona',
                ar: 427 / 640,
              },
              {
                src: 'https://i.ibb.co/CKJcN53/santorini-4996901-1280.jpg',
                alt: 'Santorini',
                ar: 1280 / 853,
              },
              {
                src: 'https://i.ibb.co/BLfrW0j/gordes-village-luberon-69-1024x682.jpg',
                alt: 'Gordes, France',
                ar: 512 / 341,
              },
              {
                src: 'https://i.ibb.co/S5PV6qy/2df84435-ce2b-42d1-a9cc-e62e9e914441.webp',
                alt: 'Lisboa',
                ar: 400 / 267,
              },
              {
                src: 'https://i.ibb.co/t8kdHrB/71c30ea8-2b4e-48ba-980b-b222c5dcaa38.webp',
                alt: 'Zlatni Rat, Croatia',
                ar: 800 / 533,
              },
              {
                src: 'https://i.ibb.co/H4Mch3B/barcelona-1545605-640.jpg',
                alt: 'La Pedrera / Casa Milà, Barcelona',
                ar: 121 / 160,
              },
              {
                src: 'https://i.ibb.co/sJxhNVC/quadrant-magic-subirachs-portada-1024x488.jpg',
                alt: 'Magic square, Barcelona',
                ar: 128 / 61,
              },
              {
                src: 'https://i.ibb.co/9tT9wfq/wroclaw-1511660-640.jpg',
                alt: 'Wrocław',
                ar: 128 / 85,
              },
              {
                src: 'https://i.ibb.co/Gs5K4pJ/318467739-179571174674590-2719368099439007366-n.jpg',
                alt: 'Jakuszyce',
                ar: 4 / 3,
              },
            ].map(({ src, alt, ar }, i) => (
              <div key={i}>
                <Picture src={src} alt={alt} key={i} ar={ar} border figcaption={alt} figcaptionColor="grey" />
              </div>
            ))}
          </Masonry>
        </Grid>
      </Grid>
    </>
  );
};
