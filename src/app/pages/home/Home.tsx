import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import React, { useMemo } from 'react';
import { BlogRSS } from '../blog/BlogRSS.const';

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
    </>
  );
};
