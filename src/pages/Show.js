import { Link, useLoaderData, Form } from "react-router-dom";
import './Show.css';

function Show(props) {
  const post = useLoaderData();

  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
<div className="car-show">

<div className="car-desc">
  <h1 className="car-brands">{post.brands}</h1>
  <h3 className="car-model">{post.model}</h3>
  <h3 className="car-year">{post.year}</h3>
  <h3 className="car-price">{post.price}</h3>
  <img className="car-poster-show" src={post.poster} alt={post.brands} />
</div>



<div className="car-update">
<h2 className="car-update-show"> Update {post.brands}</h2>
<Form action={`/update/${post.id}`} method="post">
    <input type="text" name="brands" placeholder="Car's brands" defaultValue={post.brands}/>
    <input type="text" name="model" placeholder="Car's model" defaultValue={post.model}/>
    <input type="text" name="year" placeholder="Car's year" defaultValue={post.year}/>
    <input type="text" name="price" placeholder="Car's price" defaultValue={post.price}/>
    <input type="text" name="poster" placeholder="Movie's Poster" defaultValue={post.poster}/>
    <button>Update Car</button>
</Form>
</div>

<div className="car-delete">
<h2 className="car-delete-show">Delete This Car</h2>
<Form action={`/delete/${post.id}`} method="post">
<button>Delete Car</button>
</Form>
</div>

<div> <Link to="/">Back to Index</Link> </div>

</div>
);
}

export default Show;