import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
        <h1>{post.brands}</h1>
            <h2>{post.model}</h2>
            <h3>{post.year}</h3>
            <h4>{post.price}</h4>
            <h5>{post.poster}</h5>
      <div style={{ textAlign: "center" }}>
      <Form method="post" action={`/delete/${post.id}`}>
            <button>Delete Car</button>
        </Form>
        <h2>Update Car</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="brands"
            placeholder="brands"
            defaultValue={post.brands}
          />
          <input
            type="text"
            name="model"
            placeholder="model"
            defaultValue={post.model}
          />
          <input
            type="text"
            name="year"
            placeholder="year"
            defaultValue={post.year}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={post.price}
          />
          <input
            type="text"
            name="poster"
            placeholder="poster"
            defaultValue={post.poster}
          />
          <button>Update Car</button>
        </Form>
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  );
}

export default Show;