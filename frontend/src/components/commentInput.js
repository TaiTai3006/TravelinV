export default function CommentInput({
  checkReadBlog,
  focustInput,
  commentInput, 
  setCommentInput,
  handleComments
}) {
  return (
    <div>
      {checkReadBlog.replyInput && (
        <div>
          <div className="comments-reply-title">Write a comment</div>
          <div className="comments-form">
            <label>Comment</label>
            <textarea
              ref={focustInput}
              value={commentInput.description}
              onChange={(e) => {
                setCommentInput({...commentInput, description: e.target.value})
              }}
            ></textarea>
            <button
              onClick={() => {
                commentInput.description && handleComments();
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
