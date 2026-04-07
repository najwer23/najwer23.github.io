import { CodeParser } from '@app/codeparser/CodeParser';
import { Grid } from 'najwer23morsels/lib/grid';
import type { BlogPostSection } from '../Blog.types';

export const SectionCode: React.FC<{
  section: Extract<BlogPostSection, { name: 'post-code' }>;
}> = ({ section }) => {
  return (
    <Grid layout={'container'} margin={'30px 0 0 0'} minHeight="0">
      <CodeParser>{section.data.code}</CodeParser>
    </Grid>
  );
};
