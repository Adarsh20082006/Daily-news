import React from 'react'

function NewsCard(props) {
  return (
  <>        
    <div   className="card " style={{width:"350px", height:"400px"}}>
        
  <img src={props.image}   className="card-img-top" style={{width:"350px",height:"180px"}} alt="Image"/>
  <div   className="card-body">
    <h5   className="card-title">{props.title.slice(0,50)}...</h5>
    <p   className="card-text">{props.description.slice(0,100)}...</p>
    <a href={props.url} className="btn btn-primary">Read More</a>
  </div>
</div>

  </>
  )
}

export default NewsCard