//* import third-party deps
import styled from "styled-components";

//* import local
import ViewWrapper from "components/common/ViewWrapper";
/*
 * ProfileView is the head component for the profile page (mfchess.com/user/{userID}, or mrchess.com/profile for now)
 @returns JSX.element jsx structure for the profile page
*/
const ProfileView = (): JSX.Element => {
  //* render
  return (
    <ViewWrapper backgroundColor={"#333333"} hasNavbar> {/** holds animation and container logic*/}
      <PlaceholderText>Profile</PlaceholderText>
    </ViewWrapper>
    );
}

export default ProfileView;

//lines below this point are styled-components logic

const PlaceholderText = styled.p`
  font-size: 2em;
  color: white;
  font-weight: 500;
`;