import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");
  const [clicked, setClicked] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isLobster, setIsLobster] = useState(false);
  const [isPacifico, setIsPacifico] = useState(false);
  const [isNormal, setIsNormal] = useState(false);
  const [isPlayfairDisplay, setIsPlayfairDisplay] = useState(false);
  const [isRighteous, setIsRighteous] = useState(false);
  const [isCinzel, setIsCinzel] = useState(false);
  const [isGreatVibes, setIsGreatVibes] = useState(false);

  const handleOnClear = () => {
    if (!clicked) {
      setClicked(true);
      let clearText = "";
      setText(clearText);
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleLobsterClick = () => {
    setIsLobster(true);
    setIsPacifico(false);
    setIsNormal(false);
    setIsPlayfairDisplay(false);
    setIsRighteous(false);
    setIsCinzel(false);
    setIsGreatVibes(false);
  };

  const handlePacificoClick = () => {
    setIsLobster(false);
    setIsPacifico(true);
    setIsNormal(false);
    setIsPlayfairDisplay(false);
    setIsRighteous(false);
    setIsCinzel(false);
    setIsGreatVibes(false);
  };

  const handleNormalClick = () => {
    setText(text.toLowerCase());
    setIsBold(false);
    setIsLobster(false);
    setIsPacifico(false);
    setIsPlayfairDisplay(false);
    setIsRighteous(false);
    setIsCinzel(false);
    setIsGreatVibes(false);
    setIsNormal(true);
  };

  const handlePlayfairDisplayClick = () => {
    setIsLobster(false);
    setIsPacifico(false);
    setIsNormal(false);
    setIsPlayfairDisplay(true);
    setIsRighteous(false);
    setIsCinzel(false);
    setIsGreatVibes(false);
  };

  const handleRighteousClick = () => {
    setIsLobster(false);
    setIsPacifico(false);
    setIsNormal(false);
    setIsPlayfairDisplay(false);
    setIsRighteous(true);
    setIsCinzel(false);
    setIsGreatVibes(false);
  };

  const handleCinzelClick = () => {
    setIsLobster(false);
    setIsPacifico(false);
    setIsNormal(false);
    setIsPlayfairDisplay(false);
    setIsRighteous(false);
    setIsCinzel(true);
    setIsGreatVibes(false);
  };

  const handleGreatVibesClick = () => {
    setIsLobster(false);
    setIsPacifico(false);
    setIsNormal(false);
    setIsPlayfairDisplay(false);
    setIsRighteous(false);
    setIsCinzel(false);
    setIsGreatVibes(true);
  };

  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5">{props.text}</label>
      <textarea
        className={`form-control ${props.style}`}
        style={{
          fontWeight: isBold ? "bold" : "normal",
          fontFamily: isLobster
            ? "Lobster"
            : isPacifico
            ? "Pacifico"
            : isPlayfairDisplay
            ? "Playfair Display"
            : isRighteous
            ? "Righteous"
            : isCinzel
            ? "Cinzel"
            : isGreatVibes
            ? "Great Vibes"
            : isNormal
            ? "normal"
            : "Arial",
        }}
        onClick={handleOnClear}
        onChange={handleOnChange}
        value={text}
        id="exampleFormControlTextarea1"
        rows="7"
      ></textarea>
      <nav style={{ backgroundColor: "rgb(205 200 200)" }} className="navbar rounded-2">
        <div className="d-flex justify-content-between container-fluid">
          <span className="navbar-text">
            Words: {text.trim() === "" ? 0 : text.split(/\s+/).length} and Characters: {text.length}
          </span>
          <button type="button" onClick={() => setText("")} className="btn btn-primary">Clear</button>
        </div>
      </nav>
      <button type="button" onClick={handleUpClick} className="btn btn-primary my-3 mx-1">Convert to UpperCase</button>
      <button type="button" onClick={handleLowClick} className="btn btn-primary my-3 mx-1">Convert to LowerCase</button>
      <button type="button" onClick={handleBoldClick} className="btn btn-primary my-3 mx-1">Bold Text</button>
      <button type="button" onClick={handleNormalClick} className="btn btn-primary my-3 mx-1">Normal</button>
      <button type="button" onClick={handleLobsterClick} className="btn btn-primary my-3 mx-1">Lobster</button>
      <button type="button" onClick={handlePacificoClick} className="btn btn-primary my-3 mx-1">Pacifico</button>
      <button type="button" onClick={handlePlayfairDisplayClick} className="btn btn-primary my-3 mx-1">Playfair Display</button>
      <button type="button" onClick={handleRighteousClick} className="btn btn-primary my-3 mx-1">Righteous</button>
      <button type="button" onClick={handleCinzelClick} className="btn btn-primary my-3 mx-1">Cinzel</button>
      <button type="button" onClick={handleGreatVibesClick} className="btn btn-primary my-3 mx-1">Great Vibes</button>
    </div>
  );
}
