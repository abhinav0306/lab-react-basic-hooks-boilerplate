import { useContext, useEffect, useState } from "react";
import { ToggleTheme } from "../App";

function UseContext(){

    const [context,setText] =  useState(false)
    const [noLikes,setLike] =  useState(0)

    useEffect(() => {
        alert("Button Clicked")
    },[context])

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem",


  }

  return(
    <div style={themeStyle}>
      <button className="flex" onClick={() => setText(!context)}>Content</button>
      {context && <h5>React is an open-source JavaScript library developed and maintained by Facebook. It is primarily used for building user interfaces (UIs) for single-page applications where the content can be updated without requiring a full page reload. React allows developers to create reusable UI components and manage the state of those components efficiently.</h5> }
      <br />
      <button className="flex" onClick={() => setLike(noLikes + 1)}>Likes</button>
      <h2>{noLikes}</h2>
    </div>
  )
}

export default UseContext;