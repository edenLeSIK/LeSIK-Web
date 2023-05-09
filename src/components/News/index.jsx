import styled from "styled-components";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { gray, white } from "../../theme";

const News = () => {
  return (
    <Styler>
      <NewsContainer>
        <a
          href="https://kr.aving.net/news/articleView.html?idxno=1773665"
          target="_blank"
        >
          <h6 className="date">2023/05/28</h6>
          <div className="contents">
            <h5 className="title">
              제목이 제목 제목 제목이제 목 제목이제목 제
              목이제목제목이제목이제목 제 목 제 목 제목 목제목제목
            </h5>
            <div className="info">
              <span className="magazine">래식일보</span> -{" "}
              <span className="summary">
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
              </span>
            </div>
          </div>
          <FaArrowAltCircleRight className="icon" />
        </a>
      </NewsContainer>
    </Styler>
  );
};

const Styler = styled.div`
  &:hover .icon {
    fill: rgb(251, 105, 98);
    transform: rotate(-45deg);
  }
`;

const NewsContainer = styled.article`
  border-bottom: 1px solid ${gray};

  a {
    display: grid;
    grid-template: auto auto/1fr auto 1fr;
    padding: 32px 0;

    .date {
      margin: 0 8px 0 0;
      align-self: start;
      justify-self: start;
      color: ${gray};
      font-size: 0.8888888889rem;
      font-weight: 400;
      line-height: 1.1;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    .contents {
      width: 44.45vw;

      .title {
        color: ${white};
        font-size: 1.3333333333rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;
      }

      .info {
        margin: 24px 0 0;
        color: ${gray};

        .magazine {
          margin-bottom: 24px;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0;
        }
      }
    }

    .icon {
      width: 50px;
      height: 50px;
      justify-self: end;
      align-self: start;
      margin-right: 8px;
      fill: #4a4a5a;
    }
  }
`;

export default News;
