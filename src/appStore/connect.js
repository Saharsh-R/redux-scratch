import { Component } from "react"
import { createContext } from "react";



const ReduxContext = createContext("redux");

const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);  



const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
  class Connect extends Component {
    constructor(props) {
      super(props);

      this.state = props.store.getState();
    }

    componentDidMount() {
      // it remembers to subscribe to the store so it doesn't miss updates
      this.unsubscribe = this.props.store.subscribe(this.handleChange.bind(this))
    }
    
    componentWillUnmount() {
      // and unsubscribe later
      this.unsubscribe()
    }
  
    handleChange() {
      // and whenever the store state changes, it re-renders.
      this.forceUpdate()
    }

    // componentDidMount() {
    //   this.props.store.subscribe(state => {
    //     this.setState(state);
    //   });
    // }

    render() {
      const { store } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    }
  }

  return props => (
    <ReduxContext.Consumer>
      {store => <Connect {...props} store={store} />}
    </ReduxContext.Consumer>
  );
};
export default connect
export {Provider} 