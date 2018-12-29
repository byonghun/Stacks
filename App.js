/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MainStack from './src/components/main';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {start: true}
  render() {
    return (
      <View style={styles.container}>
        {this.state.start
          ? <Start changeViews={this.changeViews} />
          : <MainStack changeViews={this.changeViews} />}
      </View>
    );
  }

  changeViews = () => this.setState({start: !this.state.start})
}

class Start extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>Welcome to Stacks!</Text>
        <TouchableOpacity onPress={this.props.changeViews}>
          <Text style={styles.instructions}>Click to get started!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
