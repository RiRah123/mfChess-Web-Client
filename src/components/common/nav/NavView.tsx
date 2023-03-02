//* import third-party deps
import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//* import local
import ThemeColorContext from "context/colorContext";
import LogoPNG from "assets/logo.png";


/*
 * NavView is the parent nav component
 @context themeColor: string = the hexcode string for the global theme color
 @returns JSX.Element the navbar jsx component
*/
const NavView = (): JSX.Element => {
  //* component logic
  const themeColor = useContext(ThemeColorContext);

  //* render
  return (
    <NavContainer>
      <LogoButton to="/" backgroundColor={themeColor}>
        <LogoImage src={LogoPNG}/>
      </LogoButton>
      <SwitchPage to="/game">Play Game</SwitchPage>
    </NavContainer>
  );
}

export default NavView;

//lines below this point are styled-components logic

/*
 * NavContainer extends the motion.div while making it take the entire screen
 ! some width values for ViewWrapper rely on a hardcoded reference to the NavContainer's width. you may not change one without the other.
 TODO: write a jest test to ensure the widths add upp to the window width
*/
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  height: 100vh;
  width: 5.5em;
  background-color: #222222;
`;
const LogoButton = styled(Link)< {backgroundColor: string} >`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15%;
  gap: 2em;
  background-color: ${props => props.backgroundColor};
  
  transition: all 0.3s ease;
  &:hover {
    background-color: #888888;
  }
`;
const LogoImage = styled.img`
  display: flex;
  width: 3.5em;
`;
const SwitchPage = styled(Link)`
  text-decoration: none;
  height: 50px;
  background-color: #EEEEEE;
  color: #333333;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

