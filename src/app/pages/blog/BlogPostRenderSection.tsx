import type { BlogPostSection } from './Blog.types';

export const BlogPostRenderSection: React.FC<{
  section: BlogPostSection;
}> = ({ section }) => {
  switch (section.name) {
    case 'post-title':
      return <h1>{section.data.title}</h1>;

    case 'post-content':
      return <p>{section.data.content}</p>;

    case 'quote':
      return <blockquote>{section.data.text}</blockquote>;

    case 'group':
      return (
        <div>
          {section.data.children?.map((child: BlogPostSection, index: number) => (
            <BlogPostRenderSection key={index} section={child} />
          ))}
        </div>
      );

    default:
      return null;
  }
};
