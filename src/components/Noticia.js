import React from 'react'

const Noticia = ({noticia}) => {

  const {urlToImage, title, description, source, url } = noticia

  const imagen = (urlToImage) ? 
    <div className='card-image'>
      <img src={urlToImage} alt={title}/>
      <span className='card-title'>{source.name}</span>
    </div>
  : <div className='card-image'>
    <img className='medium' src='../../FaviconSamuel.svg' alt='Imagen de la noticia'/>
    </div>;

  return (
   <div className='col s12 m6 l4'>
     <div className='card large'>
        {imagen}
      <div className='card-content'>
        <h4 className='card-title'>{title}</h4>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          className='waves-effect waves-light btn  blue-grey darken-2'
        >
          Ver Noticia Completa</a>
      </div>
     </div>
   </div>

  )
}

export default Noticia
