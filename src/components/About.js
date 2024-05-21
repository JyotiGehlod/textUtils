import React  from 'react'

export default function About(props) {

  // const[style, setStyle]= useState({
  //     color: 'black',
  //     backgroundColor: 'white'
  //     })
    
 let style = {
    color: props.mode === "dark"? "white": "#042743",
    backgroundColor: props.mode === 'dark'? '#042743': 'white',
    
 }

  return (
    <>
   <div className="container" style={{color: props.mode === "dark"? "white": "#042743"}}>
      <div className="accordion" id="accordionExample" >
        <h1 className="my-3">About Us</h1>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your text</strong>

      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={style} data-bs-parent="#accordionExample">
      <div className="accordion-body">
          This is  a amazing web for use to convert text into uppercase and lowercase also you can use it for copy to clipboard and other features are included       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" filter='invert(1)'>
        <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={style} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtils is a text to audio converter and a text utility that can be used to manipulate your text in the way you want.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Brower Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={style} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    </div>
   
    </>
  )
}
