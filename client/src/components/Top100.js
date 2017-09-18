import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  },

  pointer: {
    cursor: 'pointer',
    color: 'red'
  }
}

const Top100 = ({ id, complete, name, updateTop100, deleteTop100 }) => (
  <div className="col s12">
    <div className="col s8">
      <span style={ complete ? styles.complete : {} } className="center">
        { name }
      </span>
    </div>

    <div className="col s2">
      <input
        id={`Top100-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateTop100(id)}
      />
      <label htmlFor={`Top100-${id}`}>Complete?</label>
    </div>

    <div style={ styles.pointer } onClick={ () => deleteTop100(id) } className="col s2">
      X
    </div>
  </div>
)

export default Top100;
