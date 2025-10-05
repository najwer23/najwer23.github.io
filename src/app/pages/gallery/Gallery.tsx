import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { GridMasonry } from 'najwer23snacks/lib/GridMasonry';
import styles from './Gallery.module.css';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';
import { Picture } from 'najwer23snacks/lib/Picture';
import { GALLERY } from './Gallery.const';
import { useState } from 'react';
import { Dialog } from 'najwer23snacks/lib/Dialog';

export const Gallery: React.FC<{
  title: string;
}> = ({ title }) => {
  useDocumentTitle(title);

  const [dialog, setDialog] = useState<{ isOpen: boolean; src: string; alt: string }>({
    isOpen: false,
    src: GALLERY[0].src,
    alt: '',
  });

  return (
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      <TextBox tag="h1"> Gallery</TextBox>

      <div style={{ minHeight: '900px' }}>
        <GridMasonry
          gap={{
            col: '20px',
            row: '20px',
          }}
          col={{
            mobile: 1,
            smallDesktop: 3,
            desktop: 3,
            tablet: 2,
          }}
          delay={10}
          >
          {GALLERY &&
            GALLERY.map(({ src, alt, ar }, i) => (
              <div
                key={i}
                onClick={() => {
                  setDialog({ isOpen: true, src: src, alt: alt });
                }}
                className={styles.pictureWrapper}>
                <Picture src={src} alt={alt} key={i} ar={ar} kind="border" />
              </div>
            ))}
        </GridMasonry>

        <Dialog modalOpen={dialog.isOpen} modalClose={() => setDialog({ ...dialog, isOpen: false })}>
          <div>
            <Picture src={dialog.src} alt={dialog.alt} />
          </div>
        </Dialog>
      </div>
    </Grid>
  );
};
