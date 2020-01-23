import React from 'react'
import Radium from 'radium'
import classes from './Car.css'


// Это шаблон компонента - функция,
// данная функция может принимать в себя некоторые параметры,
// мы в него передаем свойства (props)
// props.name - параметр props и уданного объекта есть поле name 
// name  - совпадает с именем атрибута, который мы задаем в App.js компоненте

/* через class создается обычный реакт компонент */

class Car extends React.Component {
  render() {
    const inputClasses = [classes.input]

    if (this.props.name !== '') {
      inputClasses.push(classes.green)
    } else {
      inputClasses.push(classes.red)
    }

    if (this.props.name.length > 4) {
      inputClasses.push(classes.bold)
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
      <div className={classes.Car} style={style}>
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