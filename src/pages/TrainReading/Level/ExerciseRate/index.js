import React, { useEffect, useState } from "react";
import "../../../../components/common/SubmitBtn";
import SubmitBtn from "../../../..//components/common/SubmitBtn";
<<<<<<< HEAD
// import styles from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";

// function loadFromlocalstorage(){

// }
// function saveTolocalstorage(){

// }
//const LPM2 = useLocation()

const route = "/train_reading_level/Question";
const ExerciseRate = () => {
  function choise(choise) {
    setStatusButton(choise);
    setRate(rate + 1);
  }
  const [statusButtonPrev, setstatusButtonPrev] = useState(0); //כפתור אחרון שנלחץ .נשמר בלוקלסטורג
  const [statusButton, setStatusButton] = useState(""); //איזה כפתור נלחץ
  const [speed, setSpeed] = useState(10); //מהירות
  const [rate, setRate] = useState(0); //לחיצה מספר 1-3
  const [firstChoise, setfirstchoise] = useState(0);
  const [justRight, setjustRight] = useState(false);
  const [objProps1,setObjprops1]=useState()
  const navigate = useNavigate();
  // let oldSpeed=objProps.oldSpeed

  const LPM2 = useLocation();
  // const LPM = LPM2.state.LPM
  const info = LPM2;
  console.log("info", info);
  // console.log("Rate LPM ", LPM);

   const objProps = {
    LPM: 10,
    newLPM: speed,
    round: rate,
    justRigth: false
  }; 
  
  

   LPM2.state = objProps; 
 
  /* console.log("*****",speed,rate,"*****")
  console.log("state", LPM2.state); */
  function sendTo() {
      const objProps1 = {
      LPM: LPM2.state.LPM,
      newLPM: speed,
      round: rate,
      justRight: justRight,
    };  
    
    console.log(objProps1,"objpropsoo1***************j")
     navigate(route, { state: objProps1 }); 
  }
  useEffect(() => {
    // Update the document title using the browser API
    console.log(speed, "speed");
  }, [speed]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(rate, "rate");
    examination();
  }, [rate]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("statusButton", statusButton);

    examination();
  }, [statusButton]);
  useEffect(() => {
init()
}, []);

useEffect(() => {
  init2()
  }, [setObjprops1]);
  
  /* useEffect(() => {
    init3()
    }, [setjustRight]); */





  function print() {
    /* console.log(speed, "speed");  */
  }
  function init(){
    setSpeed(LPM2.state.LPM)
    setRate(LPM2.state.round)
    setjustRight(false)
  }
  function init2(){
    setObjprops1(objProps)
  }
  function init3(){
    setjustRight(true)
  }
  

  function examination() {
    let offsetSpeed = 0;

    if (firstChoise === 0) {
      setfirstchoise(1);
      setstatusButtonPrev(statusButton);
      console.log("start1");
    } else if (statusButtonPrev !== statusButton) {
      setstatusButtonPrev(statusButton);
      offsetSpeed = 1;
      console.log("start2");
    } else offsetSpeed = 2;

    if (statusButton === 1) {
      console.log("db");
      init3()       
      // setjustRigth(true)
       sendTo();
=======
import { useLocation, useNavigate } from "react-router-dom";

// import styles from "./style.module.css";


// function loadFromlocalstorage(){

// }
// function saveTolocalstorage(){

// }
//

const ExerciseRate = () => {

  const LPM2 = useLocation()
  const LPM = LPM2.state.LPM
  console.log("Rate LPM ", LPM);

//  const route = '/train_reading_level/question'

//   const objProps = {
//     LPM: LPM,
//     newLPM: LPM,
//     round: num,
//     justRigth: true / false
//   }
//   function ??????????() {
//     navigate(route, { state: objProps })
//   }


  let count = 1;
  function nojhgfd() {
    console.log("lkjhgf");
  }
  function choise(choise) {
    setStatusButton(choise);
    setRate(rate + 1);
  }
  const [statusButtonPrev, setstatusButtonPrev] = useState(0)//כפתור אחרון שנלחץ .נשמר בלוקלסטורג
  const [statusButton, setStatusButton] = useState(""); //איזה כפתור נלחץ
  const [speed, setSpeed] = useState(10); //מהירות
  const [rate, setRate] = useState(0); //לחיצה מספר 1-3
  useEffect(() => {
    // Update the document title using the browser API
    console.log(speed, "speed");
  }, [speed]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(rate, "rate");
    examination();
  }, [rate]);

  useEffect(() => {
    // Update the document title using the browser API
    console.log(statusButton);

    examination();
  }, [statusButton]);
  function print() {

    /* console.log(speed, "speed");  */

  }
  function examination() {
    let offsetSpeed = 0
    if (statusButtonPrev === 0) {

      offsetSpeed = 2
      setstatusButtonPrev(statusButton)
      console.log("start1")
    }
    else
      if (statusButtonPrev !== statusButton) {
        setstatusButtonPrev(statusButton)
        offsetSpeed = 1
        console.log("start2")
      }
      else offsetSpeed = 2

    if (statusButton === 1) {
      console.log("db");
      /* return */
>>>>>>> 6ef21170bd6237b9449999cd374641373a8ff16b
    }

    if (rate === 3) {
      setSpeed(speed + offsetSpeed);
      console.log("db");
<<<<<<< HEAD
      setjustRight(false)
        sendTo() 
      /* return */
    }

    if (statusButton === 2) {
      setSpeed(speed - offsetSpeed);
      setjustRight(false)
       sendTo() 
    }
    if (statusButton === 3) {
      setSpeed(speed + offsetSpeed);
      setjustRight(false)
       sendTo() 
    }
    print();
=======
      /* return */
    }

    if (statusButton === 2) setSpeed(speed - offsetSpeed);
    if (statusButton === 3) setSpeed(speed + offsetSpeed);

    print()
>>>>>>> 6ef21170bd6237b9449999cd374641373a8ff16b
  }

  return (
    <>
<<<<<<< HEAD
      <input
        type="button"
        value="just right"
        onClick={(e) => choise(1)}
      ></input>
=======
      <input type="button" value="just right" onClick={(e) => choise(1)} ></input>
>>>>>>> 6ef21170bd6237b9449999cd374641373a8ff16b
      <input type="button" value="too fast" onClick={(e) => choise(2)}></input>
      <input type="button" value="too low" onClick={(e) => choise(3)}></input>
      {/* <div><h1>dfmnnnn</h1></div>
     {/*  <SubmitBtn path="" name="Submit" type={"button"} click={nojhgfd}/>  */}
    </>
  );
};

<<<<<<< HEAD
export default ExerciseRate;
=======
export default ExerciseRate;
>>>>>>> 6ef21170bd6237b9449999cd374641373a8ff16b
