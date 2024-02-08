import React from "react";

export default function Alert(props) {
  return (
    /* props.alert && (and operator)simply means that first it will check if props.alert is true or not. If that only turns out to be false or null, then it will not check the next on that is our <div></div> . We used this becuase initially our props.alert will be null as we have passed null in usestate */
    
    props.alert && (
      <div className="container mt-3">
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {props.alert.msg}
        </div>
        
      </div>
    )
  );
}
