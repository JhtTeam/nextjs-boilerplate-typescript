import React from "react";
import configureStore from "../store";

const isServer: boolean = typeof window === "undefined";
const __NEXT_REDUX_STORE__: string | any = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState?: string) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return configureStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!(window as any)[__NEXT_REDUX_STORE__]) {
    (window as any)[__NEXT_REDUX_STORE__] = configureStore(initialState);
  }
  return (window as any)[__NEXT_REDUX_STORE__];
}

export type IStore = ReturnType<typeof getOrCreateStore>


export default function withReduxStore(App: any) {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext: any) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    private reduxStore: any = null;

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
}
