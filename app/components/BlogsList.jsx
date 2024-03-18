import getBlogsData from "@/lib/blogs";
import BlogRow from "./BlogRow";

// https://media.licdn.com/dms/image/D4E22AQHx50SHtAqgQA/feedshare-shrink_1280/0/1710265722936?e=1713398400&v=beta&t=1jMqOAR-FQhkbixGPN7wtGxcyNO9y8zj9RAAB8gNQUc

export default function BlogsList() {
  const blogs = getBlogsData();
  return (
    <div className="flex flex-col gap-20 mt-4">
      <div className="Section-title">
        <h3 className="title">
          {/* <span className="brand brand-1">R</span>
          <span className="brand brand-2">A</span> */}
          <span className="name">The Then Mind</span>
          {/* <span className="brand brand-3">J</span>
          <span className="brand brand-4">U</span> */}
        </h3>
      </div>
      <div className="flex flex-col gap-28">
        {blogs.map((blog) => (
          <BlogRow key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
