// import React, { Component } from 'react';
// import Song from './components/Song';
// import axios from 'axios';
//
// import NewSongForm from './components/NewSongForm';
// import SongListForm from './components/SongListForm';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//
//           <h2>Top 100 Songs</h2>
//
//           <button onClick={this.new_song_path}>New Song</button>
//         </div>
//         <Song />
//       </div>
//     );
//   }
// }
//
// export default App;
import React, { Component } from 'react';
import SongList from './components/SongList';
import SongForm from './components/SongForm';
import axios from 'axios';


class App extends Component {
  state = { top100s: [] }

  componentDidMount() {
    axios.get('/api/songs')
      .then( res => this.setState({ top100s: res.data }) )
  }

  addSong = (name) => {
    const { top100s } = this.state;
    axios.post('/api/songs', { song: { name }} )
      .then( res => {
        this.setState({ top100s: [res.data, ...top100s] })
      })
  }

  updateTop100 = (id) => {
    //TODO update todo in db
    axios.put(`/api/songs/${id}`)
      .then( res => {
        let top100s = this.state.top100s.map( top100 => {
          if (top100.id === id)
            return res.data
          return top100
        });

        this.setState({ top100s })
      })
  }

  deleteTop100 = (id) => {
    //TODO remove todo from db
    const { top100s } = this.state;
    axios.delete(`/api/songs/${id}`)
      .then( res => {
        this.setState({ top100s: top100s.filter( t => t.id !== id ) })
      })
  }

  render() {
    return (
      <div className="container">

      <h2>Top 100 Songs</h2>
        <SongForm addSong={this.addSong} />
        <SongList
          top100s={this.state.top100s}
          updateTop100={this.updateTop100}
          deleteTop100={this.deleteTop100}
        />
      </div>
    );
  }
}

export default App;
