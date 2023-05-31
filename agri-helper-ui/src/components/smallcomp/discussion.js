import React, { useState } from 'react';
import './CommentBox.css';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);

    const newComment = {
      text: comment,
      date: new Date().toLocaleString(),
      user: 'John Doe',
      replies: [],
    };
    setCommentsList([...commentsList, newComment]);
    setComment('');
  };

  const handleReply = (comment) => {
    const replyComment = {
      text: comment,
      date: new Date().toLocaleString(),
      user: 'John Doe',
    };
    const updatedCommentsList = commentsList.map((prevComment) => {
      if (prevComment === comment) {
        return {
          ...prevComment,
          replies: [...prevComment.replies, replyComment],
        };
      }
      return prevComment;
    });
    setCommentsList(updatedCommentsList);
  };

  return (
    <div className="comment-box">
      <h3>Leave a Comment or Ask a Question</h3>

      {/* Previous comments */}
      {commentsList.length > 0 && (
        <div className="previous-comments">
          <h4>Previous Comments and Questions:</h4>
          <ul>
            {commentsList.map((prevComment, index) => (
              <li key={index}>
                <div className="comment-header">
                  <span className="comment-user">{prevComment.user}</span>
                  <span className="comment-date">{prevComment.date}</span>
                </div>
                <div className="comment-text">{prevComment.text}</div>

                {/* Reply form */}
                <form className="reply-form" onSubmit={(e) => {
                  e.preventDefault();
                  handleReply(prevComment);
                }}>
                  <textarea
                    placeholder="Write your reply..."
                    required
                  />
                  <button type="submit">Reply</button>
                </form>

                {/* Comment replies */}
                {prevComment.replies && prevComment.replies.length > 0 && (
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
          placeholder="Write your comment or question..."
          value={comment}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentBox;
