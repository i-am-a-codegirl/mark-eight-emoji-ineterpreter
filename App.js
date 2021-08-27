import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this one in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "yellow" }}>inside outtt</h1>
      <input
        type="text"
        placeholder="enter your emoji and get its meaning inside outtt"
        onChange={emojiInputHandler}
      />

      <h2> {meaning} </h2>
      <h3>Emoji we know</h3>

      {emojiWeKnow.map(function (emoji) {
        return (
          <li
            onClick={() => {
              emojiClickHandler(emoji);
            }}
            style={{
              display: "inline",
              padding: "0.5rem",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </li>
        );
      })}
    </div>
  );
}
