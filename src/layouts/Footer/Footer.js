import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 ZipTeKorea. All rights reserved.</FooterText>
      <div>
        <SocialMediaLink href='https://www.instagram.com/eedo_y'>
          Instagram
        </SocialMediaLink>
        <SocialMediaLink href='https://github.com/doup2001'>
          GitHub
        </SocialMediaLink>
      </div>
    </FooterContainer>
  );
};
