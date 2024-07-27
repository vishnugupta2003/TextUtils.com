import React,{useState} from 'react'
import PropTypes from 'prop-types'



export default function Practice(props) {

  const[text, setText] = useState("Enter text here");
  

  const onClickFun = () => {
        console.log("Uppercase was clicked" + text);

    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleOnChange = (event) =>{
   setText(event.target.value)
  
   
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.about}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>  
</nav>
<div className="container my-3">
<h1>{props.heading}</h1>
<label htmlFor='mybox' className='form-label'>Example textarea</label>
<textarea className="form-control" id = "mybox" onChange={handleOnChange} value = {text} rows="8" placeholder='Enter text:'></textarea>
</div>
<button className='btn btn-primary' onClick={onClickFun}>convert into upperCase</button>
    </div>
  )
}
Practice.propTypes ={
  title:PropTypes.string.isRequired,
  about:PropTypes.string.isRequired
}
Practice.defaultProps={
  title:"Welcome to my website",
  about:"This is about me"
}