import { Grid } from 'najwer23morsels/lib/Grid';
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (href: string) => {
    if (location.pathname === '/') {
      return href === '/#/home';
    } else if (location.pathname.includes('/blog/')) {
      return href === '/#/blog';
    } else {
      return href.includes(location.pathname);
    }
  };

  return (
    <NavigationTabs
      menuTopLeftColumn={
        <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/#/">
          @najwer23
        </TextBox>
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
            Résumé
          </TextBox>
        </Grid>
      }
      menuMobile={
        <>
          {[
            { href: '/#/home', label: 'Home' },
            { href: '/#/contact', label: 'Contact' },
            { href: '/#/weather', label: 'Weather' },
            { href: '/#/stock-quotes', label: 'Stock Quotes' },
            { href: '/#/blog', label: 'Blog' },
            { href: '/#/visitors', label: 'Visitors' },
            {
              href: 'https://najwer23.github.io/resume/',
              label: 'Résumé',
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
            >
              {label}
            </TextBox>
          ))}
        </>
      }
      menuBottomTabs={
        <>
          {[
            { href: '/#/home', label: 'Home' },
            { href: '/#/contact', label: 'Contact' },
            { href: '/#/weather', label: 'Weather' },
            { href: '/#/stock-quotes', label: 'Stock Quotes' },
            { href: '/#/blog', label: 'Blog' },
            { href: '/#/visitors', label: 'Visitors' },
          ].map(({ href, label }) => (
            <div key={label}>
              <TextBox
                tag="a"
                href={href}
                desktopSize={18}
                mobileSize={18}
                fontWeight={500}
                color={isActive(href) ? 'grey' : 'var(--n23mTextBoxColor)'}
                colorHover={isActive(href) ? 'grey' : 'var(--n23mTextBoxColor)'}
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
