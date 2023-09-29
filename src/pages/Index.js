import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const cars = useLoaderData()

    // map over the cars and create a Post component for each car
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a Car</h2>
        <Form method="post" action="/create">
            <input type="text" name="brands" placeholder="brands"/>
            <input type="text" name="model" placeholder="model"/>
            <input type="text" name="year" placeholder="price"/>
            <input type="text" name="price" placeholder="price"/>
            <input type="text" name="poster" placeholder="poster"/>
            <button>Create a new Car</button>
        </Form>
    </div>
    {cars.map((car) => <Post key={car.id} post={car}/>)}
    </>

}

export default Index;