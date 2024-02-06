import styled from "styled-components";
import bgimage1 from '../../assets/icons/phone.svg';
import bgimage2 from '../../assets/icons/email.svg';
import bgimage3 from '../../assets/icons/linkedin.svg';
import bgimage4 from '../../assets/icons/telegram.svg';
import bgimage5 from '../../assets/icons/instagram.svg';
import bgimage6 from '../../assets/icons/facebook.svg';

export const ContactStyle = styled.section`
  padding: 208px 0 0 0;
  background: #041122;
`;

ContactStyle.Container = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 15px;
`;

ContactStyle.Wrapper = styled.div`
display: flex;
`;
ContactStyle.InfoBox = styled.div`
width: 100%;
max-width: 606px;
height: 675px;
padding: 30px;
`;
ContactStyle.MainItems = styled.ul``;
ContactStyle.Items = styled.li``;
ContactStyle.Title = styled.h2``;
ContactStyle.Iput1 = styled.input``;
ContactStyle.Iput2 = styled.input``;
ContactStyle.Iput3 = styled.input``;
ContactStyle.Iput4 = styled.textarea``;
ContactStyle.Btn = styled.button``;
ContactStyle.MapBox = styled.div`
  width: 100%;
  max-width: 738px;
  height: 675px;
`;

ContactStyle.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
  width: 100%;
  max-width: 606px;
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
