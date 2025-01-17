import React,{ Component } from 'react';
import PropTypes from 'prop-types'

class Todoitem extends Component{
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBNottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
        }

    markComplete = (e) => {

    }
    
render() {
    const{ id, title} = this.props.todo;
  return (
  <div style = {this.getStyle()}>
<p>
<input type="checkbox" onChange={this.props.markComplete.bind (this, id)} /> {' '}

{ title }

<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>

</p>
  </div>
  )
    
}
}

//proptypes
Todoitem.propTypes = {
    todo: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired

  }

  const btnStyle = {
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: ' 5px 9px',
      borderRadius: '50%' ,
      cursor: 'pointer',
      float: 'right'
  }
  

export default Todoitem;