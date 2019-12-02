import React, { Component } from 'react'
import Car from './Car/Car'


export default 

class App extends Component {
    render() {
        const divStyle = {
            textAlign: 'center'
        }
// используем фигурные скобки, когда передаем какой-то объект. 
// name и year -  это и есть свойства(props) компонента Car - 
// передаем свойства как значения атрибутов 

       return (
           <div style={divStyle}>
               <h1>Hello world!</h1>

               <Car name={'Ford'} year={2018}>
               <p style={{color: 'Blue'}}>COLOR</p>
               </Car>
               {/* меняем самозакрывающийся тег на  */}
               <Car name={'Audi'} year={2016}>
                   <p style={{color: 'red'}}>COLOR</p>
               </Car>
            
               <Car name={'Mazda'} year={2010} />

           </div>
      );

    //     return React.createElement(
    //         'div',
    //         {className: 'App'},
    //         React.createElement(
    //             'h1',
    //             null,
    //             'Hello world!'
    //         )
    //     )
    // }
}
}
