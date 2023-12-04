import { useState } from 'react'
import filmData from './data/mega-film-data.json'

export function Slideshow() {
    const [index, setIndex] = useState(0);
    // const [isFirstSlide, setIsFirstSlide] = useState(true);
    // const [isLastSlide, setIsLastSlide] = useState(false);

    const next = () => {
        // index === 0 ? setIsFirstSlide(true) : setIsFirstSlide(false) 
        setIndex(index + 1);
        console.log(index);
    }
  
    const back = () => {
        // const lastSlide = filmData.length - 1
        // index === lastSlide ? setIsLastSlide(true) : setIsLastSlide(false)
        setIndex(index - 1);
        console.log(index);
    }

    const startOver = () => {
        setIndex(0);
        console.log(index);
    }

    const last = () => {
        setIndex(filmData.length - 1)
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
            <button disabled={index === 0} onClick={ startOver }>Start Over</button>
            <button disabled={index === 0} onClick={ back }>Back</button>
            <button disabled={index === filmData.length - 1} onClick={ next }>Next</button>
            <button disabled={index === filmData.length - 1} onClick={ last }>Last</button>
        </div>
    </>
    )
}


const Slide = ({ filmTitle, filmOriginalTitle, releaseDate, description, coverImage}) => {
    return (
        <div className='slide'>
            <p className='title'>{filmTitle}</p>
            <p className='text original-title'>{filmOriginalTitle}</p>
            <p className='text date'>{releaseDate}</p>
            <p className='text description'>{description}</p>
            <img src={coverImage} alt='Movie Poster'/>
        </div>
        
    )
}