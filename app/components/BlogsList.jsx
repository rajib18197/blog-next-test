import getBlogsData from "@/lib/blogs";
import BlogRow from "./BlogRow";
import Link from "next/link";

// https://media.licdn.com/dms/image/D4E22AQHx50SHtAqgQA/feedshare-shrink_1280/0/1710265722936?e=1713398400&v=beta&t=1jMqOAR-FQhkbixGPN7wtGxcyNO9y8zj9RAAB8gNQUc

export default function BlogsList() {
  const blogs = getBlogsData();
  return (
    <div className="flex flex-col gap-20 mt-4">
      <div className="flex justify-between">
        <Link href={"/"} className="grid grid-cols-2 gap-8 items-center">
          <span className="w-[60px] h-[60px] self-center rounded-full bg-pink-600"></span>
          <div className="flex flex-col justify-center">
            <h3 className="uppercase text-2xl">Ra Ju</h3>
            <p className="text-gray-600 ">@obsession</p>
          </div>
        </Link>

        <div className="Section-title">
          <h3 className="title">
            <span className="name">The Then Mind</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-28">
        {blogs.map((blog) => (
          <BlogRow key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
