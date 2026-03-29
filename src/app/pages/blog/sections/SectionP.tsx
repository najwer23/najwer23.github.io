import { TextBox } from 'najwer23morsels/lib/textbox';
import type { BlogPostSection } from '../Blog.types';

export const SectionP: React.FC<{
  section: Extract<BlogPostSection, { name: 'post-p' }>;
}> = ({ section }) => {
  return (
    <>
      <TextBox mobileSize={16} desktopSize={18} tag="p" margin={'30px 0 0'}>
        {section.data.text}
      </TextBox>
    </>
  );
};
