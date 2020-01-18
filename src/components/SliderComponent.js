import 'rc-slider/assets/index.css';

import React, { Component } from 'react';
import Slider from 'rc-slider';



class SliderComponent extends Component{

    constructor(props){
        super(props);
     this.state={ priceRange : [0,100]}
    }

    log =(value) =>{
        console.log(value); //eslint-disable-line
            this.setState({priceRange: value});
      }


    render(){
        const Range = Slider.Range;

        
        return(
<React.Fragment>
                    <div className="ruler" >
                    <label>Price: </label>
                        <Range allowCross={false} defaultValue={[0, 100]} onChange={this.log} marks={{0:'$100',100:'$10,000'}}/>             
                    </div>
                    <div className="sliderapply">
                        <button class="btn blue accent-4 btncurve" type="submit" name="action" onClick={ () => {this.props.onApply(this.state.priceRange)}}>
                        <a className="modal-close"> Apply </a>
                        </button>
                    </div>
                    </React.Fragment>
              
        )
}
}

export default SliderComponent;