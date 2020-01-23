import React from 'react'
import Radium from 'radium'
import './Car.css'

// Это шаблон компонента - функция,
// данная функция может принимать в себя некоторые параметры,
// мы в него передаем свойства (props)
// props.name - параметр props и уданного объекта есть поле name 
// name  - совпадает с именем атрибута, который мы задаем в App.js компоненте

/* через class создается обычный реакт компонент */
class Car extends  React.Component {
    render() {
        const inputClasses = ['input']
  
        if (this.props.name !== '') {
          inputClasses.push('green')
        } else {
          inputClasses.push('red')
        }
      
        if (this.props.name.length > 4) {
          inputClasses.push('bold')
        }
      
        const style = {
          border: '1px solid #ccc',
          boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
          ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
            cursor: 'pointer'
          }
        }
      
        return (
          <div className="Car" style={style}>
            <h3>Сar name: {this.props.name}</h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input
              type="text"
              onChange={this.props.onChangeName}
              value={this.props.name}
              className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Delete</button>
          </div>
        )
    }
}



  
export default Radium(Car)

/* оборачиваем компонент Car в функционал пакета Radium */