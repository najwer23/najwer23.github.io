import { TextBox } from 'najwer23morsels/lib/textbox';
import type { BlogPostSection } from '../Blog.types';

export const SectionSubheading: React.FC<{
  section: Extract<BlogPostSection, { name: 'post-subheading' }>;
}> = ({ section }) => {
  return (
    <>
      <TextBox mobileSize={18} desktopSize={20} tag="h3" margin={'30px 0 0'} color="black" fontWeight={800}>
        {section.data.text}
      </TextBox>
    </>
  );
};
