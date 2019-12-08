import React, { Component } from 'react'
import Car from './Car/Car'


 

class App extends Component {

    state = {
        cars: [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        pageTitle: 'React Components'

    }

    changeTitleHandler = () => {
        const oldTitle = this.state.pageTitle

        const newTitle = oldTitle + ' (changed)'

        this.setState({
           pageTitle: newTitle
        })

    }

    render() {
        console.log('Render')
        const divStyle = {
            textAlign: 'center'
        }
        
        const cars = this.state.cars;

// используем фигурные скобки, когда передаем какой-то объект. 
// name и year -  это и есть свойства(props) компонента Car - 
// передаем свойства как значения атрибутов 

       return (
           <div style={divStyle}>
               <h1>{this.state.pageTitle}</h1>
{/* не укзаываем () у функции  changeTitleHandler(), потому что мы добавляем
указатель на функцию, которая выполнится в том момент, когда будет происходить 
событие
если указать скобки, то функция выполнится сразу
*/}
               <button 
               onClick={this.changeTitleHandler}
               >Change title</button>

               <Car 
               name={cars[0].name} 
               year={cars[0].year} 
               onChangeTitle={this.changeTitleHandler}
               />
               <Car 
               name={cars[1].name} 
               year={cars[1].year} />
               <Car 
               name={cars[2].name} 
               year={cars[2].year} />
           </div>
      );


  
}
}

export default App;