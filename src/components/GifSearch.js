import React from 'react'

class GifSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    this.props.getGifs(this.state.query);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              onChange={this.handleChange}
              name="search"
              id="search"
              value={this.state.query}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default GifSearch
