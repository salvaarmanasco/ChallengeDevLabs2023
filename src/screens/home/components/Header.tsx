import React from "react";
import { Container, Title, ProfileImage } from "./styles";

const Header = () => {
  return (
    <Container>
      <Title>Crypto Tracker Pro</Title>
      <ProfileImage source={require("../../../../assets/img/user.png")} />
    </Container>
  );
};

export default Header;
