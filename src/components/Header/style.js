import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: transparent;
  padding: 40px 0;
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

HeaderStyle.Logo = styled.img``;

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

    &:focus-within::before {
      content: "";
      position: absolute;
      top: 22px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #00f6ff;
      opacity: 1;
    }
    &:focus-within {
      opacity: 1;
    }
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
