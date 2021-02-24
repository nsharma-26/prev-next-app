import React, {useState} from 'react';

function Slides({slides}) {
    
    const initialValue = 0;
    const [count, setCount] = useState(initialValue)
    const [post, setPost] = useState({title: slides[initialValue].title, text:slides[initialValue].text})
    const handlePrev = () => {
        setPost({title: slides[count - 1].title, text:slides[count - 1].text});
        setCount(count - 1)
    }
    const handleNext = () => {
        setPost({title: slides[count + 1].title, text:slides[count + 1].text});
        setCount(count + 1)        
    }
    const restart = () => {
        setCount(initialValue)
        setPost({title: slides[initialValue].title, text:slides[initialValue].text})
    }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart}>Restart</button>
                {
                    count == 0 ?
                    (
                        <button 
                        data-testid="button-prev" className="small" onClick={handlePrev} disabled>Prev</button>
                    )
                    :
                    (
                        <button data-testid="button-prev" className="small" onClick={handlePrev} >Prev</button>
                    )
                }
                {
                    (slides.length - 1) == count ?
                    (
                        <button data-testid="button-next" className="small" onClick={handleNext} disabled>Next</button>
                    )
                    :
                    (
                        <button data-testid="button-next" className="small" onClick={handleNext}>Next</button>
                    )
                }
                
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{post.title}</h1>
                <p data-testid="text">{post.text}</p>
            </div>
        </div>
    );

}

export default Slides;
