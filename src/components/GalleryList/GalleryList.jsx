// import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({galleryListProp}) {
    return (
        
        <>
            {galleryListProp.map(goatpicObject =>
            (
                <div className='goatPicObject' key={goatpicObject.id}>
                   < img src={goatpicObject.path} />
                </div>
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