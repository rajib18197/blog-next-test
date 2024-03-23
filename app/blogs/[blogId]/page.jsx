import Counter from "@/app/components/Counter";
import NotesBox from "@/app/components/NotesBox";
import getBlogsData, { getBlogData } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function Blog({ params }) {
  const blogs = getBlogsData();
  const { blogId } = params;

  if (!blogs.find((blog) => blog.id === blogId)) notFound();

  const {
    data: { title, date },
    content,
  } = await getBlogData(blogId);

  return (
    <main className="main px-6 flex gap-40 flex-col">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="blog-title capitalize font-bold">{title}</h1>
        <p className="font-bold text-2xl">{date}</p>
      </div>
      <article className="article prose prose-sm md:prose-base lg:prose-lg mx-auto">
        <MDXRemote source={content} components={{ Counter, NotesBox }} />
      </article>
    </main>
  );
}

// <!-- Every Problem is An Opportunity to Show Which Super Hero You Are  -->
// In SSR, components run on the server and on the client also but in this case this is unnecessary as there is no interactiveness associated with those components. React SSR fixed this issue by omitting these components code from sending and running in the browser and reducing the bundle size.

// API Calls / file reading / db calls → generate HTML → download JS (only client components, excluded generated HTML (Thanks to server components)) → hydration

// API Calls / file reading / db calls → generate HTML → download JS (all components including generated HTML JS code also) → hydration

// Another thing: In SSR, db or API calls happens outside components and then injected into the components in the server but db or API calls happens inside components in Server component.
