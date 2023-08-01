import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
    return (
        <S.Footer>
            <S.FooterBox>
                <S.FooterSubmenu>
                    <S.BoxFoto>
                        <S.FooterCompanyInfoIcon src={"/Ativo 174.png"}
                            alt="logo"/>
                    </S.BoxFoto>
                    <S.FooterSubmenuItem style={{fontSize: '.86rem'}}>
                        Av. Lorem Ipsum, 123 - Abc, Fortaleza - CE
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem style={{fontSize: '.86rem'}}>
                        contato@agilmob.com.br
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem style={{fontSize: '.86rem'}}>
                        (85) 0000-0000
                    </S.FooterSubmenuItem>
                </S.FooterSubmenu>

                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>PRODUTOS</S.FooterSubmenuTitle>

                    <S.FooterSubmenuItem>
                        <Link href="/especialidades"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Mesas
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/especialidades"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Cadeiras
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/especialidades"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Armários
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenuItem>
                        <Link href="/especialidades"
                            style={
                                {
                                    textDecoration: "none",
                                    color: "#e6e1dd"
                                }
                        }>
                            Roupeiros
                        </Link>
                    </S.FooterSubmenuItem>
                    <S.FooterSubmenu style={
                        {marginTop: '1.5rem'}
                    }>
                        <S.FooterSubmenuTitle>CORPORATIVO</S.FooterSubmenuTitle>

                        <S.FooterSubmenuItem>
                            <Link href="/quemSomos"
                                style={
                                    {
                                        textDecoration: "none",
                                        color: "#e6e1dd"
                                    }
                            }>
                                Quem Somos
                            </Link>
                        </S.FooterSubmenuItem>
                        <S.FooterSubmenuItem>
                            <Link href="/contato"
                                style={
                                    {
                                        textDecoration: "none",
                                        color: "#e6e1dd"
                                    }
                            }>
                                Contato
                            </Link>
                        </S.FooterSubmenuItem>
                        <S.FooterSubmenuItem>
                            <Link href="/dashboard"
                                style={
                                    {
                                        textDecoration: "none",
                                        color: "#e6e1dd"
                                    }
                            }>
                                Dashboard
                            </Link>
                        </S.FooterSubmenuItem>
                    </S.FooterSubmenu>
                </S.FooterSubmenu>

                <S.FooterSubmenu>
                    <S.FooterSubmenuTitle>CONECTE-SE CONOSCO</S.FooterSubmenuTitle>
                    <div style={
                        {
                            display: 'flex',
                            justifyContent: 'start',
                            gap: '1rem'
                        }
                    }>
                        <a href="https://www.instagram.com/vianapeixotoadvogados/" target="_blank">
                            <S.FooterSubmenuSocialMedia src={"/Ativo 170.png"}/>
                        </a>
                        <a href="https://www.facebook.com/VianaPeixotoAdv" target="_blank">
                            <S.FooterSubmenuSocialMedia src={"/Ativo 171.png"}/>
                        </a>
                        <a href="https://www.linkedin.com/company/viana-peixoto-advogados-associados/mycompany/" target="_blank">
                            <S.FooterSubmenuSocialMedia src={"/Ativo 172.png"}/>
                        </a>
                    </div>
                </S.FooterSubmenu>
            </S.FooterBox>
        </S.Footer>
    );
};

export default Footer;

