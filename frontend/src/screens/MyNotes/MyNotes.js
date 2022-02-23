import React from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import ReactMarkdown from "react-markdown";

import {notes} from "../../data/notes"
const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  return (
    <MainScreen title="Welcome Back Srijan Keshri...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
        {notes.map((note) => (
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  align: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>

              <div>
                <Button href={`/notes/${notes._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(notes._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <h4>
                <Badge variant="success">Category - {note.category}</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
                <ReactMarkdown>{note.content}</ReactMarkdown>
                <footer className="blockquote-footer">
                  Created on{" "}
                  <cite title="Source Title">
                    {note.createdAt.substring(0, 10)}
                  </cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
