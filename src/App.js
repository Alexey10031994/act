
import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [day, setDay] = useState(1);
  const [mounth, setMounth] = useState(1);
  const [year, setYear] = useState(2022);



  let names = ['?', 'ООО Інватех', 'ТОВ Урзапчасти'];


  return (
    <div className="App">
      <div className="container">
        <div className="flex">
          <div className="col-1">
            <p className='head'>Затверджую</p>

            <p>Приватний підприємець</p>
            <p>Севастьянов О.В.</p>

            <p className='foot'>____________________________</p>
          </div>

          <div className="col-2">
            <p className='head'>Затверджую</p>

            <select
              name="name"
              onChange={(e) => setName(e.target.value)}
              id={name}
              value={name} >
              {
                names.map((item, key) => (
                  <option key={key} value={item}>{item}</option>
                ))
              }
            </select>


            <p className='foot'>____________________________</p>
          </div>
        </div>

        <h1>АКТ здачі-прийняття робіт</h1>
        <h1>(надання послуг)</h1>

        <div className="text">
          <p>Ми, що нижче підписались представники Замовника {name} , з однієї сторони, і представник Виконавця .</p>
          <p>Приватний підприємець Севастьянов О.В, з другої сторони, склали справжній акт про те, що Виконавцем були проведені</p>
          <p>наступні роботи (надання таких послуг) за рахунком №<input className='count' type="text" /> від <input onChange={(e) => setDay(e.target.value)} value={day} className='data' type="text" /> жовтня <input onChange={(e) => setYear(e.target.value)} value={year} className='year' type="text" />р.:</p>
          <p>Послуги перевезення вантажу:</p>
          <div className="flex">
            <input className='route' type="text" />
            <div className="col-2a">
              <p><input onChange={(e) => setPrice1(e.target.value)} value={price1} className='price-1' type="number" />,<input onChange={(e) => setPrice2(e.target.value)} value={price2} className='price-2' type="number" />грн(без ПДВ 20%)</p>
            </div>
          </div>
          <br />
          <p>Загальна вартість робіт (послуги) склала без ПДВ {price1}грн. {price2}коп.</p>
          <p>ПДВ 0.00 грн.</p>
          <p>Сторони претензій одна до одної не мають.</p>
        </div>


        <div className="flex">
          <div className="col-1">
            <p>Від Виконавця:</p>
            <br />
            <p>____________________________</p>
            <p>{day}</p>
            <p>Приватний підприємець</p>
            <p>Севастьянов О.В.</p>
          </div>
          <div className="col-2">
            <p>Від Виконавця:</p>
            <br />
            <p>____________________________</p>
            <p>Приватний підприємець</p>
            <p>Севастьянов О.В.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
