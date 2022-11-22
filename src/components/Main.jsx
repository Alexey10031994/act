import React, { useContext } from 'react';
import './Main.css';

import { MyContext } from '../App';

function Main() {

    const { count, setCount, setName, name, names, setDay, day, setMonth, month, months, setYear, year, setPrice1, price1, price2, setPrice2 } = useContext(MyContext);
    return (
        <>
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
                <p>наступні роботи (надання таких послуг) за рахунком №{count} від {day} {month} {year}

                    р.:
                    <br />
                    <input onChange={(e) => setCount(e.target.value)} value={count} className='count' type="text" />
                    <input onChange={(e) => setDay(e.target.value)} value={day} className='data' type="text" />
                    <select
                        className='month'
                        name="month"
                        onChange={(e) => setMonth(e.target.value)}
                        id={month}
                        value={month} >
                        {
                            months.map((item, key) => (
                                <option key={key} value={item}>{item}</option>
                            ))
                        }
                    </select>
                    <input onChange={(e) => setYear(e.target.value)} value={year} className='year' type="text" />
                </p>
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
        </>
    )
}

export default Main