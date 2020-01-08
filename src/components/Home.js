import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart,fetch_cart_list_from_api } from './actions/cartActions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }
    componentDidMount() {
        this.props.fetch_cart_list_from_api();
    }
  
    render(){
        console.log(this.props.items);
        let itemList = this.props.items && this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img_url} alt={item.name}/>
                            <span className="card-title">{item.name}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.category}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        fetch_cart_list_from_api: ()=>{dispatch(fetch_cart_list_from_api())},

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)