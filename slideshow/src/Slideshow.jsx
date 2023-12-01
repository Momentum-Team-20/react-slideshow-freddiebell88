import { useState } from 'react'
import filmData from './data/mega-film-data.json'

export function Slideshow() {
    const [index, setIndex] = useState(0);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const next = () => {
        index === 0 ? setIsFirstSlide(true) : setIsFirstSlide(false) 
        setIndex(index + 1);
    }
  
    const back = () => {
        const lastSlide = filmData.length - 1
        index === lastSlide ? setIsLastSlide(true) : setIsLastSlide(false)
        setIndex(index - 1);
    }
    return (
    <>
        <Slide
            filmTitle={filmData[index].title}
            filmOriginalTitle={filmData[index].original_title}
            key={filmData[index].id}
            releaseDate={filmData[index].release_date}
            description={filmData[index].description}
            coverImage={filmData[index].image}
        />
        <div className='buttons'>
            <button>Start Over</button>
            <button disabled={isFirstSlide} onClick={ back }>Back</button>
            <button onClick={ next }>Next</button>
        </div>
    </>
    )
}

// export default Slideshow

const Slide = ({ filmTitle, filmOriginalTitle, releaseDate, description, coverImage}) => {
    return (
        <div className='slide'>
            <h1>{filmTitle}</h1>
            <p>{filmOriginalTitle}</p>
            <p>{releaseDate}</p>
            <p>{description}</p>
            <img src={coverImage} alt='Movie Poster'/>
        </div>
        
    )
}