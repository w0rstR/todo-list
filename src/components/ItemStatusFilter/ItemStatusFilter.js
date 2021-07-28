import React,{Component} from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component{
  
  buttons=[
    {name:'all',value:'All'},
    {name:'active',value:'Active'},
    {name:'done',value:'Done'}

  ]
  
  render(){

    const {filter,onFilterChange}=this.props
    
    const buttons=this.buttons.map(({name,value})=>{
      const isActive = filter ===name
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
       return(
        <button type="button"
            className={`btn ${clazz}`} 
            key={name}
            onClick={()=>onFilterChange(name)}>{value}
        </button>
       )
    })
    return (
      <div className="btn-group">
          {buttons}
      </div>
    );
  }
}


