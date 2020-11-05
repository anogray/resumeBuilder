import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import { connect } from 'react-redux'
import * as documentActions from '../../actions/documentActions';
import {  bindActionCreators} from 'redux';

class GettingStarted extends React.Component{
     constructor(props, context) {
        super(props, context);
        this.state = {
            skinCd: this.props.skinCd
          }
        }
    // componentWillReceiveUpdate(nextProps){
    //     this.setState({skinCd:nextProps.skinCd})
    // }
    componentWillReceiveProps(nextProps){
        this.setState({skinCd:nextProps.skinCd})
      }
      onChange = (skinCd) => {

        //   this.setState({skinCd:skinCd})
          this.props.documentActions.setSkinCd(skinCd);  
        //   this.props.documentActions.changeFontFamily();          
          this.props.history.push('/contact');
      }

      render(){
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == this.state.skinCd? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>this.onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    }
}
  
const mapStateToProps=(state)=>{
    return {
        skinCd: state.documentReducer.document.skinCd
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        documentActions: bindActionCreators(documentActions, dispatch)
       // setSkinCd:(skinCd)=>(dispatch(documentAction.setSkin(skinCd)))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted)

