import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {useQuery} from '@apollo/client';
import {getBooks} from '../../services/graphql/queries/books.query';
import Book from '../book/index.component';
import {styles} from './style.component';

const Books = () => {
  const {loading, error, data} = useQuery(getBooks);

  const renderItem = useCallback((item: any) => <Book book={item} />, []);

  if (loading) {
    return <ActivityIndicator size="large" color={'red'} />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }
  console.log('Books:', data.books[0].publisher.name);

  return (
    <View style={styles.view}>
      <Text style={styles.text}>LR's Library</Text>
      <FlatList
        data={data.books}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

export default Books;
