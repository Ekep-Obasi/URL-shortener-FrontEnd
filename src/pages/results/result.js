import React, { useContext } from "react";
import { StyledInput, StyledWrapper } from "./result.styles";
import { AppContext } from "../../context/appContext";

const Result = () => {
  return (
    <StyledWrapper>
      <h1>URL SHORTNER .</h1>
      <p>Here is your Shortened Password</p>
      <Input />
    </StyledWrapper>
  );
};

const Input = () => {
  const { shortUrl } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    const copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  };

  return (
    <StyledInput>
      <input
        type="text"
        id="myInput"
        value={shortUrl || "[An error Occured]"}
        contentEditable="false"
        onChange={() => {}}
      />
      <button type="submit" onClick={(e) => handleClick(e)}>
        Copy Text
      </button>
    </StyledInput>
  );
};

export default Result;
