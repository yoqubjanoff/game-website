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
`;

HeaderStyle.Logo = styled.img`
  width: 231px;
  height: 88px;
`;

HeaderStyle.NavLangBox = styled.div`
  display: flex;
  gap: 80px;
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
  .link::after,
  .link::before {
    content: "";
    position: absolute;
    display: block;
    border: 0px solid transparent;
    width: 0%;
    height: 0%;
    transition: all 0.3s ease;
  }
  .link::after {
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  .link::before {
    width: 0%;
    height: 0%;
    right: 0;
    bottom: 68px;
    padding: 3px;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }
  .link:hover::before,
  .link:hover::after {
    width: 100%;
    height: 27%;
    border-color: #fff;
    opacity: 1;
  }
`;

HeaderStyle.LangBox = styled.ul``;

HeaderStyle.LangItem = styled.li``;

HeaderStyle.LangBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus-within {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
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
