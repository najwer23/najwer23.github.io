type BlogPostSectionMap = {
  'post-title': {
    title: string;
    date: string;
  };
  'post-p': {
    text: string;
  };
  'post-subheading': {
    text: string;
  };
  'post-code': {
    code: string;
  };
  quote: {
    text: string;
  };
  group: {
    children: BlogPostSection[];
  };
};

export type BlogPostSection = {
  [K in keyof BlogPostSectionMap]: {
    name: K;
    data: BlogPostSectionMap[K];
  };
}[keyof BlogPostSectionMap];

export type BlogPostSectionName = BlogPostSection['name'];

export interface BlogPost {
  id: number;
  title: string;
  sections: BlogPostSection[];
}

export interface BlogManifest {
  numberOfPosts: number;
}
