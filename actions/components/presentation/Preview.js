import React, { Component } from 'react'
import ResumePreview from "./resumePreview";
import {skinCodes} from '../../constants/typeCodes';

import {connect } from 'react-redux'
export class Preview extends Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      educationSection: this.props.educationSection,
      contactSection:this.props.contactSection,
      skinCd:this.props.skinCd
    }
  }

  onChange = (event) => {
    // this.setState({...this.state, educationSection: {...this.state.educationSection,  [event.target.name]: event.target.value  } })
    this.setState({...this.state, educationSection: {...this.state.educationSection  } })
  }
  onSubmit = (e) => {
   console.log(this.state.educationSection);
  }
  render() {
    const { educationSection, contactSection } = this.state
    return (
      <div className="container med finalize-page" >
        <div className="funnel-section ">
            <div className="finalize-preview-card ">
              <ResumePreview contactSection={contactSection} educationSection={educationSection}></ResumePreview>   
            </div>
            <div className="finalize-settings">
          <div className="section">
            <h1 className=" center">
              Select a resume template to get started</h1>
            <p className=" center">
              You’ll be able to edit and change this template later!
            </p>
            <div className="styleTemplate ">
              {
              skinCodes.map((value, index) => {
              return( <div className="template-card rounded-border">

                <i className={this.state.skinCd==value?'fa fa-check-circle selected':'hide'} aria-hidden="true"></i>
                <img className={this.state.skinCd==value?'active':''} src={'/images/' + value + '.svg' } />
                <button className="btn-select-theme" onClick={()=>this.onChange(value)}  type='button'>USE TEMPLATE</button>
              </div>);
              })
        }
      </div>

    </div>
  </div>
        </div>

      {/* <div>
       <div class="slider">
       <input type="radio" name="testimonial" id="t-1"/>
       <input type="radio" name="testimonial" id="t-2"/>
       <input type="radio" name="testimonial" id="t-3" checked/>
       <input type="radio" name="testimonial" id="t-4"/>
       <input type="radio" name="testimonial" id="t-5"/>
       <div class="testimonials">
         <label class="item" for="t-1">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-2">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-3">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-4">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
         <label class="item" for="t-5">
           <img src="http://lorempixel.com/output/nature-q-c-126-126-1.jpg" alt="picture"/>
           <p>"Raw denim you probably haven't heard of them jean short austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse."</p>
           <h2>- Princy, Web Developer</h2>
         </label>
       </div>
       <div class="dots">
         <label for="t-1"></label>
         <label for="t-2"></label>
         <label for="t-3"></label>
         <label for="t-4"></label>
         <label for="t-5"></label>
       </div>
     </div>
      </div> */}

      </div>
    );
  }
}

  

const mapStateToProps=(state)=>{
  return {
      contactSection:state.contactReducer.contactSection,
      educationSection:state.educationReducer.educationSection,
      skinCd:state.documentReducer.document.skinCd
  }
}

export default connect(mapStateToProps,null)(Preview)
