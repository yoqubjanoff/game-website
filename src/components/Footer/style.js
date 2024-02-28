import styled from "styled-components";
import bgimage1 from '../../assets/icons/phone.svg';
import bgimage2 from '../../assets/icons/email.svg';
import bgimage3 from '../../assets/icons/linkedin.svg';
import bgimage4 from '../../assets/icons/telegram.svg';
import bgimage5 from '../../assets/icons/instagram.svg';
import bgimage6 from '../../assets/icons/facebook.svg';

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 80px 0 42px 0;
  background: linear-gradient(rgba(4, 17, 34, 1), rgba(11, 156, 161, 1));
  .line {
    border-bottom: 1px solid #fff;
    margin-top: 32px;
  }
`;

FooterStyle.Container = styled.div`
  width: 100%;
  max-width: 1830px;
  margin: 0 auto;
  padding: 0 15px;
`;
FooterStyle.Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
`;
FooterStyle.Logo = styled.img`
  max-width: 190px;
  height: 68px;
`;
FooterStyle.LoginNav = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  gap: 100px;

  .foter-link {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
FooterStyle.Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 850px;
  margin-bottom: 5px;
`;
FooterStyle.ArrowImg = styled.img`
  cursor: pointer;
  width: 42px;
  height: 42px;
`;

FooterStyle.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1296px;
  margin: 0 auto;
  padding: 42px 15px 0 15px;
  .soc-link {
    color: #fff;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.32px;
    position: relative;
  }
  .soc-link::before {
    position: absolute;
    width: 24px;
    height: 24px;
    left: -26px;
  }
  .soc-link:nth-child(1)::before {
  content: url(${bgimage1});
}

.soc-link:nth-child(2)::before {
  content: url(${bgimage2 });
}
.soc-link:nth-child(3)::before {
  content: url(${bgimage4 });
}
.soc-link:nth-child(4)::before {
  content: url(${bgimage5 });
}
.soc-link:nth-child(5)::before {
  content: url(${bgimage6 });
}
.soc-link:nth-child(6)::before {
  content: url(${bgimage3 });
}
`;
