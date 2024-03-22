import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Nav from "./Nav";

import { Wrapper, BtnOpenWrap, BtnOpen, BtnClose, Overlay, MobileMenu, Header, Logo } from "./NavHeader.style";

const openMenu = () => {
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  document.body.style.overflow = "unset";
};

function NavHeader() {
  const [isTabletSize, setIsTabletSize] = useState(window.innerWidth < 1024);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleOpenMenu = () => {
    openMenu();
    setIsOpen(true);
  }

  const handleCloseMenu = () => {
    closeMenu();
    setIsOpen(false);
  }

  // 경로 변경시 메뉴 닫기
  useEffect(() => {
    handleCloseMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletSize(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Wrapper
      initial={{
        opacity: 0,
        transition: { duration: 0 }
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6 }
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0 }
      }}
    >
      {isTabletSize ? (
        <>
          <BtnOpenWrap>
            <BtnOpen onClick={handleOpenMenu} />
          </BtnOpenWrap>
          <Overlay $isOpen={isOpen} onClick={handleCloseMenu} />
          <MobileMenu $isOpen={isOpen}>
            <Header>
              <BtnClose onClick={handleCloseMenu} />
              <Logo>smile</Logo>
            </Header>
            <Nav />
          </MobileMenu>
        </>
      ) : <Nav />}
    </Wrapper>
  )
}

export default NavHeader;