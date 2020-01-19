import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import SliderComponent from './SliderComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSort} from '@fortawesome/free-solid-svg-icons'

class FilterModal extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <div>
        <a
          className=" modal-trigger"
          data-target="modal1"
        >
          <FontAwesomeIcon icon={faSort}/><span>Sort</span>
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
          <h4>Filter Options</h4>
          <SliderComponent onApply={this.props.onApply} />
          </div>

          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Cancel
            </a>
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default FilterModal;
