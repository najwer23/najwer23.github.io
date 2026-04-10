import { useDocumentTitle } from '@app/hooks/useDocumentTitle';
import { Button } from 'najwer23morsels/lib/button';
import { Grid } from 'najwer23morsels/lib/grid';
import { IconArrowLeft } from 'najwer23morsels/lib/icons';
import { TextBox } from 'najwer23morsels/lib/textbox';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlogRSS } from './BlogRSS.const';

export const BlogArchive: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useDocumentTitle(`Blog, Archive | Mariusz Najwer`);

  const from = location.state?.from as string | undefined;

  const handleBack = () => {
    if (from) {
      navigate(-1);
    } else {
      navigate('/blog', { replace: true });
    }
  };

  return (
    <Grid layout="container" widthMax="1400px" padding="clamp(40px, 8vw, 60px) 20px 40px 20px">
      <Button
        type="button"
        onClick={handleBack}
        backgroundColor="orangered"
        height="50px"
        width="50px"
        margin={'0 0 15px'}
        title="Back"
        backgroundColorDisabled="#4d4d4d"
      >
        <IconArrowLeft width={24} height={24} color="white" />
      </Button>

      <Grid layout="container" widthMax="900px" minHeight="415px" margin="40px 0 60px">
        <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500} margin="0 0 40px">
          Archive
        </TextBox>

        {BlogRSS.map(({ title, link }) => (
          <div style={{ margin: '0 0 10px 0' }} key={link}>
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
