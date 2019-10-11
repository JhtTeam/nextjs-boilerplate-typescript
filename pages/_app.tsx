import { Container, AppInitialProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux';
import withReduxStore, { IStore } from 'utils/withRedux';
import { AppPropsType } from 'next/dist/next-server/lib/utils';
import "i18n";

interface Props {
  reduxStore: IStore
}

export default withReduxStore(
  class MyApp extends React.Component<Props & AppPropsType> {
    render () {
      const { Component, pageProps, reduxStore } = this.props
      return (
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)