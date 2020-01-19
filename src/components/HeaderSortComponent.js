import React, { Component } from "react";



class HeaderSortComponent extends Component {
  constructor(props){
    super(props);
    this.state= {selectedOption : ''};
  }
  
  
  handleItemClick = (index) => {
    this.setState({
      activeItem: index,
    })
  }


  render() {
    return (
     
        <div className="row hide-on-med-and-down"><ul className="filterList">
        <li><a href="#" key={0} >Sort By</a></li>
        <li><a href="#" key={1} className={this.state.activeItem === 1 ? 'activetxt': ''} onClick={ () => {this.handleItemClick(1);this.props.onSortApply('{"field":"price","sort":"asc"}')} }>Price -- High Low</a></li>
        <li><a href="#" key={2} className={this.state.activeItem === 2 ? 'activetxt': ''} onClick={ () => {this.handleItemClick(2);this.props.onSortApply('{"field":"price","sort":"desc"}') }}>Price -- Low High</a></li>
        <li><a href="#" key={3} className={this.state.activeItem === 3 ? 'activetxt': ''} onClick={ () => {this.handleItemClick(3);this.props.onSortApply('{"field":"discount","sort":"desc"}') }}>Discount</a></li>
      </ul></div>

        
          

         
    );
  }
}

export default HeaderSortComponent;
