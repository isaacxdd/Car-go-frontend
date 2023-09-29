import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }


    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.brands}</h1>
            <h2>{post.model}</h2>
            <h3>{post.year}</h3>
            <h4>{post.price}</h4>
            <h5>{post.poster}</h5>
            <Link to="/">Back to Index</Link>
        </Link>
    </div>
}

export default Post;