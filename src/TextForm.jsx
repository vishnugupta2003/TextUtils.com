import React,{ useState } from "react"; 


export default function TextForm(props) {

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }
  const onClickUpper = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase.","success")
  }

  const onClickLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase.","success")

  }

  const onClickClear = () => {
    setText("")
    props.showAlert("text box cleared.","success")
  }

  const onClickSentance = () => {
    let newText = text[0].toUpperCase() + text.slice(1).toLowerCase();
    setText(newText) 
        props.showAlert("converted to sentanceCase.","success")

   }

   const onClickTitle = () => {
    let newText = (text.split(" ").map((value) => value[0].toUpperCase() + value.slice(1).toLowerCase()).toString()).replaceAll("," , " ")
     setText(newText)
         props.showAlert("converted to titleCase.","success")

  
  }
  const onClickCopy = () => {
    let text = document.getElementById('mybox')
    text.select();
    navigator.clipboard.writeText(text.value);
        props.showAlert("copy text on clipboard.","success")

    
  }
  const onClickRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
        props.showAlert("Remove extra space.","success")

  }
  let [text, setText] = useState("");
  // text = "I am text";
  // setText("I am setText");
  const style = {
    display: 'flex',
    justifyContent: "space-evenly",
    marginLeft:'10px'
  }
  return (
    <>
    <form>
    <div className="form-group my-3" style={{color:props.mode === "dark" ? "white" : "#040858"}}>
      <h1 >{props.heading}</h1>
      <textarea className="form-control" value={text} style={{backgroundColor:props.mode === "dark" ? "grey" : "white", color:props.mode === "dark" ? "white" : "#040858"}} onChange={handleOnChange} id="mybox" rows="8" placeholder="Enter text here"></textarea>
        </div>
        <div style={style}>
    <button className='btn btn-primary ' onClick={onClickUpper}>Convert to uppercase</button>
    <button className='btn btn-success mx-2' onClick={onClickLower}>Convert to lowercase</button>
    <button className='btn btn-secondary mx-2' onClick={onClickSentance}>Convert to sentanceCase</button>
    <button className='btn btn-link mx-2' onClick={onClickTitle}>Convert to titlecase</button>
    <button className='btn btn-danger mx-2' onClick={onClickClear}>Clear Text</button>
    <button className='btn btn-info mx-2' onClick={onClickCopy}>Copy text</button>
    <button className='btn btn-warning mx-2' onClick={onClickRemoveSpace}>remove extra space</button>
          </div>
  </form>
  <div className="container my-3" style={{color:props.mode === "dark" ? "white" : "#040858"}}>
    <h2>Your text summary</h2>
    <b>{text.split(" ").length - 1} is word {text.length} is characters</b>
    <h3>Reading time 125 word as per minutes.</h3>
    <b>{text.length > 0 ? 0.008 * text.split(" ").length : "0"} minutes read.</b>
    <h3>Preview</h3>
    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>

  </div>
  </>
  )
}