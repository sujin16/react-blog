import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let[modal,modal_func] =useState(false);
  let[bname,b_func] =useState('OPEN LIST');
  
  function 변경(){
    modal_func(!modal);
    if(modal ===true) b_func('OPEN LIST');
    else b_func('CLOSE LIST');        
  }
  return (
    <div className="App">
      <Nav/>
      {
      modal === true
      ? <Modal />
      : null
	    }
      <button onClick ={()=>{변경()}}>{bname}</button>
    </div>
  );
}

function Nav(){
  return(
    <div className="black-nav">
      <h2>개발 BLOG</h2>
    </div>
  )
}

function Modal(){
  let [제목,제목바꾸기] = useState(['Java','Python','React']);
  let [날짜,날짜바꾸기] = useState(['2021.08.01','2021.08.02','2021.08.03']);
  let [따봉,따봉변경] =useState([0,0,0]);
  
  function 변경(n){
    var nGood = {... 따봉};
    nGood[n] = nGood[n]+1;
    따봉변경(nGood);
  }
  
  return(
    <div>
      <div className ="list">
        <h2>{제목[0]} <span onClick={()=>{변경(0)}}>🤞</span>{따봉[0]}</h2>
        <p>{날짜[0]}</p><hr/>
      </div>
      <div className ="list">
        <h2>{제목[1]} <span onClick={()=>{변경(1)}}>🤞</span>{따봉[1]}</h2>
        <p>{날짜[1]}</p><hr/>
      </div>
      <div className ="list">
        <h2>{제목[2]} <span onClick={()=>{변경(2)}}>🤞</span>{따봉[2]}</h2>
        <p>{날짜[2]}</p><hr/>
      </div>
    </div>
  )
}

export default App;
