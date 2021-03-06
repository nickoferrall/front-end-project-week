import React, { Component } from "react";
import "./SingleTodoView.css";
import { Route, Link } from "react-router-dom";
import CheckboxContainer from "./Checkbox/CheckboxContainer";

const ReactMarkdown = require("react-markdown/with-html");

const markdown = `
This is my markdown text. Here's a <a href="https://en.wikipedia.org/wiki/HTML">URL</a>, and some markdown code: <code>markdown code</code>.
`;

const SingleTodoView = props => {
  return (
    <div className="view-container">
      <div className="view-card">
        <div className="title">
          {props.reduxProps.todos.map(todo =>
            todo._id === props.match.params.id ? <div>{todo.title}</div> : null
          )}
        </div>
        <div className="cross">
          <Link to={"/"}>
            <i className="fas fa-times" />
          </Link>
        </div>
        <div className="view-subtitle">
          in list <u> Todo List </u>
        </div>
        <div className="labels">
          LABELS
          <div className="label-buttons">
            <button className="label-color" />
            <button className="button-plus">+</button>
          </div>
          <ReactMarkdown source={markdown} escapeHtml={false} />
        </div>
        <div className="body">
          <b>Description</b>
          <div className="text-body">
            {props.reduxProps.todos.map(todo =>
              todo._id === props.match.params.id ? (
                <div>{todo.textBody}</div>
              ) : null
            )}
          </div>
          <b>Add comment</b>
        </div>
        <textarea placeholder="Write a comment..." />
        <CheckboxContainer />
      </div>
    </div>
  );
};

export default SingleTodoView;
