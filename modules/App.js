import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div style={{width:'80%',marginLeft: '10%'}}>
        <span style={{fontSize:'40px',marginBottom:'20px'}} > nick</span><br/>
        <div  style={{float:'right'}}><span> <NavLink to="/" onlyActiveOnIndex>Home</NavLink></span>      <span><NavLink to="/repos">仓库</NavLink></span>        <span><NavLink to="/about">关于我</NavLink></span></div>
         <br/>
         <hr/>
        {this.props.children}
      </div>
    )
  }
})
