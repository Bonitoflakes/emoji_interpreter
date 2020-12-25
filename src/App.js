import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍘": "Rice Cracker Emoji",
  "🥨": "Pretzel Emoji",
  "🧇": "Waffle Emoji",
  "🥯": " Bagel Emoji",
  "🥟": "Dumpling Emoji",
  "🧁": "Cupcake Emoji",
  "🥧": "Pie Emoji",
  "🥮": "Moon Cake Emoji",
  "😂": "Face with Tears of Joy",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😭": "Loudly Crying Face",
  "😊": "Smiling Face with Smiling Eyes",
  "💕": "Two Hearts",
  "👌": "Ok Hand",
  "😒": "Unamused Face",
  "😏": "Smirking Face",
  "🎶": "Musical Notes",
  "😉": "Winking Face",
  "🙈": "See-No-Evil Monkey",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "💖": "Sparkling Heart",
  "👍": "Thumbs Up",
  "😩": "Weary Face",
  "🙏": "Folded Hands",
  "😎": "Smiling Face with Sunglasses",
  "😁": "Beaming Face with Smiling Eyes",
  "💯": "Hundred Points",
  "💔": "Broken Heart",
  "💓": "Beating Heart",
  "😃": "Grinning Face with Big Eyes",
  "💚": "Green Heart",
  "😆": "Grinning Squinting Face",
  "👑": "Crown",
  "🔫": "Pistol",
  "👈": "Backhand Index Pointing Left",
  "😫": "Tired Face",
  "😻": "Smiling Cat Face with Heart-Eyes",
  "😚": "Kissing Face with Closed Eyes",
  "🎥": "Movie Camera",
  "😀": "Grinning Face",
  "😤": "Face with Steam from Nose",
  "🕷️": "Spider"
};

let emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("Meaning will appear here..");

  function inputClickHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    setMeaning(emojiDictionary[inputEmoji]);
  }

  function emojiClickHandler(item) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    // console.log(item);
    setMeaning(emojiDictionary[item]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        className="userinput_emote"
        placeholder="Type any emote here.."
        onChange={inputClickHandler}
      />
      <h2 className="emotes_meaning">{meaning}</h2>
      <div className="emotes_icon">
        {emojis.map((item) => (
          <span
            onClick={() => emojiClickHandler(item)}
            className="emojis_printed"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
