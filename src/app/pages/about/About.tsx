import { Grid } from 'najwer23morsels/lib/grid';
import { TextBox } from 'najwer23morsels/lib/textbox';

export const About: React.FC<{}> = () => {
  return (
    <Grid layout="container" widthMax={1400} padding={'40px 20px 20px 20px'}>
      <Grid layout="container" widthMax={700} padding={'0 0 40px 0'} margin={0}>
        <TextBox tag="h2" desktopSize={50} mobileSize={40} fontWeight={500}>
          Hi!
        </TextBox>
      </Grid>
      <Grid layout="container" widthMax={700} padding={'0 0 100px 0'} margin={0}>
        <TextBox tag="p" desktopSize={28} mobileSize={22} fontWeight={400}>
          I am a passionate and detail-oriented Software Engineer with over 10 years of experience specializing in
          modern JavaScript frameworks like React, Angular, Remix, and Svelte. I excel at translating business
          requirements into technical solutions, delivering high-quality, responsive, and mobile-first web applications
          on time and within budget. Committed to writing clean and maintainable code, I thrive in agile environments
          while effectively collaborating with cross-functional teams and mentoring junior developers. I am continuously
          growing by engaging with the tech community, contributing to open-source projects, and staying current with
          industry best practices. My strong problem-solving skills and clear communication allow me to bridge the gap
          between technical concepts and stakeholder needs efficiently.
        </TextBox>
      </Grid>
    </Grid>
  );
};
