import Link from "next/link";

export default function BlogRow({ blog }) {
  const { id, title, abstract, publishedOn } = blog;

  return (
    <div className="details">
      <div className="details__box">
        <div className="info">
          <Link href={`/blogs/${id}`}>
            <h1 className="heading-1">{title}</h1>
          </Link>
          <p className="date">{new Date(publishedOn).toLocaleDateString()}</p>
        </div>
        {/*  */}
        <div className="box">
          <div className="overview">{abstract}</div>
        </div>
        {/*  */}
        <div className="description">
          <div className="description-box">
            <h1 className="heading">Why React Re-renders Components</h1>
          </div>

          <div className="description-box">
            <h1 className="heading">Why React Re-renders Components</h1>
          </div>

          <div className="description-box">
            <h1 className="heading">Why React Re-renders Components</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
