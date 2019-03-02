
import React, { Component } from 'react';
import Button from 'react-native-button';

import {
View,
Image,
Alert,
Platform,
TextInput,
FlatList,
ActivityIndicator,
StyleSheet,
} from 'react-native';

import {
    List,
    ListItem,
    Text,
    Left,
    Body,
    Right,
    Thumbnail,
    Content
} from 'native-base';

export default class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { movieName: '', releaseYear: '', animating: true };
    }
    componentDidMount(){
        this.props.movies = this.props.onFetchMovies('DESC');  
        this.setState({animating: false});       
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Movies list
                </Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder='Enter new movie name'
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        value={this.state.releaseYear}
                        placeholder='Release year'
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            this.props.onFetchMovies('DESC')                    
                        }}>
                        Fetch movies
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            
                        }}>
                        Add Movie
                    </Button>
                </View>

                <View style={{display: (!this.state.animating) ? 'none' : 'flex',}}>
                    <View style={[styles.container, styles.horizontal]}>
                        <ActivityIndicator size="large" color="#0000ff" animating={this.state.animating} />
                    </View>
                </View>
                <Content style={{display: (this.state.animating) ? 'none' : 'flex',}}>
                    <List>
                        <FlatList
                            data={this.props.movies}
                            keyExtractor={(item) => item.title}
                            renderItem={({ item, index }) => (
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: item.poster }} />
                                </Left>
                                <Body>
                                    <Text>{item.title}</Text>
                                    <Text note>{item.releaseYear} . .</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>                   
                            )}
                        />
                    </List>
                </Content>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})