import { Button } from 'najwer23morsels/lib/button';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { useState } from 'react';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Grid layout="container" widthMax={'1600px'}>
      <Grid layout="container" widthMax={'1400px'} padding={'20px'} margin={'auto'}>
        <Grid
          layout="columns"
          gap={{ col: '20px', row: '20px' }}
          col={{
            smallDesktop: 2,
            desktop: 2,
            mobile: 2,
            tablet: 2,
          }}
        >
          <div>
            <TextBox desktopSize={20} mobileSize={20} fontWeight={500} tag="a" href="/#/">
              @najwer23
            </TextBox>
          </div>

          <div className={styles.menuItemDesktop}>
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
          </div>

          <div className={styles.menuItemMobile}>
            <div className={styles.menuPlaceholder}>
              <Button
                height={'40px'}
                width={'70px'}
                padding={0}
                backgroundColor="orangered"
                onClick={() => setMenuOpen((prevMenuOpen) => !prevMenuOpen)}
              >
                <TextBox tag="span" desktopSize={20} mobileSize={20} fontWeight={400} color="white">
                  Menu
                </TextBox>
              </Button>
            </div>
            <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
              <div className={styles.menuContent}>
                {[
                  { href: '/#/home', label: 'Home', desktopSize: 30, mobileSize: 30, fontWeight: 400, color: 'black' },
                  {
                    href: '/#/contact',
                    label: 'Contact Me',
                    desktopSize: 30,
                    mobileSize: 30,
                    fontWeight: 400,
                    color: 'black',
                  },
                  {
                    href: 'https://najwer23.github.io/resume/',
                    label: 'Résumé',
                    desktopSize: 32,
                    mobileSize: 32,
                    fontWeight: 500,
                    target: '_blank',
                    rel: 'noreferrer',
                  },
                ].map(({ href, label, desktopSize, mobileSize, fontWeight, color, target, rel }) => (
                  <TextBox
                    key={label}
                    tag="a"
                    href={href}
                    desktopSize={desktopSize}
                    mobileSize={mobileSize}
                    fontWeight={fontWeight}
                    color={color}
                    className={menuOpen && styles.menuAnimation}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    target={target}
                    rel={rel}
                  >
                    {label}
                  </TextBox>
                ))}
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.navigationLine}></div>

      <Grid
        layout="container"
        widthMax={'1400px'}
        padding={'20px'}
        margin={'auto'}
        className={styles.navigationTabMenu}
      >
        <Grid layout="flex" justifyContent="center" widthMax={'1400px'} gap={{ col: '30px', row: '20px' }}>
          {[
            { href: '/#/home', label: 'Home' },
            { href: '/#/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <div key={label}>
              <TextBox tag="a" href={href} desktopSize={18} mobileSize={18} fontWeight={400} color="darkgrey">
                {label}
              </TextBox>
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
