import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "smiling",
  "😳": "disbelief",
  "😌": "sad",
  "❤️": "love",
  "😑": "annoyance"
};

var emojiWeKnow = Object.keys(emojiDictionary);
var shoppingList = ["milk","eggs","bread","flowers"];
export default function App() {
  // const [likeCounter,setLikeCounter] =useState(0)
  // const [intialValue, updatedValue] = useState(0)

  // function likeClickHandler() {
  // var newValue = likeCounter + 1;
  // setLikeCounter(newValue)
  // var newValue = intialValue + 1;
  // updatedValue(newValue);

  // }
  // var [setValue, updateValue] = useState("");
  // function inputChangeHandler(e) {
  //   updateValue(e.target.value);
  // }

  const [meaning,updateMeaning] = useState("")

  function emojiChangeHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];
    if(meaning === undefined){
      meaning = "We don't have this in our database";
    }
    updateMeaning(meaning)
  }

  function emojClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    updateMeaning(meaning)
  }
 return (
    <div className="App">
      {/* <h1>Inside Outt</h1> */}
      {/* <button onClick={likeClickHandler}>Like me</button> */}
      {/* <h1>{likeCounter}</h1> */}
      {/* {intialValue} */}
      {/* <input onChange={inputChangeHandler}></input> */}
      {/* <h1>Welcome {setValue}</h1> */}
      <h1>Emoji Expression</h1>
      <input onChange={emojiChangeHandler}></input>
      <h2>meaning {meaning} </h2>
      {/* <h1> <span> 🙂😳😌❤️😑 </span> </h1> */}

      {/* <ul>

          {
            shoppingList.map((elm) => {
              return <li>{elm}</li>
            })
          }

      </ul> */}
      <h3>emojis we know</h3>
      {
        emojiWeKnow.map(function(emoji){
          return <span 
          onClick = {() => emojClickHandler(emoji)}
          key={emoji} style={{fontSize : "2rem",padding: "0.5rem",cursor:"pointer"}}>{emoji}</span>;
        })
      }
    </div>
  );
}
