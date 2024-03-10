import getBlogsData from "@/lib/blogs";
import BlogRow from "./BlogRow";

export default function BlogsList() {
  const blogs = getBlogsData();
  return (
    <div>
      <h1>All Blogs</h1>
      <div>
        {blogs.map((blog) => (
          <BlogRow key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
