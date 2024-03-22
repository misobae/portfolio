import styled from "styled-components";
import { motion } from "framer-motion";
import device from "../../styles/responsive";

export const Wrapper = styled(motion.nav)`
  position: absolute;
  z-index: 100;
  right: 5%;
  top: 5%;
  display: flex;
  gap: 1.5em;
  font-size: 15px;
  
  a {
    position: relative;
    color: var(--color-white);
    transition: 0.3s;

    &:not(:last-child)::after {
      content: "|";
      display: inline-block;
      margin-left: 1.5em;
      font-weight: 300;
    }

    span {
      opacity: 0.6;
    }

    .active {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    top: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    width: 100%;
    font-size: 17px;

    a {
      display: block;
      padding: 16px;
      border-bottom: 1px solid #ddd;
      &:not(:last-child)::after {
        display: none;
      }
    }
  }
`;

export const Light = styled(motion.span)`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 42%;
  width: 0;
  height: 0;
  border-radius: 50%;
  box-shadow: 0 0 40px 16px rgba(255, 255, 255, 70%);
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    left: 18%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: transparent;
  display: ${props => (props.$isOpen ? 'block' : 'none')};
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => (props.$isOpen ? '0px' : '-250px')};
  width: 250px;
  height: 100vh;
  background-color: var(--color-black);
  border-left: 1px solid var(--color-gray);
  transition: ease-in-out 0.35s;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--color-gray);
`;

export const Logo = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

export const BtnClose = styled.span`
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--color-white);
  border-left: 2px solid var(--color-white);
  transform: rotate(-45deg);
  cursor: pointer;
`;

export const BtnOpenWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  backdrop-filter: blur(5px);
  background-color: transparent;
`;
export const BtnOpen = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 5%;
  width: 24px;
  height: 18px;
  background: transparent;
  border-top: 1.5px solid var(--color-white);
  border-bottom: 1.5px solid var(--color-white);
  border-left: 0;
  border-right: 0;
  
  &::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1.5px;
    background-color: var(--color-white);
  }
`;