import React, { useContext } from 'react';
import './Main.css';

import { MyContext } from '../App';

function Main() {
    const { count, setCount, setName, name, names, setDay, day, setMonth, month, months, setYear, year, setPrice1, price1, price2, setPrice2 } = useContext(MyContext);

    const getStrNumbsUpTo10 = (numberPrice1) => {
        if (numberPrice1.length === 1) {
            switch (numberPrice1) {
                case '1':
                    return `Одна`;
                case '2':
                    return `Дві`;
                case '3':
                    return `Три`;
                case '4':
                    return `Чотири`;
                case '5':
                    return `П'ять`;
                case '6':
                    return `Шість`;
                case '7':
                    return `Сім`;
                case '8':
                    return `Вісім`;
                case '9':
                    return `Дев'ять`;
                default:
                    return ``;
            }
        }
    }
    const getStrNumbsUpTo20 = (numberPrice1) => {
        if (numberPrice1.length === 2) {
            switch (numberPrice1) {
                case '10':
                    return `Десять`;
                case '11':
                    return `Одинадцять`;
                case '12':
                    return `Дванадцять`;
                case '13':
                    return `Тринадцять`;
                case '14':
                    return `Чотирнадцять`;
                case '15':
                    return `П'ятнадцять`;
                case '16':
                    return `Шістнадцять`;
                case '17':
                    return `Сімнадцять`;
                case '18':
                    return `Вісімнадцять`;
                case '19':
                    return `Дев'ятнадцять`;
                default:
                    return ``;
            }
        }
    }
    const getStrNumbsUpTo100 = (numberPrice1) => {
        if (numberPrice1.length === 1) {
            switch (numberPrice1) {
                case '1':
                    return `Десять`;
                case '2':
                    return `Двадцять`;
                case '3':
                    return `Тридцять`;
                case '4':
                    return `Сорок`;
                case '5':
                    return `П'ятдесят`;
                case '6':
                    return `Шістдесят`;
                case '7':
                    return `Сімдесят`;
                case '8':
                    return `Вісімдесят`;
                case '9':
                    return `Дев'яносто`;
                default:
                    return ``;
            }
        }
    }
    const getStrNumbsUpTo1000 = (numberPrice1) => {
        if (numberPrice1.length === 1) {
            switch (numberPrice1) {
                case '1':
                    return `Сто`;
                case '2':
                    return `Двісті`;
                case '3':
                    return `Триста`;
                case '4':
                    return `Чотириста`;
                case '5':
                    return `П'ятсот`;
                case '6':
                    return `Шістсот`;
                case '7':
                    return `Сімсот`;
                case '8':
                    return `Вісімсот`;
                case '9':
                    return `Дев'ятсот`;
                default:
                    return ``;
            }
        }
    }
    const getStrNumbsUpTo10000 = (numberPrice1) => {
        if (numberPrice1.length === 1) {
            switch (numberPrice1) {
                case '1':
                    return `Одна тисяча`;
                case '2':
                    return `Дві тисячі`;
                case '3':
                    return `Три тисячі`;
                case '4':
                    return `Чотири тисячі`;
                case '5':
                    return `П'ять тисяч`;
                case '6':
                    return `Шість тисяч`;
                case '7':
                    return `Сім тисяч`;
                case '8':
                    return `Вісім тисяч`;
                case '9':
                    return `Дев'ять тисяч`;
                default:
                    return ``;
            }
        }
    }
    // const getStrNumbsUpTo100000 = (numberPrice1) => {
    //     if (numberPrice1.length === 1) {
    //         switch (numberPrice1) {
    //             case '1':
    //                 return `Десять тисяч`;
    //             case '2':
    //                 return `Двадцять тисяч`;
    //             case '3':
    //                 return `Тридцять тисяч`;
    //             case '4':
    //                 return `Сорок тисяч`;
    //             case '5':
    //                 return `П'ятдесят тисяч`;
    //             case '6':
    //                 return `Шістдесят тисяч`;
    //             case '7':
    //                 return `Сімдесят тисяч`;
    //             case '8':
    //                 return `Вісімдесят тисяч`;
    //             case '9':
    //                 return `Дев'яносто тисяч`;
    //             default:
    //                 return ``;
    //         }
    //     }
    // }


    const numberInString = (numberPrice1) => {
        if (!numberPrice1) {
            return `Нуль грн. ${price2} коп.`;
        }
        if (numberPrice1.length === 1) {
            switch (numberPrice1) {
                case '1':
                    return `Одна грн. ${price2} коп.`;
                case '2':
                    return `Дві грн. ${price2} коп.`;
                case '3':
                    return `Три грн. ${price2} коп.`;
                case '4':
                    return `Чотири грн. ${price2} коп.`;
                case '5':
                    return `П'ять грн. ${price2} коп.`;
                case '6':
                    return `Шість грн. ${price2} коп.`;
                case '7':
                    return `Сім грн. ${price2} коп.`;
                case '8':
                    return `Вісім грн. ${price2} коп.`;
                case '9':
                    return `Дев'ять грн. ${price2} коп.`;
                default:
                    return `Нуль грн. ${price2} коп.`;
            }
        }
        if (numberPrice1.length === 2 && numberPrice1[0] === '1') {
            switch (numberPrice1) {
                case '10':
                    return `Десять грн. ${price2} коп.`;
                case '11':
                    return `Одинадцять грн. ${price2} коп.`;
                case '12':
                    return `Дванадцять грн. ${price2} коп.`;
                case '13':
                    return `Тринадцять грн. ${price2} коп.`;
                case '14':
                    return `Чотирнадцять грн. ${price2} коп.`;
                case '15':
                    return `П'ятнадцять грн. ${price2} коп.`;
                case '16':
                    return `Шістнадцять грн. ${price2} коп.`;
                case '17':
                    return `Сімнадцять грн. ${price2} коп.`;
                case '18':
                    return `Вісімнадцять грн. ${price2} коп.`;
                case '19':
                    return `Дев'ятнадцять грн. ${price2} коп.`;
                default:
                    return `Нуль грн. ${price2} коп.`;
            }
        }
        if (numberPrice1.length === 2) {
            switch (numberPrice1) {
                case `${numberPrice1[0]}${numberPrice1[1]}`:
                    return `${getStrNumbsUpTo100(numberPrice1[0])} 
                    ${(getStrNumbsUpTo10(numberPrice1[1]).toLowerCase())} 
                    грн.${price2} коп.`;
                default:
                    return `Двадцять грн.${price2} коп.`;
            }
        }
        if (numberPrice1.length === 3) {
            switch (numberPrice1) {
                case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}`:
                    return `${getStrNumbsUpTo1000(numberPrice1[0])} 
                    ${(getStrNumbsUpTo100(numberPrice1[1]).toLowerCase())} 
                    ${(getStrNumbsUpTo10(numberPrice1[2]).toLowerCase())} 
                    грн.${price2} коп.`;
                default:
                    return `Двадцять грн.${price2} коп.`;
            }
        }
        if (numberPrice1.length === 4) {
            switch (numberPrice1) {
                case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}`:
                    return `${getStrNumbsUpTo10000(numberPrice1[0])} 
                    ${(getStrNumbsUpTo1000(numberPrice1[1]).toLowerCase())} 
                    ${(getStrNumbsUpTo100(numberPrice1[2]).toLowerCase())} 
                    ${(getStrNumbsUpTo10(numberPrice1[3]).toLowerCase())} 
                    грн.${price2} коп.`;
                default:
                    return `Двадцять грн.${price2} коп.`;
            }
        }
        if (numberPrice1.length === 5) {

            console.log(`${numberPrice1[0]}${numberPrice1[1]}`);
            switch (numberPrice1) {


                case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
                    return `${getStrNumbsUpTo20(`${numberPrice1[0]}${numberPrice1[1]}`)} тисяч 
                    ${(getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase())} 
                    ${(getStrNumbsUpTo100(numberPrice1[3]).toLowerCase())} 
                    ${(getStrNumbsUpTo10(numberPrice1[4]).toLowerCase())} 
                    грн.${price2} коп.`;
                default:
                    return `Двадцять грн.${price2} коп.`;
            }
        }

    }

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
                <p>наступні роботи (надання таких послуг) за рахунком №{count} від "{day}" {month} {year}

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
                <p>Загальна вартість робіт (послуги) склала без ПДВ {price1}грн. {price2}коп.({numberInString(price1)})</p>

                <br />
                <p>ПДВ 0.00 грн.</p>
                <p>Сторони претензій одна до одної не мають.</p>
            </div>

            <br /><br />

            <div className="flex">
                <div className="col-1">
                    <p>Від Виконавця:</p>
                    <br />
                    <p>____________________________</p>
                    <p>"{day}" {month} {year}</p>
                    <p>Приватний підприємець</p>
                    <p>Севастьянов О.В.</p>
                </div>
                <div className="col-2">
                    <p>Від Замовника:</p>
                    <br />
                    <p>____________________________</p>
                    <p>"{day}" {month} {year}</p>
                    <p>{name}</p>
                </div>

            </div>
        </>
    )
}



export default Main;