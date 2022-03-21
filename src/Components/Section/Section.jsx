import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    /* Same as Homepage */
  `;
  const {section} = useParams()
  
  const [books,setBooks] = useState([])

  
  const getBooks = () =>{
    function fetchData(url) { 
        axios.get(url).then(res=>{setBooks(res.data)})
        }
        fetchData('http://localhost:8080/books')    
  }
  getBooks();

  console.log(books)
  var result  = books.filter((a)=>{
    return a.section==section
})

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Main className="grid grid-cols-4 sectionContainer">{
      result.map(({ id, imageUrl, title, price })=>(
        <BookCard  id={id} imageUrl={imageUrl} title={title} price={price}  />
      ))}
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      </Main>
    </>
  );
};
