import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route


  const {id} = useParams()

  
  const [singleBook,setBooks] = useState([])


  useEffect(()=>{
    // function getdata(){
      axios.get(`http://localhost:8080/books/${id}`).then(res=>{setBooks(res.data)})  
    // }getdata()
    
  },[]);
  
  console.log(Object.keys(singleBook))
  // const {title,imageUrl,author,price,description,section,isbnNumber,review} = singleBook
  
  return (
    <>
      <div className="bookContainer">
           <h2 className="title">{singleBook.title}</h2>
          
        <img className="image" src={singleBook.imageUrl} alt="#" />
        <div className="author">{singleBook.author}</div>
        <div className="description">{singleBook.description}</div>
        <div className="price">{singleBook.price}</div>
        <div className="section">{singleBook.section}</div>
        <div className="isbnNumber">{singleBook.isbnNumber}</div> 
      </div>
    </>
  );
};
