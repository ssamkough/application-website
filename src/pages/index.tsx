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

const Text = styled.span.attrs({
    className: 'span-text',
})<{ $isDisplayNone?: boolean }>`
    font-size: 2em;
    display: ${({ $isDisplayNone }) => ($isDisplayNone ? 'none' : 'inline')};
    animation: 1s ${fadeIn} ease-out;
    @media only screen and (max-width: 768px) {
        font-size: 1.6em;
    }
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
        if (currentStep) window.scrollTo(0, document.body.scrollHeight);
    }, [currentStep]);

    useEffect(() => {
        const mouseDownHandler = () => {
            onEnter();
        };
        document.addEventListener('mousedown', mouseDownHandler);
        return () => {
            document.removeEventListener('mousedown', mouseDownHandler);
        };
    }, []);

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
                    hey suhail 👋 <br />
                    <SmallText>(enter/click/touch to continue ; backspace to delete)</SmallText>
                </Text>
                <Text $isDisplayNone={currentStep < 1}>happy you&apos;re here, nice to meet you</Text>
                <Text $isDisplayNone={currentStep < 2}>
                    my name&apos;s <span style={{ color: 'red' }}>s</span>
                    <span style={{ color: 'orange' }}>a</span>
                    <span style={{ color: 'goldenrod' }}>m</span>
                    <span style={{ color: 'green' }}>m</span>
                    <span style={{ color: 'blue' }}>y</span> <span style={{ color: 'indigo' }}>s</span>
                    <span style={{ color: 'indigo' }}>a</span>
                    <span style={{ color: 'red' }}>m</span>
                    <span style={{ color: 'orange' }}>k</span>
                    <span style={{ color: 'goldenrod' }}>o</span>
                    <span style={{ color: 'green' }}>u</span>
                    <span style={{ color: 'blue' }}>g</span>
                    <span style={{ color: 'indigo' }}>h</span>, and i love building things that i find meaningful
                </Text>
                <Text $isDisplayNone={currentStep < 3}>
                    those things could range from helping <strong>developers work more efficiently</strong>, to
                    increasing <strong>the value of the creator economy</strong>, to helping{' '}
                    <strong>battle climate change</strong>, to literally a billion other things
                </Text>
                <Text $isDisplayNone={currentStep < 4}>...and possibly, this next project you're wanting to build</Text>
                <Text $isDisplayNone={currentStep < 5}>
                    i&apos;d <strong>love</strong> to get on a call to talk more about this opportunity
                </Text>
                <Text $isDisplayNone={currentStep < 6}>appreciate the time you took to read this. thank you :D</Text>
                <Text $isDisplayNone={currentStep < 7}>love, sammy ❤️</Text>
            </Container>
        </Layout>
    );
};

export default Home;
