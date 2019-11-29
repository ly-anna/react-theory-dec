import React from 'react'

// function car() {
//     return(
//         <div>This is car component</div>
//     )
// }

// const car = () => {
//     return (
//         <div>This is car component</div>
//     )
// }

// с использованием стрелочной функции и без
// фигурных скобок и без return- значит будет возврашать то, 
// что идет после стрелки

// const car = () => <div>This is car component</div>

// то же самое, но для многострочных компонентов используем ()

const car = () => (
    <div>This is car component
    <strong>test</strong>
    </div>)

export default car
