
import './App.css';

import React,{useState} from 'react'; 
// function App() {
//   let correctText = []
//   let text =
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in"
//     function changeHandle(e){
//       console.log(e)
      
//     }
//   return (
//       <div>
//         <p> {text} </p>
//       <textarea onKeyPress={changeHandle} name="inp-box" id="inp-box" cols="30" rows="10"></textarea>
//       </div>
//   );
// }


// export default App;

function App() {
  return (
    <div>
      <Button />
    </div>
  );
}

function Button() {
  const [score, setScore] = useState(0);
  function buttonClick(e) {
        setScore((score)=>{
            return score+Number(e.target.textContent)
        })
    
  }
  function clickReset(e){
    setScore(0)
  }
  return (
    <div className="button-component">
      <h1 style={{textAlign:'center'}}> Total Score:{score} </h1>
      <button style={{textAlign:'center'}} onClick={clickReset}>Reset</button>
      <br/> <br/>
      <button onClick={buttonClick}>0</button> <br/> <br/>
      <button onClick={buttonClick}>1</button>
      <br /> <br />
      <button onClick={buttonClick}>2</button>
      <br /> <br />
      <button onClick={buttonClick}>3</button>
      <br /> <br />
      <button onClick={buttonClick}>4</button>
      <br /> <br />
      <button onClick={buttonClick}>6</button>
      <br /> <br />
    </div>
  );
}

export default App;

