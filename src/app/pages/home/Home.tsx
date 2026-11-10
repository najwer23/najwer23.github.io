import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Button } from 'najwer23morsels/lib/Button';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogRSS } from '../blog/BlogRSS.const';

export const Home: React.FC = () => {
  useDocumentTitle('Portfolio | Mariusz Najwer');
  const navigate = useNavigate();

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
        <Grid layout="container" margin={0} widthMax={'600px'}>
          <Typography variant="display">
            I build fast, accessible web applications that reach millions of users.
          </Typography>
        </Grid>

        <Grid layout="container" margin={0} widthMax={'900px'}>
          <Typography variant="subheading">Mariusz Najwer, Software Engineer in Wrocław, Poland</Typography>
        </Grid>

        <Grid layout="container" margin={0} widthMax={'900px'}>
          <Typography variant="body">
            From the TVN24.pl news platform at Warner Bros. Discovery to insurance purchase flows at Applied Systems, I
            have spent over 12 years across media, insurance and e-commerce. I have worked on SSR architectures,
            microfrontend systems, design systems and Server Driven UI.
          </Typography>
        </Grid>
        <Grid layout="container" margin={0} widthMax={'900px'}>
          <Typography variant="body">
            I have collaborated with international teams across Poland, the US, India, Canada and Australia. I care
            about real performance and shipping things that work.
          </Typography>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax="1400px" padding="50px 20px 0px 20px">
        <Typography variant="heading">Selected Projects</Typography>
        <div style={{ width: '100%', height: '2px', background: 'black', marginTop: '30px' }} />

        <Grid
          margin="50px 0 50px 0"
          layout="split"
          split={{
            mobile: '1fr',
            tablet: ['300px', '1fr'],
            smallDesktop: ['400px', '1fr'],
          }}
        >
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0, marginBottom: '10px' }}>
              <b>APPLIED SYSTEMS INC.</b>
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '4px' }}>
              Frontend Software Engineer
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '30px' }}>
              2024.06 – 2025.10 · 1 year, 5 months
              <br />
              Austin, United States / Remote
            </Typography>
          </Grid>
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0 }}>
              Built a Server Driven UI insurance purchase flow that renders a nested graph of ~60k lines of JSON
              questions with a recursive DFS algorithm.
            </Typography>
            <Typography variant="body">
              Built a Server Driven UI insurance purchase flow using a recursive DFS algorithm to render a nested graph
              of ~60k-line JSON questions. Contributed to an admin panel, user tracking, statistical charts, and WCAG
              2.1 AA compliance in an 8-person international team. Kept the codebase maintainable through code reviews
              and close collaboration with designers, QA, and backend engineers. Shared knowledge across the team by
              documenting solutions and helping new developers get up to speed with the question graph. Also focused on
              rendering performance, keeping the form smooth and responsive despite the large number of nested
              questions.
            </Typography>
            <Typography variant="body">
              <b>Stack:</b> React.js, TypeScript, JavaScript, HTML, CSS modules, Storybook, Pendo, Sentry, Angular
            </Typography>
          </Grid>
        </Grid>

        <div style={{ width: '100%', height: '2px', background: 'black', marginTop: '30px' }} />

        <Grid
          margin="50px 0 50px 0"
          layout="split"
          split={{
            mobile: '1fr',
            tablet: ['300px', '1fr'],
            smallDesktop: ['400px', '1fr'],
          }}
        >
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0, marginBottom: '10px' }}>
              <b>WARNER BROS. DISCOVERY, TVN24.pl</b>
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '4px' }}>
              Frontend Software Engineer
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '30px' }}>
              2023.08 – 2024.08 · 1 year
              <br />
              Warsaw, Poland / Remote
            </Typography>
          </Grid>
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0 }}>
              Built the TVN24.pl news portal from scratch with SSR, an islands architecture and microfrontends, without
              relying on external rendering libraries.
            </Typography>
            <Typography variant="body">
              Built TVN24.pl from scratch using SSR and an islands architecture with microfrontend React + Web
              Components. Delivered widgets for stocks, weather, polls, elections, TV guides, and a custom SSR rendering
              algorithm without external libs. Each widget was developed and shipped independently, so the editorial
              team could embed them across the site while keeping pages fast and the codebase easy to maintain.
            </Typography>
            <Typography variant="body">
              <b>Stack:</b> React.js, Next.js, TypeScript, JavaScript, HTML, CSS modules, Storybook, Node.js, Fastify,
              Google Analytics
            </Typography>
          </Grid>
        </Grid>

        <div style={{ width: '100%', height: '2px', background: 'black', marginTop: '30px' }} />

        <Grid
          margin="50px 0 50px 0"
          layout="split"
          split={{
            mobile: '1fr',
            tablet: ['300px', '1fr'],
            smallDesktop: ['400px', '1fr'],
          }}
        >
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0, marginBottom: '10px' }}>
              <b>FLHF S.A.</b>
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '4px' }}>
              Frontend Web Developer
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '30px' }}>
              2021.11 – 2023.04 · 1 year, 6 months
              <br />
              Wrocław, Poland / Remote
            </Typography>
          </Grid>
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0 }}>
              Improved an e-commerce storefront with new UI features and measurable gains in speed, SEO and
              accessibility.
            </Typography>
            <Typography variant="body">
              Enhanced an e-commerce site with sliders, carousels, product listings, and a shopping cart. Focused on
              mobile optimization, SEO, CLS, page speed, and accessibility improvements via Lighthouse audits. Worked on
              a PWA built on Magento 2 with a GraphQL API, keeping the shopping experience fast and stable on mobile
              devices.
            </Typography>
            <Typography variant="body">
              <b>Stack:</b> React.js, PWA, TypeScript, JavaScript, HTML, CSS, Magento 2, GraphQL
            </Typography>
          </Grid>
        </Grid>

        <div style={{ width: '100%', height: '2px', background: 'black', marginTop: '30px' }} />

        <Grid
          margin="50px 0 50px 0"
          layout="split"
          split={{
            mobile: '1fr',
            tablet: ['300px', '1fr'],
            smallDesktop: ['400px', '1fr'],
          }}
        >
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0, marginBottom: '10px' }}>
              <b>EUROPA UBEZPIECZENIA</b>
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '4px' }}>
              Full Stack Developer
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '30px' }}>
              2019.09 – 2021.10 · 2 years, 2 months
              <br />
              Wrocław, Poland / Remote
            </Typography>
          </Grid>
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0 }}>
              Developed an internal insurance policy management system used daily by agents and office workers.
            </Typography>
            <Typography variant="body">
              Maintained and developed an internal insurance policy management system for agents and office workers.
              Built new modules, integrated payment and data verification systems, and worked across Angular frontend
              and Java/Groovy backend. Delivered features end to end, from database and API changes to the user
              interface.
            </Typography>
            <Typography variant="body">
              <b>Stack:</b> Angular, Java, Groovy
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax="1400px" padding="50px 20px 0px 20px">
        <Typography variant="heading">Personal Project</Typography>
        <div style={{ width: '100%', height: '2px', background: 'black', marginTop: '30px' }} />

        <Grid
          margin="50px 0 50px 0"
          layout="split"
          split={{
            mobile: '1fr',
            tablet: ['300px', '1fr'],
            smallDesktop: ['400px', '1fr'],
          }}
        >
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0, marginBottom: '10px' }} fontWeight={'bold'}>
              <Typography
                href={'https://najwer23.github.io/najwer23morsels'}
                variant="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                NAJWER23MORSELS
              </Typography>
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '4px' }}>
              Author & Maintainer
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '30px' }}>
              Ongoing
              <br />
              Open source / Side project
            </Typography>
          </Grid>
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0 }}>
              I design, build and maintain my own React design system with a themeable foundation, and use it across my
              personal projects.
            </Typography>
            <Typography variant="body">
              A personal design system of reusable React components, built around consistent design tokens and a
              flexible theme. It covers the building blocks of everyday interfaces, from layout and typography to form
              controls, dialogs and data display. Components are accessible by default, documented and tested visually
              in Storybook, and easy to restyle through CSS variables. I use it as a place to practice what I do at
              work: small, predictable APIs and components that stay fast as they grow.
            </Typography>
            <Typography variant="body">
              <b>Stack:</b> React.js, TypeScript, CSS modules, Storybook
            </Typography>
          </Grid>
        </Grid>

        <div style={{ width: '100%', height: '2px', background: 'black', marginTop: '30px' }} />

        <Grid
          margin="50px 0 50px 0"
          layout="split"
          split={{
            mobile: '1fr',
            tablet: ['300px', '1fr'],
            smallDesktop: ['400px', '1fr'],
          }}
        >
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0, marginBottom: '10px' }} fontWeight={'bold'}>
              <Typography
                href={'https://www.npmjs.com/package/najwer23lang'}
                variant="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                NAJWER23LANG
              </Typography>
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '4px' }}>
              Author & Maintainer
            </Typography>
            <Typography variant="body" style={{ marginTop: 0, marginBottom: '30px' }}>
              Ongoing
              <br />
              Open source / Published on npm
            </Typography>
          </Grid>
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0 }}>
              I built and maintain a zero-dependency i18n tool where plain English written in code becomes the
              translation key, extracted to JSON automatically.
            </Typography>
            <Typography variant="body">
              A small, framework-agnostic library for translating apps without inventing key names or jumping between
              code and JSON files. You write the sentence where it is used, run a single CLI command, and fill in the
              empty values. Re-runs are safe: translated phrases that are edited or removed move to an unused section
              instead of being deleted, and a check mode fails CI on empty translations or stale files. It warns about
              calls it cannot extract, supports a configurable function name, and ships optional React bindings with a
              provider and hooks. No Babel, no build step.
            </Typography>
            <Typography variant="body">
              <b>Stack:</b> Node.js, React.js, JavaScript, npm
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax="1400px" padding="50px 20px 0px 20px">
        <Typography variant="heading">
          Latest posts on the{' '}
          <Typography href="/#/blog" variant="link">
            Blog
          </Typography>
        </Typography>

        {latestPosts.map((post) => (
          <React.Fragment key={post.guid}>
            <div style={{ width: '100%', height: '2px', background: 'black', marginTop: '30px' }} />
            <Grid
              margin="50px 0 50px 0"
              layout="split"
              split={{
                mobile: '1fr',
                tablet: ['300px', '1fr'],
                smallDesktop: ['400px', '1fr'],
              }}
            >
              <Grid layout="container" widthMax="100%" margin={0} padding="0">
                <Typography variant="subheading" style={{ marginTop: 0, marginBottom: '10px' }}>
                  <b>{formatDate(post.pubDate)}</b>
                </Typography>
              </Grid>
              <Grid layout="container" widthMax="100%" margin={0} padding="0">
                <Typography variant="subheading" style={{ marginTop: 0 }}>
                  <Typography href={post.link} variant="link">
                    {post.title}
                  </Typography>
                </Typography>
                <Typography variant="body">{post.description}</Typography>
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>

      <div style={{ background: '#FFE083', padding: '100px 20px 150px 20px', marginTop: '100px' }}>
        <Grid layout="container" widthMax="1400px">
          <Typography variant="display">Let's start a conversation</Typography>
          <Grid layout="container" widthMax={'850px'} padding={'40px 0px 20px 0px'} margin={0}>
            <TextBox tag="h2" desktopSize={30} mobileSize={24} fontWeight={500}>
              Have questions or want to collaborate? Send a message and I'll get back to you as soon as possible.
            </TextBox>
          </Grid>

          <Button
            variant="primary"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              navigate('/contact');
            }}
          >
            <TextBox desktopSize={16} mobileSize={16} fontWeight={400} color="inherit">
              Contact Me
            </TextBox>
          </Button>
        </Grid>
      </div>
    </>
  );
};
