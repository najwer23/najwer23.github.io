import { TextBox } from 'najwer23morsels/lib/textbox';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BlogPostSection } from '../Blog.types';

export const SectionTitle: React.FC<{
  id: number;
  section: Extract<BlogPostSection, { name: 'post-title' }>;
}> = ({ section, id }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <TextBox
        href={`/#/blog/post/${id}`}
        mobileSize={20}
        desktopSize={28}
        onClick={(e) => {
          if (!location.pathname.includes(`/blog/post/${id}`)) {
            e.preventDefault();
            navigate(`/blog/post/${id}`, {
              state: { from: 'blog', id },
            });
          }
        }}
      >
        {section.data.title}
      </TextBox>
      <TextBox mobileSize={14} desktopSize={14} tag="p" color="grey">
        {section.data.date}
      </TextBox>
    </>
  );
};
