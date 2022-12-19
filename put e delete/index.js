import React, {Component} from 'react';
import {View, Text, StileSheet} from 'react-native';
import axios from 'axios';

class Home extends Component { 
    state = { 
        id: 3,
        title: 'JS',
        Author: 
    };

    onUpdate() { 
        axios 
        .put( 
         `https://www.meugameusado.com.br/api/vl/update${this.state.id}`,
        )
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    
    }

    render(){ 
        return <View style={styles.maincontainer} />;
    }

    onUpdate() { 
        axios 
        .delete( https://www.meugameusado.com.br//api/vl/update${this.state.id}
    
