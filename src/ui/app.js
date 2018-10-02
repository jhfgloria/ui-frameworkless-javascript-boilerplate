import Component from '../lib/dom/component.js';
import Router from '../lib/router';
import { div, h1 } from '../lib/dom/dom.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const component = new Router({
      homeComponent: Home, 
      routes: {
        '/': Home
      }
    });

    return div(component);
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h1('Welcome to UI frameworkless JavaScript boilerplate');
  }
}
