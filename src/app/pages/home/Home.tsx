import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Grid } from 'najwer23morsels/lib/Grid';
import { Picture } from 'najwer23morsels/lib/Picture';
import { Slider } from 'najwer23morsels/lib/Slider';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import React, { lazy, Suspense } from 'react';
import styles from './Home.module.css';

const Masonry = lazy(() => import('najwer23morsels/lib/Masonry').then((m) => ({ default: m.Masonry })));

export const Home: React.FC = () => {
  useDocumentTitle('Home | Mariusz Najwer');

  return (
    <>
      <Grid layout="container" widthMax={'1400px'} padding={'0 20px 0px 20px'}>
        <Grid layout="container" widthMax="900px" margin={0}>
          <Typography appearance="light" variant="display">
            Portfolio
          </Typography>
          <Typography appearance="light" variant="caption">
            Software Engineer · Mariusz Najwer · Wrocław, Poland
          </Typography>
          <Typography appearance="light" variant="body">
            I am a Software Engineer with extensive experience in frontend and full-stack development across insurance,
            media, and tech domains. I build scalable web applications using React.js, Angular, TypeScript, JavaScript,
            Node.js, and modern web technologies. I have contributed to design systems, SSR-driven architectures, and
            microfrontend development, collaborating with international teams. Based in Wrocław, Poland, open to remote
            opportunities.
          </Typography>
        </Grid>

        <Grid layout="container" widthMax={'700px'} padding={0} margin={'10px 0 0 0'}>
          <ul style={{ margin: 0, paddingLeft: 14 }}>
            {[
              ['github.com/najwer23', 'https://github.com/najwer23'],
              ['x.com/najwer23', 'https://x.com/najwer23'],
              ['linkedin.com/in/najwer23', 'https://www.linkedin.com/in/najwer23'],
              ['npmjs.com/~najwer23', 'https://www.npmjs.com/~najwer23'],
              ['leetcode.com/u/najwer23', 'https://leetcode.com/u/najwer23'],
              ['najwer23gym.vercel.app', 'https://najwer23gym.vercel.app'],
            ].map(([text, href]) => (
              <li key={href}>
                <Typography appearance="light" variant="link" href={href} target="_blank">
                  {text}
                </Typography>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 0px 20px'}>
        <Grid layout="container" widthMax={'900px'} padding={'0 0 10px 0'} margin={0}>
          <Typography appearance="light" variant="heading">
            Projects
          </Typography>

          <Typography appearance="light" variant="subheading">
            APPLIED SYSTEMS INC.
          </Typography>
          <Typography appearance="light" variant="body">
            I was responsible for developing a React.js/TypeScript frontend for an insurance purchasing website built on
            the Applied Systems design system, whose core technical challenge involved implementing a recursive DFS
            algorithm to conditionally render a nested, graph-like Server Driven UI questionnaire from a ~60,000-line
            JSON payload, while also contributing to an admin panel, user action tracking, statistical charts, and WCAG
            2.1 AA accessibility compliance as part of an 8-person international team across Poland, India, Canada,
            England, the USA, and Australia.
          </Typography>
          <Typography appearance="light" variant="subheading">
            WARNER BROS. DISCOVERY, TVN24.pl
          </Typography>
          <Typography appearance="light" variant="body">
            My responsibility was to develop a new version of the TVN24.pl website from the ground up using SSR
            technology. The architecture was inspired by the islands concept popularized by Astro.js, featuring
            microfrontend applications implemented with React.js and Web Components. As part of the development team, I
            contributed to building multiple interactive widgets, including stock quotes, weather forecasts, polls,
            quizzes, election tools, TV program guides, and a custom SSR-based microfrontend rendering algorithm that
            operates without relying on external libraries.
          </Typography>
          <Typography appearance="light" variant="subheading">
            FLHF S.A
          </Typography>
          <Typography appearance="light" variant="body">
            My responsibility was to enhance a website initially developed by a software house while simultaneously
            refreshing its graphic design. The core focus was to develop ecommerce-specific components such as sliders,
            carousels, product listings, search functionality, and a shopping cart. Key priorities included optimizing
            for mobile view, improving SEO, descriptive markup and metadata, and enhancing performance metrics such as
            Cumulative Layout Shift (CLS), page speed, and accessibility, measured and optimized using Lighthouse.
          </Typography>
          <Typography appearance="light" variant="subheading">
            EUROPA UBEZPIECZENIA
          </Typography>
          <Typography appearance="light" variant="body">
            My duty was to maintain and develop an internal system for managing insurance policies. The system was used
            by insurance agents and office workers. My tasks included creating new modules, integrating external systems
            (online payments, client data verification, insurance application creation), and optimizing application
            performance. I worked on both the frontend (Angular) and backend (Java, Groovy, SQL) of the application.
          </Typography>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={'1360px'} padding={'40px 0 40px 0'} className={styles.homeSliderProjects}>
        <div className={styles.homeSliderProjectsWrapper}>
          <Slider
            key={'homeSliderItemsDesktop'}
            isCircular
            slidesConfig={{
              desktop: { items: 1, slidesToScroll: 1 },
              mobile: { items: 1, slidesToScroll: 1 },
              tablet: { items: 1, slidesToScroll: 1 },
            }}
          >
            <div className={[styles.homeSliderProjectsPicture, styles.cornerShape].join(' ')}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/77/ff/b4/77ffb4f3c2b432a22e51e25fe7dc255c.jpg"
                arMobile={485 / 681}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/24/d1/e5/24d1e5325c8e3d5b7a0a295f919ea8d4.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of tvn24.pl'}
                loading="eager"
              />
            </div>
            <div className={[styles.homeSliderProjectsPicture, styles.cornerShape].join(' ')}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/8b/96/df/8b96dfc8a5c03b79263ab93b857e2325.jpg"
                arMobile={481 / 680}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/9b/f6/21/9bf621356954e8629d7e0177fd13fcf1.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of stock quotes, tvn24.pl'}
                loading="eager"
              />
            </div>
            <div className={[styles.homeSliderProjectsPicture, styles.cornerShape].join(' ')}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/e5/d1/06/e5d106151ca82149c3b7c56cd99a1646.jpg"
                arMobile={197 / 338}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/65/b2/d4/65b2d4d4779a740edb4e5c9b7b95f3d5.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of Restilo'}
                loading="eager"
              />
            </div>
            <div className={[styles.homeSliderProjectsPicture, styles.cornerShape].join(' ')}>
              <Picture
                srcMobile="https://i.pinimg.com/1200x/21/14/c6/2114c62617df7f42b7f0ad6333369423.jpg"
                arMobile={391 / 677}
                maxHeightMobile="450px"
                srcDesktop="https://i.pinimg.com/1200x/ce/81/67/ce8167dae6118358abfa038361209028.jpg"
                arDesktop={1200 / 750}
                maxHeightDesktop="600px"
                alt={'Photo of Europa Ubezpieczenia'}
                loading="eager"
              />
            </div>
          </Slider>
        </div>
      </Grid>

      <div style={{ background: '#FFE083' }}>
        <Grid layout="container" widthMax={'1400px'} padding={'20px 20px 20px 20px'} margin={'40px auto 60px auto'}>
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
                Have questions or want to collaborate? Feel free to reach out! Click the link below to go to the contact
                form, and I'll get back to you as soon as possible. Let's start a conversation!
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
        <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 20px 20px'}>
          <Typography appearance="light" variant="heading">
            Beyond 5 PM ⛵️
          </Typography>

          <Typography appearance="light" variant="body">
            A curated collection of European evenings, city corners, and golden light.
          </Typography>
        </Grid>

        <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 60px 20px'} minHeight="2800px">
          <div>
            <Suspense>
              <Masonry
                gap={{ col: '20px', row: '20px' }}
                col={{
                  mobile: 1,
                  smallDesktop: 3,
                  desktop: 3,
                  tablet: 2,
                }}
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
                  { src: 'https://i.ibb.co/C5XpQkh/barcelona-2371946-1280.jpg', alt: 'Barcelona', ar: 16 / 9 },
                  { src: 'https://i.ibb.co/tsCt9tX/el-born-5301517-1280.jpg', alt: 'Barcelona', ar: 427 / 640 },
                  { src: 'https://i.ibb.co/CKJcN53/santorini-4996901-1280.jpg', alt: 'Santorini', ar: 1280 / 853 },
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
                  { src: 'https://i.ibb.co/9tT9wfq/wroclaw-1511660-640.jpg', alt: 'Wrocław', ar: 128 / 85 },
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
            </Suspense>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
