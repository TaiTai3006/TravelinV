export default function CommentReply({
  focustInput,
  typeComment,
  post_key,
  checkReply,
  setContent,
  setTypeComment,
  setCheckReply,
  content,
  handleReply,
  comment_post_key
}) {
  return (
    <div>
      {!typeComment && post_key === checkReply && (
        <div className="comments-reply">
          <div className="comments-reply-title">Write a comment</div>
          <div className="comments-form">
            <label>Comment</label>
            <div>
              <button
                className="cancel"
                onClick={() => {
                  setContent("");
                  setTypeComment(true);
                  setCheckReply(-1);
                }}
              >
                Click here to cancel reply.
              </button>
            </div>
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
            <button
              onClick={() => {
                content && handleReply(comment_post_key);
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
