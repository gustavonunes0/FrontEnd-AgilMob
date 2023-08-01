import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  background-color: #e6e1dd;
  position: fixed;
  top: 0;
  z-index: 100;
  margin-bottom: 7rem;

  @media screen and (max-width: 850px) {
    position: absolute;
  }
  `;

export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

@media screen and (max-width: 850px) {
  width: 100%;
}
`;

export const Logo = styled.image`
  width: 10rem;
  height: 100%;
`;

export const MenuItem = styled.div`
  font-size: 1rem;
  font-weight: 600;
  padding: .5rem 1.5rem;
  color: #1e2952 !important;
  text-decoration: none;
  @media screen and (max-width: 850px) {
    font-size: 1.4rem;
    font-weight: 700;
    
  }
`;

export const StyledLink = styled.span`
  text-decoration: none;
  color: #1e2952;
  padding: .2rem 1rem;

  &:hover {
    background-color: #1e2952;
    border-radius: 2rem;
    height: 2rem;
    color: #e6e1dd !important;
  }
`;
export const MenuToggle = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 2rem;
    height: 0.25rem;
    margin-bottom: 0.4rem;
    background: #1e2952;
    border-radius: 2px;
    transition: all 0.3s linear;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 850px) {
    display: flex;
    margin-left: auto;
    margin-right: 1rem;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    position: absolute;
    top: 6.8rem;
    left: 0;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? "calc(50vh - 7rem)" : "0")};
    padding-top: ${({ isOpen }) => (isOpen ? "3rem" : "0")};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    background-color: #e6e1dd;
    z-index: 1;
  }
`;