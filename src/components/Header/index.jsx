import React from "react";
import { HeaderStyle } from "./style";
import logo from "../../assets/icons/logoImg.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderStyle.Container>
        <HeaderStyle.Wrapper>
          <Link to="/">
            {" "}
            <HeaderStyle.Logo src={logo} />
          </Link>
          <HeaderStyle.NavLangBox>
            <HeaderStyle.Nav>
              <Link className="link" to={'/'}>Home</Link>
              <Link className="link" to={'/pcgame'}>PC Games</Link>
              <Link className="link" to={'/mobile-game'}>Mobile Games</Link>
              <Link className="link" to={'/blog'}>Blog</Link>
              <Link className="link" to={'/contact-us'}>Contact us</Link>
            </HeaderStyle.Nav>
            <HeaderStyle.LangBox>
              <HeaderStyle.LangItem>
                <HeaderStyle.LangBtn>En</HeaderStyle.LangBtn>
                <HeaderStyle.LangBtn>Ru</HeaderStyle.LangBtn>
                <HeaderStyle.LangBtn>Uz</HeaderStyle.LangBtn>
              </HeaderStyle.LangItem>
            </HeaderStyle.LangBox>
          </HeaderStyle.NavLangBox>
        </HeaderStyle.Wrapper>
      </HeaderStyle.Container>
    </HeaderStyle>
  );
};

export default Header;

// HeaderStyle.Nav = styled.nav`

// `;

// HeaderStyle.LangBox = styled.ul`

// `;

// HeaderStyle.LangItem = styled.li`

// `;

// HeaderStyle.LangBtn = styled.button`

// `;
