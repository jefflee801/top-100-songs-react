import React from 'react';
import Top100 from'./Top100';

const SongList = ({ top100s, updateTop100, deleteTop100 }) => (
  <div className="row">
    { top100s.map( top100 =>
        <Top100
          key={top100.id}
          updateTop100={updateTop100}
          deleteTop100={deleteTop100}
          {...top100}
        />
      )
    }
  </div>
)

export default SongList;
