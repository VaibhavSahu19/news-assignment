import React from 'react'

//Creates a news card that dynamically renders data from the props.
export const NewsCard = (props) => {
  return (
    <section className="card-container">
        <img src={props.image} alt="news image" className='news-img' />
        <h3 className='news-title'>{props.title}</h3>
        <div className='news-author'>{props.author}</div>
        <p className='news-description'>{props.description}</p>
        <div className='date-div'>
            <div className='news-date'>{props.date}</div>
            <a href={props.urlToNews} className='news-url'>Read Full Article</a>
        </div>
    </section>
  )
}
