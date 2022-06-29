import { useState } from "react";
import { useNavigate } from 'react-router-dom'
// import SubmitBtn from "../SubmitBtn";
import TextArea from "../TextArea";
import img from "../../../assets/img/logo/vector.png"
import './style.css'
//group c- yehoshua
// changes on css by shaul

export default function Questions() {

  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      questionOne: formData.get("questionOne"),
      questionTwo: formData.get("questionTwo"),
      questionThree: formData.get("questionThree"),
      questionFour: formData.get("questionFour")
    };
    const name = e.target.name;
    const value = e.target.value;
    setFormData((currentFormData) => {
      console.log(formData)
      return {
        ...currentFormData,
        [name]: value,
      };
    });
    const sendToDb = (body) => {
      //i need the create function to send it to db
      // body to db 

    }
    // console.log(e.currentTarget)
    console.log(body)
    console.log(e.currentTarget)
    // isFormValid(body)
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


  const onChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // setFormData((currentFormData) => {
    //   console.log(formData)
    //   return {
    //     ...currentFormData,
    //     [name]: value,
    //   };
    // });
    console.log("nope");
  };

  // const joshClick = (e) => {
  //   onSubmit(e)
  //   onChange(e)
  //   // if (isFormValid && sendToDb) {
  //   // }
  // }

  return (
    <div className="form_4questions">
      <form noValidate onSubmit={onSubmit}>
        <div className="form_instructions">
          <h4>Instructions</h4>
          <img src={img} alt="" />
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
      </form>
    </div>
  )
}
