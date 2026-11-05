import { Grid } from 'najwer23morsels/lib/Grid';
import { NavigationTabs } from 'najwer23morsels/lib/NavigationTabs';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
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
      menuOnlyTop
      menuTopLeftColumn={
        <Grid layout="flex" justifyContent="flex-start" alignItems="center" minHeight={'100%'}>
          <Typography variant="link" desktopSize={20} mobileSize={20} fontWeight={500} href="/#/">
            @najwer23
          </Typography>
        </Grid>
      }
      menuTopRightColumn={
        <Grid layout="flex" justifyContent="flex-end" gap={{ col: '30px' }}>
          <>
            {[
              { href: '/#/portfolio', label: 'Portfolio' },
              { href: '/#/contact', label: 'Contact' },
              { href: '/#/blog', label: 'Blog' },
              {
                href: 'https://najwer23.github.io/nook/',
                label: 'Nook',
              },
              {
                href: 'https://najwer23.github.io/resume/',
                label: 'Résumé',
                color: '#762121',
                fontWeight: 'bold',
              },
            ].map(({ href, label, color }) => (
              <div key={label}>
                <Typography
                  variant="link"
                  href={href}
                  color={color}
                  desktopSize={18}
                  mobileSize={18}
                  fontWeight={600}
                  colorHover={color}
                >
                  {label}
                </Typography>
              </div>
            ))}
          </>
        </Grid>
      }
      menuMobile={
        <Grid key={'Menu'} layout="container" margin="0 0 24px 0">
          <Grid layout="container" margin="0 0 8px 0">
            <TextBox tag="p" desktopSize={20} mobileSize={20} fontWeight={600} color="grey">
              Menu
            </TextBox>
          </Grid>
          {[
            { href: '/#/portfolio', label: 'Portfolio' },
            { href: '/#/contact', label: 'Contact' },
            { href: '/#/blog', label: 'Blog' },
            {
              href: 'https://najwer23.github.io/nook/',
              label: 'Nook',
            },
            {
              href: 'https://najwer23.github.io/resume/',
              label: 'Résumé',
              fontWeight: 'bold',
              color: '#762121',
            },
          ].map(({ href, label, color, fontWeight }) => (
            <Grid key={href} layout="container" margin="0 0 8px 0">
              <Typography
                variant="link"
                key={label}
                href={href}
                desktopSize={30}
                mobileSize={30}
                textAlign="center"
                color={color}
                fontWeight={fontWeight ?? (isActive(href) ? 600 : 400)}
              >
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      }
    ></NavigationTabs>
  );
};
