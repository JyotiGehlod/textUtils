import React, { useState} from 'react'


export default function TextForm(props) {
    const [text, setText] =useState("Enter text here");

    const handleUpClick = () =>{
        //console.log("uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Convert to uppercase!', 'successfully');
    }

    const handleUp2Click = () => {
        //console.log("you Clicked lowercase button");
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert('Convert to Lowercase!', 'successfully');

    }
    const handleClearClick = () => {
        //console.log("you Clicked lowercase button");
        let newText= '';
        setText(newText);
        props.showAlert('Clear Text!', 'successfully');

    }

    const handleOnChange = (event) =>{
        //console.log("on Change");
        setText(event.target.value);
        
    }
  
    
      const handleCopy = () =>{
        
        navigator.clipboard.writeText(text);
        props.showAlert('Copy to Clipboard!', 'successfully');


        }

        const handleExtraSpace = () =>{
              let newText = text.split(/[ ]+/);
              setText(newText.join(" "));
            props.showAlert('Remove Extra Space!', 'successfully');

        }

  return (
    <>
    <div className="container">
    <div className="container" style={{color : (props.mode === 'light'?'black':'white')}}>
   <h1>{props.heading}  </h1>   
  <div className="mb-3">
  

  

    <textarea  className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : (props.mode === 'light'?'white':'#1c2d68'), color : (props.mode === 'light'?'black':'white')}}></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleUp2Click}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-warning mx-2" onClick={handleClearClick}>Clear text</button>
  <button disabled={text.length===0} className="btn btn-secondary mx-2" onClick={handleCopy}>Copy text</button>
  <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>

  </div>
  <div className="container my-3" style={{color : (props.mode === 'light'?'black':'white')}}>
    <h1>Your Text Summary</h1>
    {/* <p>{text.trim() === '' ? 0 : text.split(/\s+/).length} words and {text.length} characters</p> */}
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

    <p>{text.trim() === '' ? 0 :0.0008*text.split(" ").length}</p>

    <h2>Preview</h2>
    <p>{text.length>0?text: 'Enter some text above to preview it here'}</p>

  </div>
  </div>
  </>
  )
}
