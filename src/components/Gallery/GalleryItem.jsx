import React from 'react'

export const GalleryItem = ({item, className, ...props}) => {
      
    let {url, width, height,} = item
    
    return <React.Fragment>
            <div
                order={props.id}
                key={props.id}
                className={`${className}item-${props.id}`}
                >
                 <button 
                 className={`${className}removeButton`} 
                 onClick={(e) => props.removeItemHandler(e,props.id)}
                 >
                X
                </button>
                <img 
                className={`${className}image-item`} 
                src={url} 
                width={width} 
                height={height}
                />
            </div>
     </React.Fragment>
}
