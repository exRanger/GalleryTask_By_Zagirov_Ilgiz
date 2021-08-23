import React from 'react'

let renderCount = 0;

function IsFive({value}){
      
    console.warn(`is Five render: ${++renderCount}`)

    const getResult = React.useMemo(() => {
        let i = 0;
        while(i < 600000000) i++
        return value === 5 ? 'Это пять' : `Это НЕ пять`
    }, [value])
    return (
    <div>
            <h2>{getResult}</h2>
    </div>
    )
}

export default React.memo(IsFive, (prevProps,nextProps)=>{
     if(nextProps.value === 5){
         return false
     }else{
         return true
     }
})