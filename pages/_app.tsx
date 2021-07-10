import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../containers/Layout";

//REDUX
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";

//REACT QUERY
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

//NEXT-AUTH
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ReduxProvider>
      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
