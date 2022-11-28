export default function CommentInput({
  focustInput,
  typeComment,
  content,
  setContent,
  handleComment,
}) {
  return (
    <div>
      {typeComment && (
        <div>
          <div className="comments-reply-title">Write a comment</div>
          <div className="comments-form">
            <label>Comment</label>
            <textarea
              ref={focustInput}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
            <button
              onClick={() => {
                content && handleComment();
              }}
            >
              Send comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
