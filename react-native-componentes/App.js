
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Repo from './componentes/repo'
import NewRepoModal from './componentes/newRepoModal'

export default class App extends Component {
  state = {
    modalVisible : false,
    repos: [
      {
        id:1,
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/416rhOVJs4L._SX342_.jpg',
        title: 'rocketseat.com.br',
        author: 'rocket'
      },
      {
        id:1,
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/416rhOVJs4L._SX342_.jpg',
        title: 'rocketseat.com.br',
        author: 'rocket'
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText} >Meu primeiro APP</Text>
          <TouchableOpacity onPress={()=> this.setState({modalVisible: true})}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>


        <ScrollView contentContainerStyle={styles.repoList}>
          {this.state.repos.map(repo => <Repo key={repo.id} data={repo}/>)}
        </ScrollView>
       <NewRepoModal data={this.state.modalVisible}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: '#333',
  },
  header : {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop:(Platform.OS === 'ios') ? 20 : 0,
    backgroundColor:'#FFF',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent:'space-between',
    alignItems:'center',
    
  },

  headerButton:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText : {
    fontSize: 16,
    fontWeight: 'bold',
  },
    repoList: {
      padding: 20,
    }
});
