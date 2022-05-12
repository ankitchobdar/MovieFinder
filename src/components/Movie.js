import React from 'react'

export default function Movie(props) {
  return (
    <div className="card h-100">
        <img src={props.image} className="card-img-top" alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.crew}</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Imdb Rating {props.rating}</small>
        </div>
    </div>
  )
}
