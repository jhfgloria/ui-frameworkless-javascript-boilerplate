import uuidv1 from 'uuid/v1.js';

class ComponentStore {
  constructor() {
    this.components = {};
  }

  addComponent(component) {
    this.components[component.identifier] = component;
  }

  removeComponent(identifier) {
    delete this.components[identifier];
  }

  removeDereferenced() {
    const referencedIdentifiers = Array.prototype.slice.call(document.querySelectorAll('[data-id]'))
      .map(el => el.getAttribute('data-id'));
    Object.keys(this.components).forEach(identifier => {
      if (referencedIdentifiers.indexOf(identifier) === -1) this.removeComponent(identifier);
    });
  }
}

const componentStore = new ComponentStore();

export default class Component {
  constructor(obj) {
    this.props = obj || {};
    this.identifier = uuidv1();
    this.state = {};
    componentStore.addComponent(this);
  }

  _hiddenRender() {
    const topElement = this.render().element;
    topElement.setAttribute('data-component', this.constructor.name);
    topElement.setAttribute('data-id', this.identifier);
    return topElement;
  }

  _update() {
    const outerElement = document.querySelector(`[data-id='${this.identifier}']`);
    //May already been dereferenced
    outerElement && outerElement.replaceWith(this._hiddenRender());
    componentStore.removeDereferenced();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this._update();
  }

  render() {
    return undefined;
  }
}