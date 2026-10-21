import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Grid } from 'najwer23morsels/lib/Grid';
import { TextBox } from 'najwer23morsels/lib/TextBox';
import { Typography } from 'najwer23morsels/lib/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlogRSS } from './BlogRSS.const';

export const BlogArchive: React.FC = () => {
  const navigate = useNavigate();

  useDocumentTitle(`Blog, Archive | Mariusz Najwer`);

  const location = useLocation();
  const from = location.state?.from as string | undefined;
  const backPath = from ?? '/blog';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (from) {
      navigate(-1);
    } else {
      navigate(backPath, { replace: true });
    }
  };

  return (
    <Grid layout="container" widthMax="1400px" padding="0 20px 40px 20px">
      <Grid layout="container" widthMax="900px" minHeight="415px" margin="0 0 60px">
        <Grid layout="container" widthMax="900px" margin={'0 0 40px 0'} minHeight={0}>
          <Typography appearance="light" variant="display">
            Archive
          </Typography>

          <TextBox
            onClick={handleClick}
            tag="a"
            href="/#/blog"
            desktopSize={12}
            mobileSize={12}
            fontWeight={600}
            color="var(--linkColor)"
            colorHover="var(--linkColor)"
          >
            Blog
          </TextBox>
        </Grid>

        {BlogRSS.map(({ title, link }, index) => (
          <div style={{ margin: '0 0 10px 0' }} key={link}>
            <TextBox
              desktopSize={14}
              mobileSize={14}
              fontWeight={600}
              tag="span"
            >{`#${BlogRSS.length - index} `}</TextBox>

            <TextBox
              tag="a"
              href={`#${link.split('#')[1]}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(`${link.split('#')[1]}`, { state: { from: 'archive' } });
              }}
              desktopSize={14}
              mobileSize={14}
              fontWeight={600}
              color="var(--linkColor)"
              colorHover="var(--linkColor)"
            >
              {title}
            </TextBox>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};
