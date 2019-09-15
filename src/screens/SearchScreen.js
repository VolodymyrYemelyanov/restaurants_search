import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setResults] = useState([]);

  const searchApi = async searchTerm => {
    console.log('hello there!');
    // see api yelp docs: https://www.yelp.com/developers/documentation/v3/business_search
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'krakow'
      }
    });
    setResults(response.data.businesses);
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>Some Search will be here</Text>
      <Text>We have found {restaurants.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
