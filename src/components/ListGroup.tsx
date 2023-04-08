import { Fragment } from "react";

function ListGroup() {
  const items = ["Test1", "Test2", "Test3"];
  return (
    <>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
