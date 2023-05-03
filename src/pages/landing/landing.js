import React, { useContext } from "react";
import { StyledInput, StyledWrapper, StyledLoader } from "./landing.styles";
import { shorten } from "../../action/shorten";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import Loader from "../../component/loader";

const Landing = () => {
  const { isLoading } = useContext(AppContext);
  return (
    <StyledWrapper>
      <h1>URL SHORTNER .</h1>
      <p>Please Paste Your URL To Be Shortened</p>
      <Input />
      {isLoading && (
        <StyledLoader>
          <Loader />
        </StyledLoader>
      )}
    </StyledWrapper>
  );
};

const Input = () => {
  const navigate = useNavigate();
  const { isLoading, setShortUrl, setIsLoading } = useContext(AppContext);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading((prev) => !prev);
    console.log(isLoading);
    const shortenedUrl = await shorten(e.target.elements.url.value);
    setShortUrl(shortenedUrl.data);
    navigate("/result");
    setIsLoading(false);
    console.log(isLoading);
  }

  return (
    <StyledInput onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Enter the link here" name="url" />
      <button type="submit">Shorten URL</button>
    </StyledInput>
  );
};

export default Landing;
