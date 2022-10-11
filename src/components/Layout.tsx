import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

interface Props {
    children: React.ComponentProps<'div'>['children'];
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Main = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
`;

const Layout = ({ children }: Props): React.ReactElement => (
    <>
        <Head>
            <title>👋</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta property="og:title" content="ios for hire" />
            <meta property="og:description" content="gimme a shot at this ios thing" />
            <meta property="og:image" content="https://sammysamkough.com/assets/fam.jpg" />
        </Head>
        <Container>
            <Main>{children}</Main>
        </Container>
    </>
);

export default Layout;
