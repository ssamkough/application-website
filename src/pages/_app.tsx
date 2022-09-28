import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';

const _app = ({ Component, pageProps }: AppProps): React.ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AnyComponent = Component as any;
    return <AnyComponent {...pageProps} />;
};

export default _app;
