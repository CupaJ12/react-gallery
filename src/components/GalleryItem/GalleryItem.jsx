import {useState} from 'react';
import axios from 'axios'

function GalleryItem({ getGallery, goatpicObject}) {

    const incrementLike = () => {
        axios({
            method: 'PUT',
            url: `/Gallery/like/${goatpicObject.id}`
        })
        .then(response => {
            getGallery();
        })
        .catch(err => {
            console.error(err);
            sendStatus(500);
        })
    }

    let [Hidden, setHidden] = useState(true);

// if condition 'hidden' is true then hide image, and show description

    return(
        <div className='GalleryItem'>
            {/* <img src={goatpicObject.path} onClick={() => setHidden(!Hidden)}/> */}
            {Hidden ? <img src={goatpicObject.path} onClick={() => setHidden(!Hidden)}/> : 
            <div className='inGalleryItem' onClick={() => setHidden (!Hidden)}>
               <p>{goatpicObject.description}</p> 
               
            </div>}
            
            <button className='likes' onClick={incrementLike}>Like🥳:{goatpicObject.likes}</button> 
            {/* <p>{goatpicObject.likes}</p> */}
        </div>
    )

}


export default GalleryItem