import React, { Component } from 'react'
import Car from './Car/Car'


 

class App extends Component {

    state = {
        cars: 
        [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        pageTitle: 'React Components'

    }

    changeTitleHandler = (newTitle) => {
        this.setState({
           pageTitle: newTitle
        })

    }

    handleInput = (event) => {
        // Нативный объект event, поле target и поле value
        // console.log('Changed', event.target.value)
        this.setState({
            pageTitle: event.target.value
        })
    }

    render() {
        console.log('Render')
        const divStyle = {
            textAlign: 'center'
        }
        
        // const cars = this.state.cars;

// используем фигурные скобки, когда передаем какой-то объект. 
// name и year -  это и есть свойства(props) компонента Car - 
// передаем свойства как значения атрибутов 

       return (
           <div style={divStyle}>
               <h1>{this.state.pageTitle}</h1>

               <input type='text' onChange={this.handleInput} />


{/* не укзаываем () у функции  changeTitleHandler(), потому что мы добавляем
указатель на функцию, которая выполнится в том момент, когда будет происходить 
событие если указать скобки, то функция выполнится сразу
*/}
               <button 
               onClick={this.changeTitleHandler.bind(this, 'Changed!')}
               >Change title</button>

               { this.state.cars.map((car, index) => {
                 return (
                     <Car 
                        key={index}
                        name={car.name}
                        year={car.year}
                        onChangeTitle={() => this.changeTitleHandler(car.name)}
                     />

                 )  
               }) }

               {/* <Car 
               name={cars[0].name} 
               year={cars[0].year} 
               onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
               />
               <Car 
               name={cars[1].name} 
               year={cars[1].year} 
               onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
               />
               <Car 
               name={cars[2].name} 
               year={cars[2].year} 
               onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
               /> */}
           </div>
      );


  
}
}

export default App;