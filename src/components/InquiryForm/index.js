import { useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { fontColor, red, white } from "@/styles/theme";
import { formList } from "@/constants/inquiry";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    이름: "",
    전화번호: "",
    이메일: "",
    문의사항: "",
    가맹점이름: "",
    가맹점주소: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <InquiryFormContainer>
      <form onSubmit={handleSubmit}>
        <p className="text">
          <span>﹡</span> 필수 항목을 모두 작성해주세요
        </p>
        {formList.map((el) => (
          <div className="input-wrapper" key={el.id}>
            {el.id === 5 && (
              <div className="input-wrapper">
                <p className="sort">가맹점 정보</p>
              </div>
            )}
            <label>
              {el.label} {el.mark && <span>﹡</span>}
            </label>
            <input type="text" name={el.label} onChange={handleInputChange} />
          </div>
        ))}
        <div className="button-wrapper">
          <Button text="제출하기" color="yellow" />
        </div>
      </form>
    </InquiryFormContainer>
  );
};

const InquiryFormContainer = styled.div`
  width: 38.8916666667vw;
  margin-right: 4.44vw;
  padding: 40px 32px;
  background: ${white};
  border-radius: 24px;

  @media screen and (min-width: 1920px) {
    width: 35vw;
    margin-right: 5vw;
  }

  @media screen and (max-width: 939px) {
    width: 80vw;
    margin-right: 0;
    margin: 0 auto;
    padding: 32px 24px;
  }

  form {
    max-width: 768px;
    margin: 0 auto;

    .text {
      margin: 16px 0;
      color: ${fontColor};
      font-size: 0.7777777778rem;
    }

    span {
      color: ${red};
    }

    .input-wrapper {
      width: 100%;
      padding: 10px 0;

      @media (max-width: 939px) {
        display: inline-block;
        width: 100%;
        padding: 5px 0;
      }

      .sort {
        margin-bottom: 12px;
        font-size: 1.125rem;
      }

      label {
        display: block;
        margin-bottom: 8px;
        color: ${fontColor};
        font-size: 0.8888888889rem;
        font-weight: 400;
      }

      input,
      select,
      textarea {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 10px;
        padding: 16px 10px;
        background-color: ${white};
        border: 1px solid #9797a1;
        border-radius: 8px;
        color: ${fontColor};
        font-weight: 400;

        @media (max-width: 939px) {
          padding: 0.825rem;
        }
      }

      textarea {
        height: 5.5rem;
      }
    }

    .button-wrapper {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

export default InquiryForm;
