import { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom'
// import SubmitBtn from "../SubmitBtn";
import TextArea from "../TextArea";
import img from "../../../assets/img/logo/vector.png"
import { useLocation } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";
import SubmitBtn from "../SubmitBtn";
import TextArea from "../TextArea";
import img from "../../../assets/img/logo/vector.png"
import './style.css'
>>>>>>> 6ef21170bd6237b9449999cd374641373a8ff16b
//group c- yehoshua
// changes on css by shaul

export default function Questions() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      questionOne: formData.get("questionOne"),
      questionTwo: formData.get("questionTwo"),
      questionThree: formData.get("questionThree"),
      questionFour: formData.get("questionFour")
    };
    let test_result= {...body,...location.state}
    const name = e.target.name;
    const value = e.target.value;
    setFormData((currentFormData) => {
      console.log(formData)
      return {
        ...currentFormData,
        [name]: value,
        
      };
    });
    setFormData(test_result)
    const sendToDb = (body) => {
      //i need the create function to send it to db
<<<<<<< HEAD
      // body + to db 
    }
    console.log(body)
    console.log(test_result)

=======
      // body to db 

    }
    // console.log(e.currentTarget)
    console.log(body)
    console.log(e.currentTarget)
    // isFormValid(body)
>>>>>>> 6ef21170bd6237b9449999cd374641373a8ff16b
    navigate("/train_reading_level/result");
  };

  // const isFormValid = (props) => {
  //   if (!props) {
  //       console.log("bonanza");
  //     }
  //     // else{
  //     //   return !isFormValid;
  //     // }
  // };

  return (
    <div className="form_4questions">
      <form noValidate onSubmit={onSubmit}>
        <div className="form_instructions">
          <h4>Instructions</h4>
          <img src={img} alt="" />
<<<<<<< HEAD
          <p>
            “Hello. My name is Inigo Montoya. You killed my father. Prepare to die”
          </p>
        </div>
        <label>
          <TextArea name="questionOne"
            value={formData.questionOne || ''}
          >Who is the main character"
          </TextArea>
        </label>
        <label>
          <TextArea name="questionTwo"
            value={formData.questionTwo || ''}
          >"What can you say about the theme of the story?"
          </TextArea>
        </label>
        <label>
          <TextArea name="questionThree"
            value={formData.questionThree || ''}
          >"Why do you think the author wrote this book?"
          </TextArea>
        </label>
        <label>
          <TextArea name="questionFour"
            value={formData.questionFour || ''}
          >"What do you think is going to happen?"
          </TextArea>
        </label>
        <span>
          {/* <SubmitBtn path={"/train_reading_level/result"} type="submit" name={"done"} onclick={onSubmit}>done</SubmitBtn> */}
          {/* yehoshua  did it */}
          <button className="" type="submit" >done</button>
        </span>
        {/* disabled={!isFormValid()} onSubmit={onSubmit}  */}
         {JSON.stringify(formData)}
=======
          <p>“Hello. My name is Inigo Montoya. You killed my father. Prepare to die”</p>
        </div>
        <TextArea name="questionOne"
          value={formData.questionOne || ''}
          onChange={onChange}>Who is the main character"
        </TextArea>
        <TextArea name="questionTwo"
          value={formData.questionTwo || ''}
          onChange={onChange} >"What can you say about the theme of the story?"
        </TextArea>
        <TextArea name="questionThree"
          value={formData.questionThree || ''}
          onChange={onChange}>"Why do you think the author wrote this book?"
        </TextArea>
        <TextArea name="questionFour"
          value={formData.questionFour || ''}
          onChange={onChange} >"What do you think is going to happen?"
        </TextArea>

        {/* <SubmitBtn path={"/train_reading_level/result"} type="submit" name={"done"} onclick={onSubmit}>done</SubmitBtn> */}
        {/* yehoshua  did it */}
        <button type="submit" className="submit">done</button>
        {/* disabled={!isFormValid()} onSubmit={onSubmit} 
        {/* {JSON.stringify(formData)} */}
>>>>>>> 6ef21170bd6237b9449999cd374641373a8ff16b
      </form>
    </div>
  );
}
