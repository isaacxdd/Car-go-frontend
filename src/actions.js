import url from "./url"

import { redirect } from "react-router-dom";

// Create Action for Creating Cars
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newCar = {
        brands: formData.get("brands"),
        model: formData.get("model"),
        year: formData.get("year"),
        price: formData.get("price"),
        poster: formData.get("poster")
    }

    // make a request to create a car
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCar)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating Cars
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated car
    const updatedCar = {
        brands: formData.get("brands"),
        model: formData.get("model"),
        year: formData.get("year"),
        price: formData.get("price"),
        poster: formData.get("poster")
    }


    // make a request to update a car
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCar)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting Cars
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a car
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}