import * as React from 'react';
import {FlatList, View} from 'react-native';
import {Avatar, Card, Text} from 'react-native-paper';
import {styles} from './style.component';
import {BookProps} from '../../types/book.type';

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="book" />;

const Book = ({book}: BookProps) => {
  return (
    <Card style={styles.card}>
      <Card.Title title="Software Engineering" left={LeftContent} />
      <Card.Content>
        <Text variant="titleMedium">Title: book.name</Text>
        <Text variant="bodyMedium">Publisher: {book.publisher.name}</Text>
        <View
          style={[
            book.authors.length > 1
              ? styles.authorViewColum
              : styles.authorViewRow,
          ]}>
          <Text variant="bodyMedium">
            {book.authors.length > 1 ? 'Authors: ' : 'Author: '}
          </Text>
          <FlatList
            data={book.authors}
            renderItem={({item}) => <Text>{item.name}</Text>}
          />
        </View>
      </Card.Content>
    </Card>
  );
};

export default Book;
