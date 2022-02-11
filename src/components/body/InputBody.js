import React, { useState } from "react";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillKeyboardFill } from "react-icons/bs";
import { BsVolumeUpFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsShareFill } from "react-icons/bs";
import { RiFileCopy2Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";

const InputBody = ({ englishActive }) => {
  const [inputWord, setInputWord] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const fa_class = searchResult ? "fa-translation" : "translate";
  const words = [
    { word: "hello", meaning: "سلام" },
    { word: "bye", meaning: "خداحافظ" },
    { word: "city", meaning: "شهر" },
    { word: "small", meaning: "کوچک" },
    { word: "an", meaning: "یک" },
  ];
  const handleInput = (word) => {
    let result = findWord(word);
    setInputWord(word);
    console.log(word);
    console.log(searchResult);
    setSearchResult(result.meaning);
  };

  const findWord = (newWord) => {
    const result = words.find(({ word }) => word === newWord);
    return result;
  };

  return (
    <div className="input-container">
      <div className="box">
        <div>
          <textarea
            className="textarea"
            rows={3}
            onChange={(e) => handleInput(e.target.value)}
            value={englishActive ? inputWord : searchResult}
          />
        </div>
        <div className="textarea-footer">
          <div className="footer-division">
            <div className="footer-item">
              <BsFillMicFill className="mic-icon" />
            </div>
            <div className="footer-item">
              <BsVolumeUpFill
                className={!searchResult || !inputWord ? "display" : ""}
              />
            </div>
          </div>
          <div className="footer-division">
            <span className="footer-item">{inputWord.length}/5000</span>
            <div className="footer-item">
              <BsFillKeyboardFill />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          searchResult || inputWord
            ? "translation-side media-translation filled"
            : "translation-side "
        }
      >
        <div className={searchResult ? "fa-translation" : "translation-text"}>
          <div
            className={
              searchResult || inputWord ? "translation-placeholder" : ""
            }
          >
            Translation
          </div>
          <div className="translate-box">
            <div>
              {englishActive ? (
                <div className={searchResult && "fa"}>{searchResult}</div>
              ) : (
                <div className={inputWord && "en"}>{inputWord}</div>
              )}
            </div>
            <div
              className={
                !searchResult || !inputWord ? "translation-placeholder" : ""
              }
            >
              <BsStar className="star-icon" />
            </div>
          </div>
        </div>
        {searchResult || inputWord ? (
          <div className="translation-footer">
            <div className="footer-division">
              <div className="footer-item">
                <BsVolumeUpFill />
              </div>
            </div>
            <div className="footer-division">
              <span className="footer-item">
                <RiFileCopy2Line />
              </span>
              <div className="footer-item">
                <AiOutlineLike />
              </div>
              <div className="footer-item">
                <BsShareFill />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InputBody;

// <div
//   className={
//     searchResult || inputWord
//       ? "translate filled media-translate "
//       : "translate"
//   }
// >
//   <div>
//     <div className="translated-text">
//       <div className="box">
//         <span
//           className={
//             searchResult || inputWord ? "translation-placeholder" : ""
//           }
//         >
//           Translation
//         </span>
//         {englishActive ? searchResult : inputWord}

//         {searchResult || inputWord ? <BsStar className="star-icon" /> : ""}
//       </div>

//       {searchResult || inputWord ? (
//         <div className="textarea-footer">
//           <div className="footer-division">
//             <div className="footer-item">
//               <BsFillMicFill />
//             </div>
//             <div className="footer-item">
//               <BsVolumeUpFill
//                 className={!searchResult || !inputWord ? "display" : ""}
//               />
//             </div>
//           </div>
//           <div className="footer-division">
//             <span className="footer-item">{inputWord.length}/5000</span>
//             <div className="footer-item">
//               <BsFillKeyboardFill />
//             </div>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   </div>
// </div>;
