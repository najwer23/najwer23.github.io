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
            Frontend-leaning full-stack engineer (React, Angular, TypeScript, Node.js) who builds the hard parts of a
            product: a server-driven UI that renders an insurance purchase flow from backend data, a news portal built
            from scratch with a custom SSR algorithm (widget load time cut from 14 seconds to near-instant), and
            serverless backends on AWS Lambda and DynamoDB. Focused on performance (Core Web Vitals), accessibility
            (WCAG), and maintainable architecture.
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
        <Typography variant="heading">Projects</Typography>
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
              I built the engine behind an insurance purchase flow: a server-driven UI that turns backend data into a
              fast, accessible form.
            </Typography>

            <Typography variant="body">
              <b>Challenge:</b> a huge, deeply nested question graph that was hard to build and maintain as frontend
              code.
            </Typography>

            <Typography variant="body">
              <b>Solution:</b> I designed and built a server-driven UI from scratch: a recursive DFS renderer that turns
              the backend's question graph into a working, accessible (WCAG 2.1 AA) form. I shipped it in Angular, then
              rewrote it in React to adopt the company's new design system.
            </Typography>

            <Typography variant="body">
              <b>Result:</b> I cut load time from 14s to 3s by profiling and fixing slow re-renders (memoization, state
              splitting, DFS caching). I also onboarded new developers, documented reusable solutions, and took over the
              Playwright E2E tests from QA, so the 8-person international team could extend the flow with confidence.
            </Typography>

            <Typography variant="body">
              <b>Stack:</b> React.js, TypeScript, JavaScript, Angular, HTML, CSS modules, Storybook, Pendo, Sentry
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
              I built the widgets and the custom SSR engine behind TVN24.pl, and they held up on election night under
              peak traffic.
            </Typography>

            <Typography variant="body">
              <b>Challenge:</b> a major news portal needed fast, interactive widgets (stocks, weather, polls, TV guide,
              elections) on immovable deadlines, with pages that stay quick under heavy traffic.
            </Typography>

            <Typography variant="body">
              <b>Solution:</b> I built TVN24.pl from scratch with server-side rendering and an islands architecture,
              combining React microfrontends and Web Components. I designed a custom SSR rendering algorithm without
              external rendering libraries, added request caching and CloudFront, and integrated independently developed
              components into one unified frontend.
            </Typography>

            <Typography variant="body">
              <b>Result:</b> I cut widget load time from 14 seconds to near-instant. The election-night widgets I
              delivered ran with zero downtime and zero errors at peak traffic, and the modular setup made components
              easy to reuse.
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
              I built the storefront features and ran the Lighthouse-driven fixes that made an e-commerce PWA faster,
              more accessible and better for SEO.
            </Typography>

            <Typography variant="body">
              <b>Challenge:</b> an e-commerce store on Magento 2 needed to feel fast and stable on mobile, rank better
              in search, and give shoppers a smoother path to purchase.
            </Typography>

            <Typography variant="body">
              <b>Solution:</b> I developed interactive sliders, carousels and product listing components in a React PWA
              on top of Magento 2 and its GraphQL API. I implemented and improved the shopping cart, and optimized the
              app for mobile devices across screen sizes.
            </Typography>

            <Typography variant="body">
              <b>Result:</b> I used Lighthouse audits to improve SEO, page speed, Cumulative Layout Shift (CLS) and
              accessibility, which gave shoppers a faster, more stable and easier-to-use store on mobile.
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
              I built new modules and integrations for the internal system that insurance agents and office staff use to
              manage policies.
            </Typography>

            <Typography variant="body">
              <b>Challenge:</b> an internal policy management system had to keep supporting agents and office staff
              while new business workflows, payments and data checks were added to it.
            </Typography>

            <Typography variant="body">
              <b>Solution:</b> I designed and implemented new application modules for policy management and business
              workflows, working across the full stack: Angular on the frontend, Java and Groovy on the backend. I also
              integrated external payment gateways and data verification services.
            </Typography>

            <Typography variant="body">
              <b>Result:</b> the integrations streamlined insurance-related processes, and I kept the system running and
              growing for over two years while owning features across both frontend and backend.
            </Typography>

            <Typography variant="body">
              <b>Stack:</b> Angular, TypeScript, JavaScript, jQuery, HTML, CSS, Java (Groovy), SQL, SOAP
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid layout="container" widthMax="1400px" padding="50px 20px 0px 20px">
        <Typography variant="heading">NPM packages</Typography>
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
              Open source / Published on npm
            </Typography>
          </Grid>
          <Grid layout="container" widthMax="100%" margin={0} padding="0">
            <Typography variant="subheading" style={{ marginTop: 0 }}>
              I designed and built a React design system, published as an npm package, that powers my own apps with one
              consistent, themeable UI.
            </Typography>

            <Typography variant="body">
              <b>Challenge:</b> every new app needs the same buttons, forms, dialogs and layouts, and rebuilding them
              each time leads to inconsistent styling and slow progress.
            </Typography>

            <Typography variant="body">
              <b>Solution:</b> I built a reusable component library around design tokens and a flexible theming system.
              I wrote a recursive algorithm that turns nested tokens into CSS variables, so themes scale and every
              component stays consistent. The library covers layout, typography, form controls, dialogs and data
              display, with predictable APIs and accessible components.
            </Typography>

            <Typography variant="body">
              <b>Result:</b> a documented package, with every component tested visually in Storybook, that I reuse
              across my projects such as my blog, resume, portfolio and NookK. Restyling an app means changing CSS
              variables, not rewriting components.
            </Typography>

            <Typography variant="body">
              <b>Stack:</b> React.js, TypeScript, JavaScript, CSS modules, Storybook, Vite, Rollup.js, Biome.js
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
              I built and published najwer23lang, a zero-dependency i18n library where the English sentence in your code
              becomes the translation key, extracted to JSON automatically.
            </Typography>

            <Typography variant="body">
              <b>Challenge:</b> translating a small app usually means inventing key names, jumping between code and JSON
              files, and pulling in heavy tooling like Babel plugins or build steps.
            </Typography>

            <Typography variant="body">
              <b>Solution:</b> I wrote a regex-based extraction engine that scans JavaScript, TypeScript and React
              files, collects the English phrases from translation calls (with a configurable function name) and
              generates the JSON catalogs. A safe sync algorithm keeps existing translations, moves outdated entries to
              an <code>__unused</code> section and restores them if the phrase comes back. I added a CLI for init,
              extraction and configurable scanning, plus a framework-agnostic core with optional React bindings:
              provider, hooks, dynamic language switching and variable interpolation.
            </Typography>

            <Typography variant="body">
              <b>Result:</b> a lightweight package on npm that needs no dependencies, no Babel config and no build step.
              You write the sentence where it is used, run one command and fill in the empty values. A check mode fails
              CI on missing translations or outdated catalogs, so nothing goes stale unnoticed.
            </Typography>

            <Typography variant="body">
              <b>Stack:</b> Node.js, React.js, TypeScript, JavaScript, npm, Biome.js
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
