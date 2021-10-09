import React from 'react';
import axios from 'axios';

export class Fib extends React.Component {
  state = {
    indices: [],
    values: {},
    index: '',
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndices();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');

    this.setState({ values: values.data });
  }

  async fetchIndices() {
    const indices = await axios.get('/api/values/all');

    this.setState({ indices: indices.data });
  }

  renderIndices() {
    return this.state.indices.map((index) => index.number).join(', ')
  }

  renderValues() {
    return Object.keys(this.state.values).map((key) => <div key={key}>
      For index {key} I calculated {this.state.values[key]}
    </div>)
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value})}
          />
          <button>Submit</button>
        </form>
        <h3>Indices I have seen</h3>
        {this.renderIndices()}
        <h3>Calculated Values</h3>
        {this.renderValues()}
      </div>
    );
  }
}
