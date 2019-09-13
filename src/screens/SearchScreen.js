import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurant, setResults] = useState([]);

  const searchApi = async () => {
    // see api yelp docs: https://www.yelp.com/developers/documentation/v3/business_search
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'krakow'
      }
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>Some Search will be here</Text>
      <Text>We have found {restaurant.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
