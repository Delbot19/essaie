import React from 'react'

function CareScale({scaleValue,careType}) {
    const range = [1, 2, 3]
    const emoji= (careType==='light')? '☀️':'💧'
    function handleClick() {
        (scaleValue===1)?alert(`Cette plante requiert peu ${careType==='light'?'de lumiere':'d\'arrosage'}`):
        (scaleValue===2)?alert(`Cette plante requiert modérement ${careType==='light'?'de lumiere':'d\'arrosage'}`):
        alert(`Cette plante requiert beaucoup ${careType==='light'?'de lumiere':'d\'arrosage'}`)
    }
    return (
        <div  onClick={() => handleClick()}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem && <span key={rangeElem.toString()}>{emoji}</span>
                //{emoji.repeat(scaleValue)}
            )}
        </div>
    )
}
export default CareScale