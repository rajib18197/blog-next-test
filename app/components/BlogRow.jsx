import Link from "next/link";

export default function BlogRow({ blog }) {
  const { id, title, date } = blog;

  return (
    <div>
      <Link href={`/blogs/${id}`}>{title}</Link>
      <p>{new Date(date).toLocaleDateString()}</p>
    </div>
  );
}
