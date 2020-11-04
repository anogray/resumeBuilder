import React from "react";
import {NavLink} from "react-router-dom";
import update from 'immutability-helper';
import {fieldCd, skinCodes}  from '../../constants/typeCodes';
import {connect} from 'react-redux';
import ResumePreview from './resumePreview'
import * as contactActions from '../../actions/contactActions';
import { bindActionCreators } from 'redux';

  class Contact extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
              contactSection:this.props.contactSection,
              skinCd:this.props.skinCd
          };       
    }
 
    // onChange=(event)=>{
    //     var key =event.target.name;
    //     var val =event.target.value;
    //     this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
    // }
    onChange = (event) => {
        let key = event.target.name
        let val = event.target.value
        //this.setState({...this.state, contactSection: {...this.state.contactSection,  [event.target.name]: event.target.value  } })
        this.setState({contactSection: update(this.state.contactSection, { $merge: {[key]:val} })})
  
    
    }
    
    onSubmit=()=>{
        console.log(this.state.contactSection);
        // database call

        this.props.history.push('/education');
        this.props.contactActions.add(this.state.contactSection)

    }

  render() { 
    const { educationSection, contactSection } = this.state
    return (
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
                    <h2 className="form-heading center">Personal Details</h2>
                    <div className="form-section">
                        <div className="input-group"><label>First Name</label>
                            <div className="effect"><input type="text" name={fieldCd.FirstName} value={this.state.contactSection[fieldCd.FirstName]}  onChange={this.onChange}  /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Last Name</label>
                            <div className="effect"><input type="text" name={fieldCd.LastName}  value={this.state.contactSection[fieldCd.LastName]}
                             onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group full"><label>Professional Summary</label>
                            <div className="effect"><input type="text" name={fieldCd.ProfSummary}  value={this.state.contactSection[fieldCd.ProfSummary]}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Email</label>
                            <div className="effect"><input type="text"  name={fieldCd.Email} value={this.state.contactSection[fieldCd.Email]}  onChange={this.onChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Phone</label>
                            <div className="effect"><input type="text"  name={fieldCd.Phone} value={this.state.contactSection[fieldCd.Phone]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>Profession</label>
                            <div className="effect"><input type="text"  name={fieldCd.Profession} value={this.state.contactSection[fieldCd.Profession]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Street</label>
                            <div className="effect"><input type="text" name={fieldCd.Street}  value={this.state.contactSection[fieldCd.Street]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>City</label>
                            <div className="effect"><input type="text" name={fieldCd.City} value={this.state.contactSection[fieldCd.City]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>

                        <div className="input-group"><label>State</label>
                            <div className="effect"><input type="text"   name={fieldCd.State} value={this.state.contactSection[fieldCd.State]} onChange={this.onChange} /><span></span>
                            </div>
                            <div className="error"></div>
                        </div>


                        <div className="input-group"><label>Country</label>
                            <div className="effect"><input type="text"  name={fieldCd.Country} value={this.state.contactSection[fieldCd.Country]}  onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="input-group"><label>Pin Code</label>
                            <div className="effect"><input type="text" name={fieldCd.ZipCode} value={this.state.contactSection[fieldCd.ZipCode]} onChange={this.onChange}/><span></span>
                            </div>
                            <div className="error"></div>
                        </div>
                        <div className="form-buttons">
                            <button onClick={this.onSubmit} className="btn hvr-float-shadow" type='button'>Next</button>
                            <NavLink to='/getting-started'  className="center">Back</NavLink>
                        </div>
                    </div>

                </div>

                <div className="preview-card">
                    <ResumePreview contactSection={this.state.contactSection} ></ResumePreview>
                </div>

            </div>
        </div>
    );
  }
}
 const mapStateToProps =(state)=>{
    return {
        contactSection:state.contactSection,
        skinCd:state.document.skinCd
    }
 }

 const mapDispatchToProps=(dispatch)=>{
    return{
        contactActions:bindActionCreators(contactActions, dispatch)
    }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Contact)