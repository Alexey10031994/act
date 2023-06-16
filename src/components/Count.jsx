import React, { useEffect, useState } from "react";
import {
  getStrNumbsUpTo10,
  getStrNumbsUpTo20,
  getStrNumbsUpTo100,
  getStrNumbsUpTo1000,
  getStrNumbsUpTo10000,
} from "../getStringNumbsUpTo.js";
import { MyContext } from "../App";
//styles
import "./Count.css";

const units = ["", "Км.", "Год."];

function Count() {
  const {
    count,
    setCount,
    setName,
    name,
    names,
    setNames,
    setDay,
    day,
    setMonth,
    month,
    months,
    setYear,
    year,
    setPrice1,
    price1,
    price2,
    setPrice2,
    nav,
    setNav,
    order,
    setOrder,
    activeEdit,
    setActivEdit,
    activeInputEdit,
    setInputActivEdit,
  } = React.useContext(MyContext);

  const [unit, setUnits] = useState("");

  const [strInput1, setStrInput1] = useState("м.Дніпро - по місту");
  const [strInput2, setStrInput2] = useState("");
  const [strInput3, setStrInput3] = useState("");
  const [strInput4, setStrInput4] = useState("");
  const [strInput5, setStrInput5] = useState("");
  const [strInput6, setStrInput6] = useState("");
  const [strInput7, setStrInput7] = useState("");
  const [strInput8, setStrInput8] = useState("");
  const [strInput9, setStrInput9] = useState("");
  const [strInput10, setStrInput10] = useState("");
  const [strInput11, setStrInput11] = useState("");
  const [strInput12, setStrInput12] = useState("");
  const [strInput13, setStrInput13] = useState("");
  const [strInput14, setStrInput14] = useState("");
  const [strInput15, setStrInput15] = useState("");

  const [strClock1, setStrClock1] = useState("");
  const [strClock2, setStrClock2] = useState("");
  const [strClock3, setStrClock3] = useState("");
  const [strClock4, setStrClock4] = useState("");
  const [strClock5, setStrClock5] = useState("");
  const [strClock6, setStrClock6] = useState("");
  const [strClock7, setStrClock7] = useState("");
  const [strClock8, setStrClock8] = useState("");
  const [strClock9, setStrClock9] = useState("");
  const [strClock10, setStrClock10] = useState("");
  const [strClock11, setStrClock11] = useState("");
  const [strClock12, setStrClock12] = useState("");
  const [strClock13, setStrClock13] = useState("");
  const [strClock14, setStrClock14] = useState("");
  const [strClock15, setStrClock15] = useState("");

  const [strPrice1, setStrPrice1] = useState("");
  const [strPrice2, setStrPrice2] = useState("");
  const [strPrice3, setStrPrice3] = useState("");
  const [strPrice4, setStrPrice4] = useState("");
  const [strPrice5, setStrPrice5] = useState("");
  const [strPrice6, setStrPrice6] = useState("");
  const [strPrice7, setStrPrice7] = useState("");
  const [strPrice8, setStrPrice8] = useState("");
  const [strPrice9, setStrPrice9] = useState("");
  const [strPrice10, setStrPrice10] = useState("");
  const [strPrice11, setStrPrice11] = useState("");
  const [strPrice12, setStrPrice12] = useState("");
  const [strPrice13, setStrPrice13] = useState("");
  const [strPrice14, setStrPrice14] = useState("");
  const [strPrice15, setStrPrice15] = useState("");

  let countTable;

  const strsTable = [
    {
      id: 1,
      input: strInput1,
      setInput: setStrInput1,
      clock: strClock1,
      price: strPrice1,
      setClock: setStrClock1,
      setPrice: setStrPrice1,
      countTable: 0,
    },
    {
      id: 2,
      input: strInput2,
      setInput: setStrInput2,
      clock: strClock2,
      price: strPrice2,
      setClock: setStrClock2,
      setPrice: setStrPrice2,
      countTable: 0,
    },
    {
      id: 3,
      input: strInput3,
      setInput: setStrInput3,
      clock: strClock3,
      price: strPrice3,
      setClock: setStrClock3,
      setPrice: setStrPrice3,
      countTable: 0,
    },
    {
      id: 4,
      input: strInput4,
      setInput: setStrInput4,
      clock: strClock4,
      price: strPrice4,
      setClock: setStrClock4,
      setPrice: setStrPrice4,
      countTable: 0,
    },
    {
      id: 5,
      input: strInput5,
      setInput: setStrInput5,
      clock: strClock5,
      price: strPrice5,
      setClock: setStrClock5,
      setPrice: setStrPrice5,
      countTable: 0,
    },
    {
      id: 6,
      input: strInput6,
      setInput: setStrInput6,
      clock: strClock6,
      price: strPrice6,
      setClock: setStrClock6,
      setPrice: setStrPrice6,
      countTable: 0,
    },
    {
      id: 7,
      input: strInput7,
      setInput: setStrInput7,
      clock: strClock7,
      price: strPrice7,
      setClock: setStrClock7,
      setPrice: setStrPrice7,
      countTable: 0,
    },
    {
      id: 8,
      input: strInput8,
      setInput: setStrInput8,
      clock: strClock8,
      price: strPrice8,
      setClock: setStrClock8,
      setPrice: setStrPrice8,
      countTable: 0,
    },
    {
      id: 9,
      input: strInput9,
      setInput: setStrInput9,
      clock: strClock9,
      price: strPrice9,
      setClock: setStrClock9,
      setPrice: setStrPrice9,
      countTable: 0,
    },
    {
      id: 10,
      input: strInput10,
      setInput: setStrInput10,
      clock: strClock10,
      price: strPrice10,
      setClock: setStrClock10,
      setPrice: setStrPrice10,
      countTable: 0,
    },
    {
      id: 11,
      input: strInput11,
      setInput: setStrInput11,
      clock: strClock11,
      price: strPrice11,
      setClock: setStrClock11,
      setPrice: setStrPrice11,
      countTable: 0,
    },
    {
      id: 12,
      input: strInput12,
      setInput: setStrInput12,
      clock: strClock12,
      price: strPrice12,
      setClock: setStrClock12,
      setPrice: setStrPrice12,
      countTable: 0,
    },
    {
      id: 13,
      input: strInput13,
      setInput: setStrInput13,
      clock: strClock13,
      price: strPrice13,
      setClock: setStrClock13,
      setPrice: setStrPrice13,
      countTable: 0,
    },
    {
      id: 14,
      input: strInput14,
      setInput: setStrInput14,
      clock: strClock14,
      price: strPrice14,
      setClock: setStrClock14,
      setPrice: setStrPrice14,
      countTable: 0,
    },
    {
      id: 15,
      input: strInput15,
      setInput: setStrInput15,
      clock: strClock15,
      price: strPrice15,
      setClock: setStrClock15,
      setPrice: setStrPrice15,
      countTable: 0,
    },
  ];

  const numberInString = (numberPrice1, price2) => {
    if (
      numberPrice1.length > 5 ||
      numberPrice1 === "00" ||
      numberPrice1 === "000" ||
      numberPrice1 === "0000" ||
      numberPrice1 === "00000"
    ) {
      return `Вивели більше 5 цифр або поставили 0 на початку рядка!`;
    }

    if (!numberPrice1 || numberPrice1 === "0") {
      return `Введіть значення. ${price2} коп.`;
    }
    if (numberPrice1.length === 1) {
      switch (numberPrice1) {
        case "1":
          return `Одна грн. ${price2} коп.`;
        case "2":
          return `Дві грн. ${price2} коп.`;
        case "3":
          return `Три грн. ${price2} коп.`;
        case "4":
          return `Чотири грн. ${price2} коп.`;
        case "5":
          return `П'ять грн. ${price2} коп.`;
        case "6":
          return `Шість грн. ${price2} коп.`;
        case "7":
          return `Сім грн. ${price2} коп.`;
        case "8":
          return `Вісім грн. ${price2} коп.`;
        case "9":
          return `Дев'ять грн. ${price2} коп.`;
        default:
          return `Нуль грн. ${price2} коп.`;
      }
    }
    if (numberPrice1.length === 2 && numberPrice1[0] === "1") {
      switch (numberPrice1) {
        case "10":
          return `Десять грн. ${price2} коп.`;
        case "11":
          return `Одинадцять грн. ${price2} коп.`;
        case "12":
          return `Дванадцять грн. ${price2} коп.`;
        case "13":
          return `Тринадцять грн. ${price2} коп.`;
        case "14":
          return `Чотирнадцять грн. ${price2} коп.`;
        case "15":
          return `П'ятнадцять грн. ${price2} коп.`;
        case "16":
          return `Шістнадцять грн. ${price2} коп.`;
        case "17":
          return `Сімнадцять грн. ${price2} коп.`;
        case "18":
          return `Вісімнадцять грн. ${price2} коп.`;
        case "19":
          return `Дев'ятнадцять грн. ${price2} коп.`;
        default:
          return `Нуль грн. ${price2} коп.`;
      }
    }
    if (numberPrice1.length === 2) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])} 
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (numberPrice1.length === 3 && !(numberPrice1[1] === "1")) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}`:
          return `${getStrNumbsUpTo1000(numberPrice1[0])} 
                    ${getStrNumbsUpTo100(numberPrice1[1]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[2]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (numberPrice1.length === 3) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}`:
          return `${getStrNumbsUpTo1000(numberPrice1[0])} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[1]}${numberPrice1[2]}`
                    ).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (numberPrice1.length === 4 && !(numberPrice1[2] === "1")) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}`:
          return `${getStrNumbsUpTo10000(numberPrice1[0])} 
                    ${getStrNumbsUpTo1000(numberPrice1[1]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[3]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (numberPrice1.length === 4) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}`:
          return `${getStrNumbsUpTo10000(numberPrice1[0])} 
                    ${getStrNumbsUpTo1000(numberPrice1[1]).toLowerCase()} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[2]}${numberPrice1[3]}`
                    ).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (
      numberPrice1.length === 5 &&
      numberPrice1[0] === "1" &&
      !(numberPrice1[3] === "1")
    ) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo20(
            `${numberPrice1[0]}${numberPrice1[1]}`
          )} тисяч 
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[3]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (
      numberPrice1.length === 5 &&
      !(numberPrice1[0] === "1") &&
      !(numberPrice1[3] === "1") &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "11" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "12" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "13" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "14" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "15" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "16" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "17" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "18" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "19"
    ) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])}
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} тисяч
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[3]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} 
                грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (numberPrice1.length === 5 && numberPrice1[0] === "1") {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo20(
            `${numberPrice1[0]}${numberPrice1[1]}`
          )} тисяч 
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[3]}${numberPrice1[4]}`
                    ).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (
      numberPrice1.length === 5 &&
      !(numberPrice1[0] === "1") &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "11" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "12" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "13" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "14" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "15" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "16" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "17" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "18" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "19"
    ) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])}
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} тисяч
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[3]}${numberPrice1[4]}`
                    ).toLowerCase()} 
                грн.${price2} коп.`;
        default:
          return ``;
      }
    }
    if (numberPrice1.length === 5 && !(numberPrice1[0] === "1")) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])}
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} тисяч
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[3]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} 
                  
                грн.${price2} коп.`;
        default:
          return ``;
      }
    }
  };

  const addItemToArrNames = () => {
    let newId = names[names.length - 1].id + 1;
    console.log(newId);

    setNames([...names, { name: name, id: newId }]);

    alert(`Ви добавили нову назву ${name}`);
    setInputActivEdit(!activeInputEdit);
    setOrder([...order, { name: name, id: newId }]);
  };

  const removeItemInArrNames = (name) => {
    if (
      names.length > 1 &&
      (names !== "?" ||
        names !== 'ПП "НПФ СВК"' ||
        names === 'ТОВ ВКФ "Інватех"')
    ) {
      const objDelete = names.find((item) => item.name === name);
      const objFilter = names.filter((item) => item !== objDelete);
      setNames(objFilter);
      alert(`Ви видалили назву ${name}`);

      console.log(objDelete, objFilter);
    }
  };

  return (
    <>
      <h2 className="bold-italic margin5">ПП Севастьянов О.В.</h2>
      <h2 className="bold-italic">UA66 305299 00000 26001050202399</h2>
      <p className="tac">код ПІН 2666600291</p>
      <div className="title">
        <p className="bold">Платник</p>

        {activeInputEdit ? (
          <>
            <select
              className="select-tac"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            >
              {names.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <img
              onClick={() => removeItemInArrNames(name)}
              src="./icon/delete.png"
              alt="del"
              width={19}
              className="img__del"
            />
            <img
              onClick={() => setInputActivEdit(!activeInputEdit)}
              className="img__edit"
              src="./icon/editing.png"
              alt="img__edit"
              width={16}
            />
          </>
        ) : (
          <>
            <input
              className="input-tac"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <img
              onClick={() => addItemToArrNames(name)}
              src="./icon/accept.png"
              alt="accept"
              width={20}
              className="img__accept"
            />

            <img
              onClick={() => setInputActivEdit(!activeInputEdit)}
              className="img__close"
              src="./icon/close.png"
              alt="img__close"
              width={16}
            />
          </>
        )}
        {/* <select
                    className='select-tac'
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                    {
                        names.map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))
                    }

                </select> */}
      </div>

      <h2 className="bold-italic letter-sp">
        Рахунок №
        <input
          onChange={(e) => setCount(e.target.value)}
          value={count}
          className="input-count"
          type="text"
        />
      </h2>
      <p className="tac">
        "{day}" {month} {year}р.
      </p>

      <table>
        <thead>
          <tr>
            <th className="table__col-1" id="ver">
              <p>Найменування</p>
            </th>
            <th className="table__col-2" id="ver">
              <p>
                Од.
                <br />
                вим.
              </p>
            </th>
            <th className="table__col-3" id="ver">
              <p>К-сть</p>
            </th>
            <th className="table__col-4" id="ver">
              <p>Ціна</p>
            </th>
            <th className="table__col-5">
              <p>Сума</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="table__text-a-left" id="ver">
              <p>Послуги перевезення вантажу.</p>
            </th>
            <th id="ver"></th>
            <th id="ver"></th>
            <th id="ver"></th>
            <th></th>
          </tr>
          {strsTable.map((item) => (
            <tr key={item.id}>
              <th id="ver">
                <input
                  value={item.input}
                  onChange={(e) => item.setInput(e.target.value)}
                  className="table__input-text"
                  type="text"
                />
              </th>
              <th id="ver">
                <select
                  className="table__select"
                  name="units"
                  onChange={(e) => setUnits(e.target.value)}
                >
                  {units.map((item, id) => (
                    <option key={id} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </th>
              <th id="ver">
                <input
                  className="table__input-number"
                  type="number"
                  value={item.clock}
                  onChange={(e) => item.setClock(e.target.value)}
                />
              </th>
              <th id="ver">
                <input
                  className="table__input-number"
                  type="number"
                  value={item.price}
                  onChange={(e) => item.setPrice(e.target.value)}
                />
              </th>
              <th>
                <p>
                  {item.clock === "" || item.price === ""
                    ? ""
                    : (item.countTable = (
                        Number(item.clock) * Number(item.price)
                      ).toFixed(2))}
                </p>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <tfoot>
          <tr>
            <th id="ver" className="tfoot__col-1 bold">
              Всього до сплати :
            </th>
            <th id="ver" className="tfoot__col-2">
              Разом
            </th>
            <th className="tfoot__col-3">
              {strsTable
                .map((item) => Number(item.countTable))
                .reduce((summ, count) => summ + count)
                .toFixed(2)
                .replace(".", ",")}
            </th>
          </tr>
          <tr>
            {activeEdit ? (
              <th id="ver" className="tfoot__col-1 relative">
                {numberInString(
                  strsTable
                    .map((item) => Number(item.countTable))
                    .reduce((summ, count) => summ + count)
                    .toFixed(2)
                    .slice(
                      0,
                      strsTable
                        .map((item) => Number(item.countTable))
                        .reduce((summ, count) => summ + count)
                        .toFixed(2)
                        .replace(".", ",").length - 3
                    ),

                  strsTable
                    .map((item) => Number(item.countTable))
                    .reduce((summ, count) => summ + count)
                    .toFixed(2)
                    .slice(
                      strsTable
                        .map((item) => Number(item.countTable))
                        .reduce((summ, count) => summ + count)
                        .toFixed(2)
                        .replace(".", ",").length - 2,
                      strsTable
                        .map((item) => Number(item.countTable))
                        .reduce((summ, count) => summ + count)
                        .toFixed(2)
                        .replace(".", ",").length
                    )
                )}

                <img
                  onClick={() => setActivEdit(!activeEdit)}
                  className="absolute"
                  src="./icon/editing.png"
                  alt="edit"
                  width={16}
                />
              </th>
            ) : (
              <th id="ver" className="tfoot__col-1 relative">
                <input className="table__input-text" type="text" />
                <img
                  onClick={() => setActivEdit(!activeEdit)}
                  className="absolute"
                  src="./icon/close.png"
                  alt="edit"
                  width={16}
                />
              </th>
            )}

            <th id="ver" className="tfoot__col-2">
              ПДВ
            </th>
            <th className="tfoot__col-3" colSpan="2">
              --------------
            </th>
          </tr>
          <tr>
            <th id="ver" className="tfoot__col-1"></th>
            <th id="ver" className="tfoot__col-2">
              Всього :
            </th>
            <th className="tfoot__col-3">
              {strsTable
                .map((item) => Number(item.countTable))
                .reduce((summ, count) => summ + count)
                .toFixed(2)
                .replace(".", ",")}
            </th>
          </tr>
        </tfoot>
      </table>

      <p className="bold margin5">Директор _______________________</p>

      <button onClick={() => window.print()} className="btn">
        Друкувати
      </button>

      {/* {inputs.map((v, i) => (
                <div key={i}>
                    <input value={v} onChange={e => setInput(i, e.target.value)} />
                </div>))} */}

      {/* <div className='table'>
                <div className='table-gor__2px'></div>
                <div className="table__header">
                    <p className='table__col-1'>Найменування</p>
                    <p className='table__col-2'>Од.<br />вим.</p>
                    <p className='table__col-3'>К-сть</p>
                    <p className='table__col-4'>Ціна</p>
                    <p className='table__col-5'>Сума</p>
                </div>
                <div className='table-gor__2px'></div>
                <input className='table-text__input' type="text" />
                <div className='table-gor__1px'></div>
            </div> */}
    </>
  );
}

export default Count;
