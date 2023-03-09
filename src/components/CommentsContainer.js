import React from "react";

const commentsData = [
  { name: "Gaurv Barde", text: "One of the Greatest Video!" },
  { name: "Gaurv Barde", text: "One of the Greatest Video!" },
  { name: "Gaurv Barde", text: "One of the Greatest Video!" },
  {
    name: "Gaurv Barde",
    text: "One of the Greatest Video!",
    replies: [
      {
        name: "Vijay Shinde",
        text: "Replied to comment!",
        replies: [{ name: "Nitin Marathe", text: "Two Nested down comment!" }],
      },
    ],
  },
  { name: "Gaurv Barde", text: "One of the Greatest Video!" },
  { name: "Gaurv Barde", text: "One of the Greatest Video!" },
];

const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="flex items-center my-4 bg-slate-300 p-2 rounded-md">
      <img
        className="h-10 w-10 mr-2"
        alt="user-image"
        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment comment={comment} />
      {comment.replies && (
        <div className="ml-8 p-2 border-l border-black">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
