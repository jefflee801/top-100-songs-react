import React from 'react';

class NewSongForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.name);
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Song"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default NewSongForm;
