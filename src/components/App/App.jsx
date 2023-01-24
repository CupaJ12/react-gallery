import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
// import galleryItems from '../../../server/modules/gallery.data';


function App() {

  const [galleryItems, setGalleryItems] = useState([]);
//on pageload
  useEffect(() => {
    console.log('does it work?');
    getGallery();
  }, []);

  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('Get response', response);
      setGalleryItems(response.data);
    })
    .catch(function (err) {
      console.log('Error:', err);
    })
  }  







    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
        galleryListProp={galleryItems}
        getGallery={getGallery}
        />
        
      </div>
    );
}

export default App;
