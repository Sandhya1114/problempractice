export default function CommentsBox({ comments, setComments }) {
  return (
    <div>
      <label>Comments:</label>
      <textarea value={comments} onChange={e => setComments(e.target.value)} />
    </div>
  );
}
