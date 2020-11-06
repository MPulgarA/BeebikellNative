/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//Apollo
import client from './config/apollo';
import {ApolloProvider} from '@apollo/client';

const BeebikellApp = () =>{
    <ApolloProvider client={client}>
        <App/>        
    </ApolloProvider>
}


AppRegistry.registerComponent(appName, () => BeebikellApp);
