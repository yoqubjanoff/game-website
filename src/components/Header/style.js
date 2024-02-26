import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  padding: 20px 0 0 0;
`;

HeaderStyle.Container = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 15px;
`;

HeaderStyle.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .burgerMenu {
    height: 20px;
    width: 50px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    @media only screen and (max-width: 1000px) {
    display: flex;
  }
  }
  .burgerBar {
  background-color: #fff;
  width: 100%;
  height: 2px;
}
.burgerBlack {
  background-color: #000;
  width: 100%;
  height: 2px;
}

.menu {
  width: 845px;
  height: 100vh;
  background-color: rgba(5, 28, 44, 0.6);
  backdrop-filter: blur(150px) brightness(100%);
  -webkit-backdrop-filter: blur(150px) brightness(100%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.routes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 36px;
  @media screen and (max-width: 1550px) {
    gap: 15px;
  }
}
.hidden {
  display: none;
}

.visible {
  display: flex;
  align-items: center;
  padding-left: 100px;
}
.burgerBar.clicked:nth-child(1) {
  transform: rotate(45deg) translate(-0.3em, 1.25em);
  transition: ease-out 0.4s;
}

.burgerBar.clicked:nth-child(2) {
  transform: scale(0.005);
  transition: ease-out 0.4s;
}
.burgerBar.clicked:nth-child(3) {
  transform: rotate(135deg) translate(0.6em, 1em);
  transition: ease-out 0.4s;
}

/*unclicked*/
.burgerBar.unclicked {
  transform: rotate(0) translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
}
`;

HeaderStyle.Logo = styled.img`
  width: 100%;
  max-width: 231px;
  height: 88px;
`;

HeaderStyle.NavLangBox = styled.div`
  display: flex;
  gap: 80px;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

HeaderStyle.Nav = styled.nav`
  display: flex;
  gap: 30px;

  .link {
    position: relative;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.7;
  }

  .link::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #00f6ff;
    transition: width 0.3s ease;
  }

  .link:focus-within::after {
    width: 100%;
  }

  .link:focus-within {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    opacity: 1;
  }
`;

HeaderStyle.LangBox = styled.ul``;

HeaderStyle.LangItem = styled.li`
  .active {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

HeaderStyle.LangBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:first-of-type {
    padding-right: 10px;
    border-right: 1px solid rgba(255, 255, 255, 0.4);
  }
  &:nth-of-type(2) {
    padding: 0 10px;
    border-right: 1px solid rgba(255, 255, 255, 0.4);
  }
  &:nth-of-type(3) {
    padding-left: 10px;
  }
`;
