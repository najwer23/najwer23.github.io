import { Button } from 'najwer23morsels/lib/button';
import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { useState } from 'react';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Grid layout="container" widthMax={1600}>
      <Grid layout="container" widthMax={1400} padding={'20px'} margin={'auto'}>
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
                <TextBox
                  tag="a"
                  href="/#/home"
                  desktopSize={30}
                  mobileSize={30}
                  fontWeight={400}
                  color="black"
                  onClick={() => setMenuOpen((prevMenuOpen) => !prevMenuOpen)}
                >
                  Home
                </TextBox>
                <TextBox
                  tag="a"
                  href="https://najwer23.github.io/resume/"
                  desktopSize={32}
                  mobileSize={32}
                  fontWeight={500}
                  rel="noreferrer"
                  target="_blank"
                >
                  Résumé
                </TextBox>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.navigationLine}></div>

      <Grid layout="container" widthMax={1400} padding={'20px'} margin={'auto'} className={styles.navigationTabMenu}>
        <Grid layout="flex" justifyContent="center" widthMax={1400} gap={{ col: '30px', row: '20px' }}>
          <div>
            <TextBox tag="a" href="/#/home" desktopSize={18} mobileSize={18} fontWeight={400} color="darkgrey">
              Home
            </TextBox>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};
