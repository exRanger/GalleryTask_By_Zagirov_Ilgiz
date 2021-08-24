import React, {useState, useRef} from 'react'
import { GalleryUpploadButton } from './GalleryUpploadButton'
import {Loader} from './Loader'
import { GalleryCollection } from './GalleryCollection'

export const StatesContext =  React.createContext({})


export const Gallery = (orops) => {
    
    let galleryRef = useRef(null)

    let [images, setImages] = useState([])
    let [loading, setLoading] =  useState(false)
    
    let stateLoading = {loading, setLoading}
  
    let dragStartHandler = (e, item) => {} 
      let  dragEndHandler = (e, item) => {
      e.preventDefault() 
      e.target.style.border = 'none'
    }

    let  dragLeaveHandler =(e, item) => {
      e.target.style.border = 'none'
           
    }

    let dragOverHandler = (e, item) => {
      e.preventDefault()
      galleryRef.current.style.border = '5px dashed black'   
    }
  
    let removeItemHandler = (e,item) => {
      images.splice(item,1)
      setImages([...images])
    }

    let dropHandler = (e, item) => {
      e.preventDefault()
      galleryRef.current.style.border = 'none'
      let img = e.dataTransfer.files[0]
      let url = URL.createObjectURL(img);
      setImages([...images,  {width: 300, height: 300, url}])
    } 

    return (
        <div 
        className='gallery'
        ref={galleryRef}
        onDrop={dropHandler}
        draggable={true}
        onDragEnd={dragEndHandler}
        onDragLeave={dragLeaveHandler} 
        onDragOver={dragOverHandler}
        >
            <div className='container'>
              {
                !loading ?  images.length > 0 ?  // if loading  state exist  -> return's gallery of async collection from side server
                <GalleryCollection
                className="gallery__collection"  
                stateLoading={stateLoading} 
                images={images} 
                loading
                removeItemHandler={removeItemHandler} 
               /> 
                // else                                                              <-- there's using `?` operator 
                :<GalleryUpploadButton className="gallery__upload-button" setLoading={setLoading} setImages={setImages}/> 
                // else if
                : <Loader className="gallery__loader"/>
              } 
            </div>
          </div>
    )
}


 
