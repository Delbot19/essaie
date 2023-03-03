import React from 'react'

function CareScale({scaleValue,careType}) {


    const range = [1, 2, 3]

    const emoji= (careType==='light')? '☀️':'💧'

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem && <span key={rangeElem.toString()}>{emoji}</span>
            )}
        </div>
    )
}
export default CareScale