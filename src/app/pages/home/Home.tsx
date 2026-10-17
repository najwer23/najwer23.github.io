import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import React, { useMemo } from 'react';
import { BlogRSS } from '../blog/BlogRSS.const';

// const Masonry = lazy(() => import('najwer23morsels/lib/Masonry').then((m) => ({ default: m.Masonry })));

export const Home: React.FC = () => {
  useDocumentTitle('Home | Mariusz Najwer');

  const latestPosts = useMemo(
    () => [...BlogRSS].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime()).slice(0, 3),
    [],
  );

  const formatDate = useMemo(
    () => (date: Date) => date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
    [],
  );

  return (
    <>
      <Grid layout="container" widthMax={'1400px'} padding={'0 20px 0px 20px'}>
        <Grid layout="flex" gap={{ col: '20px', row: '20px' }} flexWrap="wrap">
          <Grid layout="container" margin={0} widthMax={'900px'}>
            <Typography appearance="light" variant="display">
              Portfolio
            </Typography>
            <Typography appearance="light" variant="caption">
              Software Engineer · Mariusz Najwer · Wrocław, Poland
            </Typography>
            <Typography appearance="light" variant="body">
              I build fast, accessible web applications that reach millions of users. From the TVN24.pl news platform at
              Warner Bros. Discovery to insurance purchase flows at Applied Systems.
              <br />
              <br />
              Over 12+ years across media, insurance, and e-commerce, I've worked on SSR architectures, microfrontend
              systems, design systems, and Server Driven UI. I have collaborated with international teams across Poland,
              the US, India, Canada, and Australia.
              <br />
              <br />I care about real performance and shipping things that work.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 0px 20px'}>
        <Grid layout="container" widthMax={'900px'} padding={'0 0 10px 0'} margin={0}>
          <Typography appearance="light" variant="heading">
            Selected Projects
          </Typography>

          <Typography appearance="light" variant="subheading">
            APPLIED SYSTEMS INC.
          </Typography>
          <Typography appearance="light" variant="body">
            Built a Server Driven UI insurance purchase flow using a recursive DFS algorithm to render a nested graph of
            ~60k-line JSON questions. Contributed to an admin panel, user tracking, statistical charts, and WCAG 2.1 AA
            compliance in an 8-person international team. Kept the codebase maintainable through code reviews and close
            collaboration with designers, QA, and backend engineers. Shared knowledge across the team by documenting
            solutions and helping new developers get up to speed with the question graph. Also focused on rendering
            performance, keeping the form smooth and responsive despite the large number of nested questions.
          </Typography>
          <Typography appearance="light" variant="subheading">
            WARNER BROS. DISCOVERY, TVN24.pl
          </Typography>
          <Typography appearance="light" variant="body">
            Built TVN24.pl from scratch using SSR and an islands architecture with microfrontend React + Web Components.
            Delivered widgets for stocks, weather, polls, elections, TV guides, and a custom SSR rendering algorithm
            without external libs.
          </Typography>
          <Typography appearance="light" variant="subheading">
            FLHF S.A
          </Typography>
          <Typography appearance="light" variant="body">
            Enhanced an e-commerce site with sliders, carousels, product listings, and a shopping cart. Focused on
            mobile optimization, SEO, CLS, page speed, and accessibility improvements via Lighthouse audits.
          </Typography>
          <Typography appearance="light" variant="subheading">
            EUROPA UBEZPIECZENIA
          </Typography>
          <Typography appearance="light" variant="body">
            Maintained and developed an internal insurance policy management system for agents and office workers. Built
            new modules, integrated payment and data verification systems, and worked across Angular frontend and
            Java/Groovy backend.
          </Typography>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 0px 20px'}>
        <Grid layout="container" widthMax={'900px'} padding={'0 0 10px 0'} margin={0}>
          <Typography appearance="light" variant="heading">
            Latest{' '}
            <Typography href="/#/blog" variant="link">
              Blog
            </Typography>{' '}
            Posts
          </Typography>

          {latestPosts.map((post) => (
            <React.Fragment key={post.guid}>
              <Typography appearance="light" variant="subheading">
                <Typography href={post.link} variant="link">
                  {post.title}
                </Typography>
              </Typography>
              <Typography appearance="light" variant="caption">
                {formatDate(post.pubDate)}
              </Typography>
              <Typography appearance="light" variant="body">
                {post.description}
              </Typography>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>

      <div style={{ background: '#FFE083' }}>
        <Grid layout="container" widthMax={'1400px'} padding={'20px 20px 20px 20px'} margin={'75px auto 0px auto'}>
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

      {/* 
      <Grid layout="container" widthMax={'1600px'}>
        <Grid layout="container" widthMax={'1400px'} padding={'0px 20px 20px 20px'}>
          <Typography appearance="light" variant="heading">
            After Hours ⛵️
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
       */}
    </>
  );
};
