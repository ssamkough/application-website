import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Text = styled.span<{ $isDisplayNone?: boolean }>`
    font-size: 2em;
    display: ${({ $isDisplayNone }) => ($isDisplayNone ? 'none' : 'inline')};
    animation: 1s ${fadeIn} ease-out;
`;

const SmallText = styled.span`
    font-size: 0.6em;
`;

const Home = (): React.ReactElement => {
    const [currentStep, setCurrentStep] = useState(0);

    const onEnter = () => {
        setCurrentStep((step) => step + 1);
    };

    const onBackspace = () => {
        setCurrentStep((step) => step - 1);
    };

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                onEnter();
            }
            if (event.key == 'Backspace') {
                event.preventDefault();
                onBackspace();
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <Layout>
            <Container>
                <Text>
                    hi there 👋 <SmallText>(u can press enter to continue, backspace to delete)</SmallText>
                </Text>
                <Text $isDisplayNone={currentStep < 1}>happy you&apos;re here, nice to meet you</Text>
                <Text $isDisplayNone={currentStep < 2}>
                    my name&apos;s <span style={{ color: 'red' }}>s</span>
                    <span style={{ color: 'orange' }}>a</span>
                    <span style={{ color: 'yellow' }}>m</span>
                    <span style={{ color: 'green' }}>m</span>
                    <span style={{ color: 'blue' }}>y</span> <span style={{ color: 'indigo' }}>s</span>
                    <span style={{ color: 'violet' }}>a</span>
                    <span style={{ color: 'red' }}>m</span>
                    <span style={{ color: 'orange' }}>k</span>
                    <span style={{ color: 'yellow' }}>o</span>
                    <span style={{ color: 'green' }}>u</span>
                    <span style={{ color: 'blue' }}>g</span>
                    <span style={{ color: 'indigo' }}>h</span>, and i love building things that i find meaningful
                </Text>
                <Text $isDisplayNone={currentStep < 3}>
                    those things range from making the web literally <strong>go faster</strong>, increase{' '}
                    <strong>developer productivity</strong>, help users <strong>use the web</strong>, to literally a
                    billion other things (not just web-related)
                </Text>
                <Text $isDisplayNone={currentStep < 4}>
                    ...and vercel definitely fills multiple of those gaps for me, in a huge way
                </Text>
                <Text $isDisplayNone={currentStep < 5}>
                    which is why i ask u, would u be able to help me put my foot in the door? id love to get on a call
                    to talk more about it all!
                </Text>
                <Text $isDisplayNone={currentStep < 6}>
                    i understand either way but regardless, i appreciate the time u took to read this. thank u :D
                </Text>
                <Text $isDisplayNone={currentStep < 7}>love, sammy ❤️</Text>
            </Container>
        </Layout>
    );
};

export default Home;
