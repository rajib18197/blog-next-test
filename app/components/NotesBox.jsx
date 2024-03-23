export default function NotesBox({ title, children }) {
  return (
    <div className="notes">
      <h3 className="notes__title">
        <span>{title}</span>
      </h3>

      <p className="notes__description">{children}</p>
    </div>
  );
}
