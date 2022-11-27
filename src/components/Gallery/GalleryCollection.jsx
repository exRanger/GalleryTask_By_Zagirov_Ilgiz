import React, {useEffect} from 'react'
import {GalleryItem } from './GalleryItem'
export const GalleryCollection = ({images,className, removeItemHandler }) => {
    className = className.replace('collection', '') + ''
 
       return (
        <React.Fragment>
            {images.map((item, id)=> { 
                  return <GalleryItem  removeItemHandler={removeItemHandler } className={`${className}`} item={item} id={id}/>
            })}            
        </React.Fragment>
    )
} 
