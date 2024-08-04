import { useState, useEffect } from "react"
import "../assets/css/componentes/card.css"
import { useNavigate, useParams } from "react-router-dom";
import { buscar } from "../api/api";

const Post = ({url}) => {

    const [posts, setposts] = useState({});

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
      buscar(`/posts/${id}`,setposts).catch(()=>{
            navigate("/not-found")
      })  
    },[id])

 return(
   <main className = "container flex flex--center">
     <article className = "card post">
       <h2 className = "post-card__title">{posts.title}</h2>
       <p className = "text__card">{posts.body}</p>
     </article>
   </main>
 )
}

export default Post
