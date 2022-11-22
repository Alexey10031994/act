
import { createContext, useState } from 'react';
import './App.css';
import Main from './components/Main';

export const MyContext = createContext('');

function App() {


  const [count, setCount] = useState(4444);
  const [name, setName] = useState('');
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState('Січня');
  const [year, setYear] = useState(2022);



  let names = ['?', 'ООО Інватех', 'ТОВ Урзапчасти'];
  let months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];


  return (


    <MyContext.Provider value={{ count, setCount, months, names, month, name, price1, price2, day, year, setName, setMonth, setYear, setDay, setPrice1, setPrice2 }}>
      <div className="App">
        <div className="container">
          <Main />
        </div>
      </div>
    </MyContext.Provider>


  );
}

export default App;
