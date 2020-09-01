import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import {
  Container,
  AvatarContainer,
  Avatar,
  OnlineStatus,
  RightSide,
  Button,
  MessageStatus,
} from "./styles";
import colors from "../../styles/colors";
import avatar from "../../images/avatar.jpg";

const Header: React.FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar source={avatar} />
        <OnlineStatus />
      </AvatarContainer>
      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
          <MessageStatus />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
