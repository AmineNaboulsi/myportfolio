import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: Date;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'content/blog');

export function getAllBlogPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id,
        slug: id,
        content,
        ...data,
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: slug,
      slug,
      content,
      ...data,
    } as BlogPost;
  } catch (error) {
    return null;
  }
}
