import { TextBox } from 'najwer23morsels/lib/textbox';
import { useLocation, useNavigate } from 'react-router-dom';
import type { BlogPostSection } from './Blog.types';

export const BlogPostRenderSection: React.FC<{
  id: number;
  section: BlogPostSection;
}> = ({ section, id }) => {
  const navigate = useNavigate();
  const location = useLocation();

  switch (section.name) {
    case 'post-title':
      return (
        <>
          <TextBox
            href={`/#/blog/post/${id}`}
            mobileSize={16}
            desktopSize={22}
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
        </>
      );

    case 'post-content':
      return <p>{section.data.content}</p>;

    case 'quote':
      return <blockquote>{section.data.text}</blockquote>;

    case 'group':
      return (
        <div>
          {section.data.children?.map((child: BlogPostSection, index: number) => (
            <BlogPostRenderSection key={index} section={child} id={id} />
          ))}
        </div>
      );

    default:
      return null;
  }
};
