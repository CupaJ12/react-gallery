import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryListProp, getGallery}) {
    return (
        
        <>
            {galleryListProp.map(goatpicObject =>
            (

                <GalleryItem goatpicObject={goatpicObject} getGallery={getGallery}
                />
                // <div className='goatPicObject' key={goatpicObject.id}>
                //    < img src={goatpicObject.path} />
                //    <br/>
                //    <button>Like</button>
                //    <p>{goatpicObject.likes}</p>
                // </div>
            )
            )}


        </>
    )
}


                // <GalleryItem 
                // key={GalleryItem.id}
                // path={GalleryList.path}
                // description={GalleryList.description}
                // GalleryList = {GalleryList}
                // likes={GalleryList.likes}
                // />
                // )}
                // {/* <GalleryItem GalleryItem={galleryList}/> */}
        
//     )
// }

export default GalleryList;