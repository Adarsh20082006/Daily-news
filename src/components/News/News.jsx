import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Navbar from "../Navbar/Navbar";


function News() {
    const [news,setNews]=useState([])
    
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`).then(res=>res.json()).then(res=>setNews(res.articles)).catch(error=>console.log(error));
      
    },[])

  return (<>
  <h1 className="text-center text-danger">Latest News {Navbar.qText}</h1>
    <div className="d-flex flex-wrap gap-2 justify-content-center">
 
    {
        news.map((res,index)=>{
        if (!res.title.includes("[Removed]")){
          return  <NewsCard key={index} title={res.title} description={res.description} url={res.url} image={res.urlToImage}/>}
        })
   }
   
    </div>
    </>
);
}

export default News