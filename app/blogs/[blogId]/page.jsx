import getBlogsData, { getBlogData } from "@/lib/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Blog({ params }) {
  const blogs = getBlogsData();
  const { blogId } = params;

  if (!blogs.find((blog) => blog.id === blogId)) notFound();

  const { title, date, contentHTML } = await getBlogData(blogId);

  return (
    <main className="px-6 mx-auto">
      <h1 className="text-3xl mt-4 mb-6">{title}</h1>
      {/* <p className="mt-0">{pubDate}</p> */}
      <article>
        <section
          className="flex flex-col gap-[20px]"
          dangerouslySetInnerHTML={{ __html: contentHTML }}
        />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
