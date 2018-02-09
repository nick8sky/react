import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },


  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/mysql1">React Router</NavLink>
                <br/><span  style={{fontSize:'12px'}}>&nbsp;&nbsp;&nbsp;&nbsp; 添加的注释</span>
          </li>
          <li><NavLink to="/mysql1">React</NavLink>
                <br/><span style={{fontSize:'12px'}}>&nbsp;&nbsp;&nbsp;&nbsp; 添加的注释</span>
          </li>
          <li><NavLink to="/mysql1">我</NavLink>
                <br/><span style={{fontSize:'12px'}}>&nbsp;&nbsp;&nbsp;&nbsp; 添加的注释</span>
          </li>


        </ul>
        {this.props.children}
      </div>
    )
  }
})
