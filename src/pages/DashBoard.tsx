import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import * as S from '../styles/DashBoard';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';


const Contato = () => {

    return (
        <>
            <Head>
                <title>Agil Mob</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/Ativo 162.png"/>
            </Head>
            <NavBar/>
            <S.Main>
                <div style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        zIndex: '2'
                    }
                }>
                    <S.Titulo>Cadastre seus produtos aqui!</S.Titulo>
                    <S.Forms>
                        <S.Input1 placeholder='Nome*'></S.Input1>
                        <S.Input1 placeholder='Email*'></S.Input1>
                        <S.Input3></S.Input3>
                        <S.Botao>Enviar</S.Botao>
                    </S.Forms>
                </div>
            </S.Main>
            <Footer/>
        </>
    );
}

export default Contato;

