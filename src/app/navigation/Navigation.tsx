import { Grid } from 'najwer23morsels/lib/Grid';
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (location.pathname === '/') {
      return href === '/#/portfolio';
    } else if (location.pathname.includes('/blog/')) {
      return href === '/#/blog';
    } else {
      return href.includes(location.pathname);
    }
  };

  return (
    <NavigationTabs
      menuTopLeftColumn={
        <Grid layout="flex" justifyContent="flex-start" alignItems="center" minHeight={'100%'}>
          <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/#/">
            @najwer23
          </TextBox>
        </Grid>
      }
      menuTopRightColumn={
        <Grid layout="flex" justifyContent="flex-end">
          <TextBox
            tag="a"
            href="https://najwer23.github.io/resume/"
            desktopSize={20}
            mobileSize={20}
            fontWeight={500}
            rel="noreferrer"
            target="_blank"
          >
            Résumé ↗
          </TextBox>
        </Grid>
      }
      menuMobile={
        <Grid layout="flex" flexDirection="column">
          {[
            { href: '/#/portfolio', label: 'Portfolio' },
            { href: '/#/contact', label: 'Contact' },
            { href: '/#/blog', label: 'Blog' },
            {
              href: 'https://najwer23.github.io/nook/',
              label: 'Nook ↗',
              target: '_blank',
              rel: 'noreferrer',
            },
            {
              href: 'https://najwer23.github.io/resume/',
              label: 'Résumé ↗',
              desktopSize: 34,
              mobileSize: 34,
              fontWeight: 600,
              target: '_blank',
              rel: 'noreferrer',
            },
          ].map(({ href, label, desktopSize = 30, mobileSize = 30, fontWeight = 400, target, rel }) => (
            <TextBox
              key={label}
              tag="a"
              href={href}
              desktopSize={desktopSize}
              mobileSize={mobileSize}
              fontWeight={fontWeight}
              color={isActive(href) ? 'grey' : 'var(--n23mTextBoxColor)'}
              colorHover={isActive(href) ? 'grey' : 'var(--n23mTextBoxColor)'}
              target={target}
              rel={rel}
              textAlign="center"
            >
              {label}
            </TextBox>
          ))}
        </Grid>
      }
      menuBottomTabs={
        <>
          {[
            { href: '/#/portfolio', label: 'Portfolio' },
            { href: '/#/contact', label: 'Contact' },
            { href: '/#/blog', label: 'Blog' },
            {
              href: 'https://najwer23.github.io/nook/',
              label: 'Nook ↗',
              desktopSize: 34,
              mobileSize: 34,
              fontWeight: 600,
              target: '_blank',
              rel: 'noreferrer',
            },
          ].map(({ href, label, target, rel }) => (
            <div key={label}>
              <TextBox
                tag="a"
                href={href}
                desktopSize={18}
                mobileSize={18}
                fontWeight={500}
                color={isActive(href) ? 'grey' : 'var(--n23mTextBoxColor)'}
                colorHover={isActive(href) ? 'grey' : 'var(--n23mTextBoxColor)'}
                target={target}
                rel={rel}
              >
                {label}
              </TextBox>
            </div>
          ))}
        </>
      }
    ></NavigationTabs>
  );
};
