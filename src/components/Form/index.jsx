import styled from "styled-components";
import Button from "../Button";
import { red, white } from "../../theme";

const Form = () => {
  return (
    <FormContainer>
      <form>
        <p className="text">
          <span>﹡</span> 필수 항목을 모두 작성해주세요
        </p>
        <div className="input-wrapper">
          <label>
            이름 <span>﹡</span>
          </label>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <label>
            전화번호 <span>﹡</span>
          </label>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <label>
            이메일 <span>﹡</span>
          </label>
          <input type="email" />
        </div>
        <div className="input-wrapper">
          <label>
            문의사항 <span>﹡</span>
          </label>
          <textarea type="text" />
        </div>
        <div className="input-wrapper">
          <strong>가맹점 정보</strong>
        </div>
        <div className="input-wrapper">
          <label>
            가맹점 이름 <span>﹡</span>
          </label>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <label>가맹점 주소</label>
          <input type="text" />
        </div>
        <div className="input-wrapper">
          <label>선택사항</label>
          <select>
            <option>선택해주세요</option>
            <option>owner</option>
            <option>employee</option>
            <option>customer</option>
            <option>operator</option>
          </select>
        </div>
        <div className="button-wrapper">
          <Button text="제출하기" color="yellow" />
        </div>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 38.8916666667vw;
  padding: 40px 32px;
  margin-right: 4.44vw;
  background: ${white};
  border-radius: 24px;

  form {
    max-width: 768px;
    margin: 0 auto;

    .text {
      margin: 16px 0;
      color: #20202b;
      font-size: 0.7777777778rem;
    }

    span {
      color: ${red};
    }

    .input-wrapper {
      width: 100%;
      padding: 10px 0;

      strong {
        font-weight: bolder;
      }

      label {
        display: block;
        margin-bottom: 8px;
        color: #20202b;
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
        color: #20202b;
        font-weight: 400;
      }

      textarea {
        height: 5.5rem;
      }
    }

    .button-wrapper {
      margin-top: 20px;
    }
  }
`;

export default Form;
