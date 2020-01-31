import React, {useEffect,useState,useContext } from "react";

import { DIMENSIONS } from "../../utils/constants";

import Axios from "axios";
import { GameContext } from "../../state/context";

export default function HighScores() {
  const{dispatch,actions} = useContext(GameContext);

const[HighScores,setHighScores] = useState([]);
  useEffect(() =>{
    Axios.get("http://localhost:5000/api/v1/high-scores")
    .then((res)=>{setHighScores(res.data.highScores)})
  },[])
  
  return (
     
      <div style={{margin:"auto",width: DIMENSIONS.DEFAULT.WIDTH}}>
      <h1>High Scores</h1>
        <ol>
          {console.log(HighScores)}
          {HighScores.map(({ initials, score }) => (
            <li>
              {initials}: {score}
            </li>
          ))}
        </ol>
        <button onClick={()=>{dispatch({type:actions.START_GAME})}}>start</button>
        </div>

  );
}
