
import { createContext, useState } from 'react';
import './App.css';
import Act from './components/Act';
import Count from './components/Count';
import Header from './components/Header';

import { useLocalStorage } from './hooks/useLocalStorage';

export const MyContext = createContext('');

function App() {

  const [tab, setTab] = useState(true);
  const [order, setOrder] = useState([]);


  const [count, setCount] = useState(4444);
  const [name, setName] = useState('?');

  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState('00');
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState('Січня');
  const [year, setYear] = useState(2022);
  const [nav, setNav] = useState('м.Дніпро');

  const [activeEdit, setActivEdit] = useState(true);
  const [activeInputEdit, setInputActivEdit] = useState(true);


  const [names, setNames] = useLocalStorage([
    {
      id: 1,
      name: '?'
    },
    {
      id: 2,
      name: 'ПП "НПФ СВК"'
    },
    {
      id: 3,
      name: 'ТОВ ВКФ "Інватех"'
    }
  ], 'order')

  let months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];


  // const addItemToArrNames = () => {
  //   let newId = names[names.length - 1].id + 1;
  //   console.log(newId);

  //   setNames([...names, { name: name, id: newId }]);

  //   alert(`Ви добавили нову назву ${name}`);
  //   setInputActivEdit(!activeInputEdit);
  //   setOrder([...order, { name: name, id: newId }]);
  // }

  return (


    <MyContext.Provider value={{ count, setCount, months, names, month, name, price1, price2, day, year, setName, setNames, setMonth, setYear, setDay, setPrice1, setPrice2, nav, setNav, tab, setTab, activeEdit, setActivEdit, activeInputEdit, setInputActivEdit, order, setOrder }}>
      <>
        <Header />
        {tab ?
          <>
            <div className='bckgr-white'></div>
            <div className="gorizontal-a4">
              <div className="container-gorizontal">
                <Count />
              </div>
            </div>
          </>
          :
          <div className="vertical-a4">
            <div className="container-vertical">
              <Act />
            </div>
          </div>
        }






      </>


    </MyContext.Provider>


  );
}

export default App;
