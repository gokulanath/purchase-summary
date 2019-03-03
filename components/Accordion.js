import * as React from 'react';

const context = React.createContext({
  isOpen: true,
});

const { Provider, Consumer } = context;

export default class Accordion extends React.Component {
  state = {
    isOpen: false
  };

  toggleAccordion = () => {
    this.setState((state) => ({
      isOpen: !state.isOpen
    }));
  };

  render() {
    return (
      <Provider
        value={{
          isOpen: this.state.isOpen,
          toggleAccordion: this.toggleAccordion
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

function AccordionToggler({children}) {
 return  (<Consumer>
    {({isOpen, toggleAccordion}) => children(isOpen, toggleAccordion)}
  </Consumer>)
}

function AccordionContent({children}) {
  return (
    <Consumer>
      {({isOpen}) => isOpen ? children : null}
    </Consumer>
  );
}

export {
  AccordionToggler,
  AccordionContent
}

