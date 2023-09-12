import React from "react";

function Notification(props) {
  return (
  
  <div className="h-screen">
    <h1>This is the Notification page!!</h1>
    <p>{props.message}</p>
</div>
  
  
  );
}

export default Notification;
