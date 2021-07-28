import React,{Component} from 'react'
import './ItemAddForm.css';


export default class ItemAddForm extends Component{
    state={
        value:''
    }
    onValueChange=(event)=>{
        this.setState({
            value:event.target.value
        })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.props.onItemAdded(this.state.value)
        this.setState({
            value:''
        })
    }

    render(){
        return(
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                
                <input 
                type="text" 
                className="form-control" 
                onChange={this.onValueChange}
                placeholder="What needs to be done."
                value={this.state.value} />
                
                <button 
                className="btn btn-outline-secondary" 
                >Add item</button>
            </form>
        )
    }
}
