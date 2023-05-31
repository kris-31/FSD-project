import React, { useState } from 'react';
import './CommentBox.css';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);
  const [replyToComment, setReplyToComment] = useState(null);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);

    if (replyToComment) {
      const replyComment = {
        text: comment,
        date: new Date().toLocaleString(),
        user: 'John Doe',
      };
      const updatedCommentsList = commentsList.map((prevComment) => {
        if (prevComment === replyToComment) {
          return {
            ...prevComment,
            replies: prevComment.replies ? [...prevComment.replies, replyComment] : [replyComment],
          };
        }
        return prevComment;
      });
      setCommentsList(updatedCommentsList);
      setReplyToComment(null);
    } else {
      const newComment = {
        text: comment,
        date: new Date().toLocaleString(),
        user: 'John Doe',
      };
      setCommentsList([...commentsList, newComment]);
    }

    setComment('');
  };

  const handleReply = (comment) => {
    setReplyToComment(comment);
  };

  return (
    <div className="comment-box">
      <h3>Leave a Comment</h3>

      {/* Previous comments */}
      {commentsList.length > 0 && (
        <div className="previous-comments">
          <h4>Previous Comments:</h4>
          <ul>
            {commentsList.map((prevComment, index) => (
              <li key={index}>
                <div className="comment-header">
                  <span className="comment-user">{prevComment.user}</span>
                  <span className="comment-date">{prevComment.date}</span>
                </div>
                <div className="comment-text">{prevComment.text}</div>
                <button onClick={() => handleReply(prevComment)}>Reply</button>

                {prevComment.replies && (
                  <ul className="comment-replies">
                    {prevComment.replies.map((reply, replyIndex) => (
                      <li key={replyIndex}>
                        <div className="comment-header">
                          <span className="comment-user">{reply.user}</span>
                          <span className="comment-date">{reply.date}</span>
                        </div>
                        <div className="comment-text">{reply.text}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your comment..."
          value={comment}
          onChange={handleChange}
          required
        />
        <button type="submit">{replyToComment ? 'Reply' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default CommentBox;
