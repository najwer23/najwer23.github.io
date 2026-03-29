import type { BlogPostSection } from './Blog.types';
import { BlogPostRenderSection } from './BlogPostRenderSection';

export const BlogPost: React.FC<{
  data: {
    sections: BlogPostSection[];
  };
}> = ({ data }) => {
  return (
    <article>
      {data.sections.map((section, index) => (
        <BlogPostRenderSection key={index} section={section} />
      ))}
    </article>
  );
};
