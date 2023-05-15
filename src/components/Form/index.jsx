import styled from "styled-components";
import Button from "../Button";
import { fontColor, red, white } from "../../theme";

const list = [
  { id: 1, label: "이름", mark: true },
  { id: 2, label: "전화번호", mark: true },
  { id: 3, label: "이메일", mark: true },
  { id: 4, label: "문의사항", mark: true },
  { id: 5, label: "가맹점 이름", mark: true },
  { id: 6, label: "가맹점 주소", mark: false },
];

const Form = () => {
  return (
    <FormContainer>
      <form>
        <p className="text">
          <span>﹡</span> 필수 항목을 모두 작성해주세요
        </p>
        {list.map((el) => (
          <div className="input-wrapper" key={el.id}>
            {el.id === 5 && (
              <div className="input-wrapper">
                <p className="sort">가맹점 정보</p>
              </div>
            )}
            <label>
              {el.label} {el.mark && <span>﹡</span>}
            </label>
            <input type="text" />
          </div>
        ))}
        {/* <div className="input-wrapper">
          <label>선택사항</label>
          <select>
            <option>선택해주세요</option>
            <option>owner</option>
            <option>employee</option>
            <option>customer</option>
            <option>operator</option>
          </select>
        </div> */}
        <div className="button-wrapper">
          <Button text="제출하기" color="yellow" />
        </div>
      </form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 38.8916666667vw;
  /* margin-right: 4.44vw; */
  padding: 40px 32px;
  background: ${white};
  border-radius: 24px;

  @media screen and (max-width: 766px) {
    width: 100%;
    margin: 0 5.33vw 0 0;
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

      @media (max-width: 767px) {
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

export default Form;
