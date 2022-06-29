import React from "react";
import "./style.css";

// Team C
// changes - maxLength added to input and css - 29/6 12:10
const TextArea = (props) => {
<<<<<<< HEAD:src/components/common/TextArea/Index.js
  return (
    <div className="ta_box">
      <div className="form-group">
        <label>{props.children}</label>
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};
=======
    return (
        <div className='ta_box'>
            <div className="form-group">
                <label>{props.children}</label>
                <input type="text" className="form-control" name={props.name} maxLength="30"/>
            </div>
        </div>
    )
}
>>>>>>> binyamin/team-c:src/components/common/TextArea/index.js

export default TextArea;
