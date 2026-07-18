import { Typography } from 'najwer23morsels/lib/Typography';

import type { BlogPostSection } from '../Blog.types';

export const SectionSubheading: React.FC<{
  section: Extract<BlogPostSection, { name: 'post-subheading' }>;
}> = ({ section }) => {
  return (
    <>
      <Typography appearance="light" variant="subheading">
        {section.data.text}
      </Typography>
    </>
  );
};
