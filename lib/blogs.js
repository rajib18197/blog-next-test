import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "articles");

export default function getBlogsData() {
  const fileNames = fs.readdirSync(blogsDirectory);

  const allBlogsData = fileNames.map((file) => {
    const id = file.replace(/\.md$/, "");

    const fullPath = path.join(blogsDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterResults = matter(fileContent);

    const blog = {
      id,
      title: matterResults.data.title,
      date: matterResults.data.date,
    };

    return blog;
  });

  return allBlogsData;
}

export async function getBlogData(id) {
  console.log(id);
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResults = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResults.content);

  const contentHTML = processedContent.toString();

  const blogPostWithHTML = {
    id,
    title: matterResults.data.title,
    date: matterResults.data.date,
    contentHTML,
  };

  console.log(blogPostWithHTML);

  return blogPostWithHTML;
}
