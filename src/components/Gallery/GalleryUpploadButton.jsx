import React, { useEffect } from 'react'
import {fetchApi} from '../../api/api'

export const GalleryUpploadButton = ({setImages, setLoading}) => {
    let data
    let clickUploadHandler = async () => {
         setLoading(true)
         data = await fetchApi()
        
        let {galleryImages} = await data
    
        
        
        await setImages([...galleryImages])

        setLoading(false)
    }
     
    return (
        <button className="gallery__uploadButton" type='button' onClick={clickUploadHandler}>Загрузить</button>
    )
}