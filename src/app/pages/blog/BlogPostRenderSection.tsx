import type { BlogPostSection } from './Blog.types';
import { SectionP } from './sections/SectionP';
import { SectionTitle } from './sections/SectionTitle';

export const BlogPostRenderSection: React.FC<{
  id: number;
  section: BlogPostSection;
}> = ({ section, id }) => {
  switch (section.name) {
    case 'post-title':
      return <SectionTitle id={id} section={section} />;

    case 'post-p':
      return <SectionP section={section} />;

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
