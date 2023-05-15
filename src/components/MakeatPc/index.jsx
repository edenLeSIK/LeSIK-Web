import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { fontColor, gray, main, pinkHover, white } from "../../theme";
import google from "../../assets/google-play-badge.png";

const MakeatPc = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`?search=${search}`);
  };

  const handleQuery = (e) => {
    setSearch(e.target.value);
  };

  return (
    <MakeatPcContainer>
      <div className="main">
        <Link to="/" className="link">
          당신에게 딱 맞춘 건강식단<span className="makeat">메이킷</span>
        </Link>
        <form className="search-wrapper" onSubmit={onSubmit}>
          <input
            placeholder="검색어를 입력하세요."
            value={search}
            onChange={handleQuery}
          />
          <button type="submit">
            <div className="positioner">
              <span className="icon">
                <BsSearch />
              </span>
            </div>
          </button>
        </form>
        <div className="tag-wrapper"></div>
      </div>
      <div className="download">
        <div className="notice-wrapper">
          <div className="makeat-app">메이킷</div>
          <div className="text">
            <p>앱으로 편하게 쇼핑하세요</p>
            <p className="gray">다운로드로 연결됩니다</p>
          </div>
        </div>
        <div className="app-wrapper">
          <a href="https://play.google.com/store/apps" target="_blank">
            <img alt="app-download" src={google} className="app-download" />
          </a>
          <a href="https://play.google.com/store/apps" target="_blank">
            <img alt="app-download" src={google} className="app-download" />
          </a>
        </div>
      </div>
    </MakeatPcContainer>
  );
};

const MakeatPcContainer = styled.section`
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  min-height: 650px;
  width: 440px;
  height: 100%;
  margin-left: -457.5px;
  background: ${white};
  z-index: 1000;

  .main {
    width: 310px;
    padding-top: 15px;

    .link {
      .makeat {
        margin-left: 10px;
        font-size: 2rem;
      }
    }

    .search-wrapper {
      position: relative;
      margin: 28px 0;

      input {
        display: block;
        width: 100%;
        height: 48px;
        padding: 0 55px 0 18px;
        border-radius: 23px;
        border: 1px solid #e5e5e5;
        background-color: #f7f7f7;
        font-size: 16px;
      }

      button {
        position: absolute;
        top: 0px;
        right: 5px;
        height: 100%;
        padding: 0;
        background: 0;
        border: 0;
        outline: none;
        text-align: center;

        .positioner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: ${main};
          border-radius: 50%;
        }

        svg {
          position: relative;
          display: block;
          width: 18px;
          height: 16px;
          color: ${white};
        }
      }
    }

    .tag-wrapper {
    }
  }

  .download {
    position: absolute;
    bottom: 58px;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    .notice-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 48px;

      .makeat-app {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: ${main};
        border-radius: 8px;
        color: ${white};
        font-size: 0.9rem;
        font-weight: 700;
      }

      .text {
        color: ${fontColor};
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.5;

        .gray {
          color: ${gray};
          font-size: 0.75rem;
        }
      }
    }

    .app-wrapper {
      display: flex;
      margin-top: 18px;

      a {
        .app-download {
          width: 112px;
        }
      }

      a + a {
        margin-left: 10px;
      }
    }
  }
`;

export default MakeatPc;
