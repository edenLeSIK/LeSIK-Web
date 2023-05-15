import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Step from "../Step";
import Button from "../Button";
import {
  noticeList,
  equipmentList,
  foodTypeList,
  kitchenCountList,
} from "../../constants/content";

const StageContent = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const components = [Step, Step, Step];
  const CurrentStep = components[index];

  useEffect(() => {
    const handleOption = () => {
      let currentOptions = [];
      switch (index) {
        case 0:
          currentOptions = equipmentList.map((option) => ({
            ...option,
            active: false,
          }));
          break;
        case 1:
          currentOptions = foodTypeList.map((option) => ({
            ...option,
            active: false,
          }));
          break;
        case 2:
          currentOptions = kitchenCountList.map((option) => ({
            ...option,
            active: false,
          }));
          break;
        default:
          break;
      }
      setOptions(currentOptions);
    };
    handleOption();
  }, [index]);

  const isButtonDisabled = options.every((option) => !option.active);
  const navigateToInquiryPage = () => navigate("/inquiry");

  const selectOption = (i) => {
    setOptions((prevOptions) => {
      let newOptions = [...prevOptions];
      if (index === 2) {
        newOptions = newOptions.map((option, index) => ({
          ...option,
          active: index === i,
        }));
      } else {
        newOptions[i] = { ...newOptions[i], active: !newOptions[i].active };
      }
      return newOptions;
    });
  };

  const handleNext = () =>
    index === 2 ? setIndex(0) : setIndex((prev) => prev + 1);

  const handlePrev = () =>
    index === 0 ? setIndex(2) : setIndex((prev) => prev - 1);

  return (
    <SectionContainer>
      <div className="stage-wrapper">
        <h6>check it out</h6>
        <h2>How do you makeat?</h2>
        <h5>{noticeList[index].notice}</h5>
        <CurrentStep options={options} selectOption={selectOption} />
      </div>
      <div className="button-wrapper">
        <Button
          text="next"
          color="yellow"
          disabled={isButtonDisabled}
          onClick={index === 2 ? navigateToInquiryPage : handleNext}
        />
        {!(index === 0) && (
          <Button onClick={handlePrev} text="Back" color="transparent" />
        )}
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 4.44vw;
  padding-right: 4.44vw;
  padding-top: 120px;
  padding-bottom: 100px;
  border-top: 1px solid #f1f2f6;
  text-align: center;

  .stage-wrapper {
    box-sizing: border-box;
    text-align: center;

    h6 {
      margin-bottom: 24px;
      color: #4a4a5a;
      font-size: 0.8888888889rem;
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        font-size: 0.6666666667rem;
        line-height: 1;
      }
    }

    h2 {
      margin-bottom: 32px;
      font-size: 4rem;
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: 0.01rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        font-size: 2.6666666667rem;
      }
    }

    h5 {
      text-align: center;
    }

    .button-wrapper {
      margin-top: 70px;

      @media screen and (max-width: 766px) {
        margin: 0;
      }
    }
  }
`;

export default StageContent;
