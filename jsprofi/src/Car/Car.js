import React from 'react'

// Это шаблон компонента - функция,
// данная функция может принимать в себя некоторые параметры,
// мы в него передаем свойства (props)
// props.name - параметр props и уданного объекта есть поле name 
// name  - совпадает с именем атрибута, который мы задаем в App.js компоненте

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong> {props.year} </strong></p>
        <button onClick={props.onChangeTitle}>Click</button>
        
    </div>
    )