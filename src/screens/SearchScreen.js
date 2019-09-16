import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setResults] = useState([]);

  //console.log(restaurants);

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

  const filterResultsByPrice = price => {
    // price === $ || $$ || $$$
    return restaurants.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView style={styles.scrollMargin}>
        <ResultsList
          restaurants={filterResultsByPrice('$')}
          title='Cheap Eats'
        />
        <ResultsList
          restaurants={filterResultsByPrice('$$')}
          title='Mid-range'
        />
        <ResultsList
          restaurants={filterResultsByPrice('$$$')}
          title='Fine Dining'
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    color: '#afafaf'
  }
  // scrollMargin: {
  //   marginBottom: 100
  // }
});

export default SearchScreen;
