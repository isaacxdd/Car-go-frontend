import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';
import './Index.css';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const cars = useLoaderData()

    // map over the cars and create a Post component for each car
    return <>
    <div className='logo'>
        <h1>Welcome to Car-go</h1>
        <img src='https://i.pinimg.com/originals/92/46/80/92468054e8e6c0f6abf02d4d35c14a3c.jpg'></img>
    </div>
    <div className="content-container">
        <div className="carForm">
          <div className="createcar">
          <div className="newMovie"><h2>Create a new Car </h2></div>
            <Form action="/create" method="post">
              <fieldset className="car-info">
                <label>Brands</label> 
                <input type="text" name="brands" placeholder="brands"/>
                <label>Model</label>  
                <input type="text" name="model" placeholder="model"/>
                <label>Year</label>  
                <input type="text" name="year" placeholder="year"/>
                <label>Price</label>  
                <input type="text" name="price" placeholder="price"/>       
                <label>Poster</label>  
                <input type="text" name="poster" placeholder="poster"/>       
              </fieldset>
              <input type="submit" value="Create a new Car"/>
            </Form>
          </div>
        </div>   
        </div>  

    {cars.map((car) => <Post key={car.id} post={car}/>)}
    </>

}

export default Index;