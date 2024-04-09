/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {PaperProvider} from 'react-native-paper';
import Books from './src/components/books/index.component';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <SafeAreaView style={[{flex: 1}, backgroundStyle]}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={[{flex: 1}, backgroundStyle]}>
          <ApolloProvider client={client}>
            <Books />
          </ApolloProvider>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
