import React from "react"
import  './questions.css';

export default function MoviePage({ pageContext }) {
  return (
    <>
      <div className="content-main">
        <h2>{pageContext.title}</h2>
        <div dangerouslySetInnerHTML={{__html: pageContext.description_text}}></div>
      </div>
    </>
  )
}
