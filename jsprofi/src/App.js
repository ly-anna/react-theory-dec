import React from 'react';
import { Component } from 'react';
import Car from './Car/Car';

/* Это основной компонент, который создан при помощи ключевого слова class
 и он наследует все свои свойства от React Component, который мы импортируем 
 из библиотеки React.
 App компонент рендерится в index.js, где мы с помощью библиотеки ReactDOM.render 
 и метода render выводим компонент в ДОМ-дерево
*/

class App extends Component {

    state = {
        cars: 
        [
            {name: 'Ford', year: 2018},
            {name: 'Audi', year: 2016},
            {name: 'Mazda', year: 2010}
        ],
        pageTitle: 'React Components',
        showCars: false

    }

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })

    }
    // changeTitleHandler = pageTitle => 
    //     this.setState({pageTitle})
    
    
    onChangeName(name, index) {
        const car = this.state.cars[index]
        car.name = name
        // const cars = this.state.cars.concat() // получаем склонированный массив
        // или можно воспользоваться боле современным способом - спред оператором
        // spread - это многоточие ...
        const cars = [...this.state.cars] 
        // получается мы разворачиваем все элементы данного массива внутри нового массива
        // в cars - мы тут получим новый массив,который будет склонирован
        cars[index] = car
        this.setState({
            cars
            // cars: cars здесь ключ и значение совпадают, поэтому мы можем просто написать cars
            // и JS поймет, что мы хотим поменять именно ключ cars  со значением cars
        })
    }
    deleteHandler(index) {
        const cars = this.state.cars.concat() // создает новую копию массива
        cars.splice(index, 1)
        
        this.setState({cars})
    }

    // handleInput = (event) => {
    //     // Нативный объект event, поле target и поле value
    //     // console.log('Changed', event.target.value)
    //     this.setState({
    //         pageTitle: event.target.value
    //     })
    // }

    render() {
        console.log('Render')
        const divStyle = {
            textAlign: 'center'
        }
        let cars = null

        if (this.state.showCars) {
            cars = this.state.cars.map((car,
                 index) => {
                return (
                    <Car 
                        key={index}
                        name={car.name}
                        year={car.year}
                        onDelete={this.deleteHandler.bind(this, index)}
                        onChangeName={(event) => this.onChangeName(event.target.value, index)}
                    />
                )
            })
        }

        // const cars = this.state.cars;

// используем фигурные скобки, когда передаем какой-то объект. 
// name и year -  это и есть свойства(props) компонента Car - 
// передаем свойства как значения атрибутов 

       return (
           <div style={divStyle}>
               {/* <h1>{this.state.pageTitle}</h1> */}
                <h1>{this.props.title}</h1>
               {/* <input type='text' onChange={this.handleInput} /> */}


{/* не укзаываем () у функции  changeTitleHandler(), потому что мы добавляем
указатель на функцию, которая выполнится в том момент, когда будет происходить 
событие если указать скобки, то функция выполнится сразу
*/}
               <button 
               onClick={this.toggleCarsHandler}
               >Toggle cars</button>

{/* вывод списка машин по нажатию кнопки Toggle cars */}
               {/* {  this.state.showCars 
                    ? this.state.cars.map((car, index) => {
                        return (
                            <Car 
                                key={index}
                                name={car.name}
                                year={car.year}
                                onChangeTitle={() => this.changeTitleHandler(car.name)}
                            />

                        )  
                    }) 
                    :null
               } */}

               { cars }
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