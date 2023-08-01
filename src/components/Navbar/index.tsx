import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderBox>
          <S.Menu>
            <S.MenuItem>
              <Image alt="" src="/Ativo 162.png" width={104} height={75} />
            </S.MenuItem>
            <S.MenuToggle onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </S.MenuToggle>
            <S.MenuItems isOpen={isOpen}>
              <S.MenuItem>
                <Link href={{ pathname: "/" }} style={{ textDecoration: 'none' }}>
                  <S.StyledLink>HOME</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link href={{ pathname: "/quemSomos" }} style={{ textDecoration: 'none' }}>
                  <S.StyledLink>QUEM SOMOS</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link href={{ pathname: "/produtos" }} style={{ textDecoration: 'none' }}>
                  <S.StyledLink>PRODUTOS</S.StyledLink>
                </Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link href={{ pathname: "/contato" }} style={{ textDecoration: 'none' }}>
                  <S.StyledLink>CONTATO</S.StyledLink>
                </Link>
              </S.MenuItem>
            </S.MenuItems>
          </S.Menu>
        </S.HeaderBox>
      </S.HeaderContainer>
    </>
  );
};

export default NavBar;
