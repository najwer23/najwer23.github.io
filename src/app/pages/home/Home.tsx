import { TextBox } from 'najwer23snacks/lib/Textbox';
import { Grid } from 'najwer23snacks/lib/Grid';
import { useDocumentTitle } from '@najwer23/utils/hooks/useDocumentTitle';

export const Home: React.FC<{
  title: string;
}> = ({ title }): JSX.Element => {
  useDocumentTitle(title);

  return (
    <Grid widthMax={1400} layout="container" padding="10px 10px 10px 10px" margin="auto">
      <Grid widthMax={900} layout="container" padding="0" margin="auto">
        <TextBox tag="h1">Frontend Software Engineer</TextBox>
        <TextBox>
          Mariusz Najwer is passionate and detail-oriented Software Engineer dedicated to building responsive and user-friendly web
          applications. He is proficient in modern JavaScript frameworks, particularly React and Angular, with a strong
          foundation in HTML5, CSS3, and responsive design principles. Skilled in collaborating with cross-functional
          teams to deliver seamless user experiences and optimize application performance. Committed to staying updated
          with the latest industry trends and best practices in frontend development and UX/UI design.
        </TextBox>

        <TextBox tag="h2">Social media</TextBox>
        <ul>
          <li>
            <TextBox href="https://github.com/najwer23" target="_blank">
              github.com/najwer23
            </TextBox>
          </li>
          <li>
            <TextBox href="https://x.com/najwer23" target="_blank">
              x.com/najwer23
            </TextBox>
          </li>
          <li>
            <TextBox href="https://www.linkedin.com/in/najwer23" target="_blank">
              linkedin.com/in/najwer23
            </TextBox>
          </li>
          <li>
            <TextBox href="https://www.npmjs.com/~najwer23" target="_blank">
              npmjs.com/~najwer23
            </TextBox>
          </li>
          <li>
            <TextBox href="https://leetcode.com/u/najwer23" target="_blank">
              leetcode.com/u/najwer23
            </TextBox>
          </li>
        </ul>

        <TextBox tag="h2">Proven Track Record of Delivering High-Quality Projects</TextBox>
        <ul>
          <li>
            <TextBox>
              10+ years of experience in web development, delivering high-quality projects for clients across various
              industries
            </TextBox>
          </li>
          <li>
            <TextBox>
              Demonstrated ability to translate business requirements into technical solutions and deliver projects on
              time and within budget
            </TextBox>
          </li>
          <li>
            <TextBox>
              Skilled in agile methodologies and proficient in tools like Git, Jira, and Confluence for efficient
              project management and collaboration
            </TextBox>
          </li>
        </ul>

        <TextBox tag="h2">Expertise in Modern Frontend Technologies</TextBox>
        <ul>
          <li>
            <TextBox>
              Proficient in JavaScript, TypeScript, React, Angular, Remix, Svelte, and other modern frontend frameworks
              and libraries
            </TextBox>
          </li>
          <li>
            <TextBox>
              Experienced in building responsive and mobile-first web applications using HTML5, CSS3, and responsive
              design principles
            </TextBox>
          </li>
          <li>
            <TextBox>Skilled in implementing RESTful APIs and consuming data from backend services</TextBox>
          </li>
          <li>
            <TextBox>Knowledgeable in state management libraries like Redux, MobX, and NgRx </TextBox>
          </li>
        </ul>

        <TextBox tag="h2">Strong Problem-Solving and Analytical Skills</TextBox>
        <ul>
          <li>
            <TextBox>
              Excellent problem-solving and analytical skills with the ability to break down complex problems and devise
              efficient solutions
            </TextBox>
          </li>
          <li>
            <TextBox>
              Skilled in debugging and troubleshooting web applications, identifying and resolving performance
              bottlenecks and bugs
            </TextBox>
          </li>
          <li>
            <TextBox>
              Adept at writing clean, maintainable, and well-documented code that adheres to best practices and coding
              standards
            </TextBox>
          </li>
          <li>
            <TextBox>Commitment to Continuous Learning and Improvement</TextBox>
          </li>
          <li>
            <TextBox>
              Passionate about staying updated with the latest industry trends, technologies, and best practices in
              frontend development and UX/UI design
            </TextBox>
          </li>
          <li>
            <TextBox>
              Actively participates in online communities, attends conferences and meetups, and contributes to
              open-source projects to expand knowledge and skills
            </TextBox>
          </li>
          <li>
            <TextBox>
              Committed to mentoring and sharing knowledge with junior developers to foster a culture of continuous
              learning and growth
            </TextBox>
          </li>
        </ul>

        <TextBox tag="h2">Effective Communication and Collaboration Skills</TextBox>
        <ul>
          <li>
            <TextBox>
              Excellent communication and interpersonal skills, able to effectively collaborate with cross-functional
              teams, including designers, product managers, and backend developers
            </TextBox>
          </li>
          <li>
            <TextBox>
              Skilled in translating technical concepts into non-technical terms and presenting ideas to stakeholders at
              all levels
            </TextBox>
          </li>
          <li>
            <TextBox>
              Proactive in seeking feedback, incorporating it into the development process, and continuously improving
              the user experience
            </TextBox>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};
