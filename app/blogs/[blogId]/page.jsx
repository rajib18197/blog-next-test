import getBlogsData, { getBlogData } from "@/lib/blogs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Blog({ params }) {
  const blogs = getBlogsData();
  const { blogId } = params;

  if (!blogs.find((blog) => blog.id === blogId)) notFound();

  const { title, date, contentHTML } = await getBlogData(blogId);

  return (
    <main className="px-6 mx-auto">
      <div className="m-4">
        <Link href="/" className="bg-slate-900 text-slate-100 p-2 rounded">
          ← Back to home
        </Link>
      </div>
      <div>
        <h1 className="text-3xl mt-4 mb-6 text-slate-900">{title}</h1>
        <article className="prose prose-a:text-blue-600 lg:prose-xl">
          <Markdown>{contentHTML}</Markdown>
        </article>
      </div>
    </main>
  );
}
