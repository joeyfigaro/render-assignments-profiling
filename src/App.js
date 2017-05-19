import React, { Component } from 'react';
import { inc } from 'ramda';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	static initialState = {
		renderCount: 0
	}

	constructor(props) {
		super(props);

		this.state = {
			renderCount: 0
		};

		this.incrementRenderCount = this.incrementRenderCount.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	incrementRenderCount() {
		return this.setState(({ renderCount }, props) => ({
			renderCount: inc(renderCount)
		}));
	}

	componentDidMount() {
		return this.incrementRenderCount();
	}

	handleClick(e) {
		return this.incrementRenderCount();
	}

  render() {
  	const h2 = 'Memory Usage';
  	const h3 = 'Const Assignments In Render()';
  	const renderCount = this.state.renderCount;
  	const Paragraph = () => (
  		<p className="App-intro">This component has been rendered {renderCount} times</p>
  	);
  	const Headings = () => (
  		<div>
	  		<h2>{h2}</h2>
	  		<h3>{h3}</h3>
	  	</div>
  	);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Headings />
        </div>
        <Paragraph />
        <button onClick={this.handleClick}>Re-render</button>
      </div>
    );
  }
}

export default App;
