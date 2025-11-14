import { Grid } from 'najwer23morsels/lib/grid';
import { Slider } from 'najwer23morsels/lib/slider';
import { SliderScroll } from 'najwer23morsels/lib/sliderscroll';
import { TextBox } from 'najwer23morsels/lib/textbox';
import styles from './Home.module.css';

export const Home: React.FC<{}> = () => {
  return (
    <>
      <Grid layout="container" widthMax={1400} padding={'clamp(40px, 8vw, 60px) 20px 40px 20px'}>
        <Grid
          layout="flex"
          flexWrap="wrap"
          justifyContent="flexstart"
          alignItems="flexstart"
          widthMax={1400}
          padding={'0 0 20px 0'}
          gap={{ col: '100px', row: '40px' }}
        >
          <div className={styles.mePicture} style={{ width: 'min(400px, 100%)' }}>
            <img src="/me.jpg" width={'100%'} height={'auto'}></img>
          </div>
          <div className={styles.meDesc}>
            <Grid layout="container" padding={'0 0 40px 0'} margin={0}>
              <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
                Hello, World!
              </TextBox>
            </Grid>
            <Grid layout="container" widthMax={800} margin={0}>
              <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                I am a passionate and detail-oriented Software Engineer with over 10 years of experience specializing in
                modern JavaScript frameworks like React, Angular, Remix, and Svelte. I excel at translating business
                requirements into technical solutions, delivering high-quality, responsive, and mobile-first web
                applications on time and within budget. Committed to writing clean and maintainable code, I thrive in
                agile environments while effectively collaborating with cross-functional teams and mentoring junior
                developers. I am continuously growing by engaging with the tech community, contributing to open-source
                projects, and staying current with industry best practices. My strong problem-solving skills and clear
                communication allow me to bridge the gap between technical concepts and stakeholder needs efficiently.
              </TextBox>
            </Grid>
            <Grid layout="container" widthMax={700} padding={'40px 0 0px 0'} margin={0}>
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

      <Grid layout="container" widthMax={1400} padding={'clamp(40px, 8vw, 60px) 20px 20px 20px'}>
        <Grid layout="container" widthMax={700} padding={'0 0 40px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500}>
            The way I work <br /> is not an accident.
          </TextBox>
        </Grid>
        <Grid layout="container" widthMax={700} padding={'0 0 clamp(40px, 8vw, 100px) 0'} margin={0}>
          <TextBox tag="p" desktopSize={28} mobileSize={22} fontWeight={400}>
            My approach blends precision, creativity, and relentless focus, ensuring that every project I undertake
            delivers beyond expectations.
          </TextBox>
        </Grid>
      </Grid>
      <Grid layout="container" widthMax={1360} padding={'0'}>
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
              <div key={v} className={styles.homeSliderScrollItems}>
                <TextBox tag="p" desktopSize={48} mobileSize={35} fontWeight={400} color="black">
                  {v}
                </TextBox>
              </div>
            ))}
          </SliderScroll>
        </div>
      </Grid>
      <div style={{ background: 'rgb(225, 223, 223)' }}>
        <Grid layout="container" widthMax={1400} padding={'20px 20px 20px 20px'} margin={'120px auto 80px auto'}>
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
                    <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
                      {text}
                    </TextBox>
                  </div>
                ))}
              </>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Grid layout="container" widthMax={1400} padding={'0px 20px 0px 20px'}>
        <Grid layout="container" widthMax={700} padding={'0 0 40px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500}>
            Sample projects
          </TextBox>
        </Grid>
      </Grid>
      <Grid layout="container" widthMax={1360} padding={'0 0 40px 0'} className={styles.homeSliderItemsDesktop}>
        <div
          style={{
            height: '700px',
            width: '100%',
          }}
        >
          <Slider
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
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img
                draggable="false"
                src="https://i.pinimg.com/1200x/24/d1/e5/24d1e5325c8e3d5b7a0a295f919ea8d4.jpg"
              ></img>
            </div>
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img
                draggable="false"
                src="https://i.pinimg.com/1200x/9b/f6/21/9bf621356954e8629d7e0177fd13fcf1.jpg"
              ></img>
            </div>
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img
                draggable="false"
                src="https://i.pinimg.com/1200x/65/b2/d4/65b2d4d4779a740edb4e5c9b7b95f3d5.jpg"
              ></img>
            </div>
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img
                draggable="false"
                src="https://i.pinimg.com/1200x/ce/81/67/ce8167dae6118358abfa038361209028.jpg"
              ></img>
            </div>
          </Slider>
        </div>
      </Grid>
      <Grid layout="container" widthMax={1360} padding={'0 0 40px 0'} className={styles.homeSliderItemsMobile}>
        <div
          style={{
            height: '600px',
            width: '100%',
          }}
        >
          <Slider
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
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img src="https://i.pinimg.com/1200x/77/ff/b4/77ffb4f3c2b432a22e51e25fe7dc255c.jpg"></img>
            </div>
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img src="https://i.pinimg.com/1200x/8b/96/df/8b96dfc8a5c03b79263ab93b857e2325.jpg"></img>
            </div>
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img src="https://i.pinimg.com/1200x/e5/d1/06/e5d106151ca82149c3b7c56cd99a1646.jpg"></img>
            </div>
            <div className={styles.homeSliderItemsPicture} onClick={function PI() {}}>
              <img src="https://i.pinimg.com/1200x/21/14/c6/2114c62617df7f42b7f0ad6333369423.jpg"></img>
            </div>
          </Slider>
        </div>
      </Grid>
      <Grid layout="container" widthMax={1400} padding={'20px 20px 20px 20px'}>
        <Grid layout="container" widthMax={700} padding={'0 0 10px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
            APPLIED SYSTEMS INC.
          </TextBox>
        </Grid>
        <Grid layout="container" widthMax={900} padding={0} margin={0}>
          <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
            My responsibility was to create a frontend application enabling the purchase of insurance through a website.
            The application was developed using React.js and TypeScript, leveraging the Applied Systems design system.
            The primary technical challenge was implementing a recursive Depth-First Search (DFS) algorithm to
            conditionally render a nested, graph-like structure of questions, where each question’s visibility depended
            on previous answers. The question data was fetched from the backend as a large JSON payload (around 60,000
            lines), structured as a Server Driven UI model. The development was part of a 8-person international team
            spanning Poland, India, Canada, England, the USA, and Australia. In addition to the core questionnaire, I
            contributed to building an admin panel, implementing user action tracking scripts, creating statistical
            charts, and ensuring compliance with WCAG 2.1 AA accessibility standards.
          </TextBox>
        </Grid>
      </Grid>
      <Grid layout="container" widthMax={1400} padding={'40px 20px 20px 20px'}>
        <Grid layout="container" widthMax={700} padding={'0 0 10px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
            WARNER BROS. DISCOVERY, TVN24.pl
          </TextBox>
        </Grid>
        <Grid layout="container" widthMax={900} padding={0} margin={0}>
          <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
            My responsibility was to develop a new version of the TVN24.pl website from the ground up using SSR
            technology. The architecture was inspired by the islands concept popularized by Astro.js, featuring
            microfrontend applications implemented with React.js and Web Components. As part of the development team, I
            contributed to building multiple interactive widgets, including stock quotes, weather forecasts, polls,
            quizzes, election tools, TV program guides, and a custom SSR-based microfrontend rendering algorithm that
            operates without relying on external libraries.
          </TextBox>
        </Grid>
      </Grid>
      <Grid layout="container" widthMax={1400} padding={'40px 20px 20px 20px'}>
        <Grid layout="container" widthMax={700} padding={'0 0 10px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
            FLHF S.A
          </TextBox>
        </Grid>
        <Grid layout="container" widthMax={900} padding={0} margin={0}>
          <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
            My responsibility was to enhance a website initially developed by a software house while simultaneously
            refreshing its graphic design. The core focus was to develop ecommerce-specific components such as sliders,
            carousels, product listings, search functionality, and a shopping cart. Key priorities included optimizing
            for mobile view, improving SEO, descriptive markup and metadata, and enhancing performance metrics such as
            Cumulative Layout Shift (CLS), page speed, and accessibility, measured and optimized using Lighthouse.
          </TextBox>
        </Grid>
      </Grid>
      <Grid layout="container" widthMax={1400} padding={'40px 20px 0px 20px'}>
        <Grid layout="container" widthMax={700} padding={'0 0 10px 0'} margin={0}>
          <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
            EUROPA UBEZPIECZENIA
          </TextBox>
        </Grid>
        <Grid layout="container" widthMax={900} padding={'0'} margin={0}>
          <TextBox tag="p" desktopSize={18} mobileSize={16} fontWeight={400}>
            My duty was to maintain and develop an internal system for managing insurance policies. The system was used
            by insurance agents and office workers. My tasks included creating new modules, integrating external systems
            (online payments, client data verification, insurance application creation), and optimizing application
            performance. I worked on both the frontend (Angular) and backend (Java, Groovy, SQL) of the application.
          </TextBox>
        </Grid>
      </Grid>

      <Grid
        layout="flex"
        widthMax={1400}
        padding={'80px 20px 50px 20px'}
        margin={'auto'}
        justifyContent="center"
        alignItems="center"
      >
        <Grid layout="container" widthMax={850} padding={'40px 0px 20px 0px'}>
          <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500} className={styles.callMe}>
            Have questions or want to collaborate? Feel free to reach out! Click the button below to go to the contact
            form, and I'll get back to you as soon as possible. Let's start a conversation!
          </TextBox>
        </Grid>
      </Grid>

      <Grid
        layout="flex"
        widthMax={1400}
        padding={'0 0 100px 0'}
        margin={'auto'}
        justifyContent="center"
        alignItems="center"
      >
        <Grid layout="container" widthMax={850} padding={'0'}>
          <TextBox
            tag="a"
            href="/#/contact-me"
            desktopSize={30}
            mobileSize={24}
            fontWeight={600}
            className={styles.callMe}
          >
            Contact Me
          </TextBox>
        </Grid>
      </Grid>
    </>
  );
};
