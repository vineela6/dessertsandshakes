import React from 'react'
import { Link } from 'react-router-dom'
const Contact=()=>{
    return(
<>
<div class="contact-pageheader">

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-7 col-md-12 col-sm-12 ">
                    <div class="contact-caption "  style={{marginTop:'180px'}}>
                        <h1 class="contact-title" style={{fontStyle: 'italic', fontFamily: 'PT Serif'}}>Don’t Be Shy, Talk to Us</h1>
                        <p class="contact-text">Here is a few approaches to get in touch with us. It would be ideal if you send an email, fill the contact form <strong>We are looking forward to speaking with you.</strong>
                        </p>
                    </div>
                </div>
                <div class=" col-lg-5  col-md-5 col-sm-12 ">
                    <div class="contact-form bg-light d-flex justify-content-center py-5  shadow mt-5">
                        
                        <div class="row">
                            <form>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only " for="Name"></label>
                                        <input id="name" type="text" placeholder="Name" class="form-control" required/>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only " for="email"></label>
                                        <input id="email" type="text" placeholder="Email" class="form-control" required/>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label class="control-label sr-only " for="Phone"></label>
                                        <input id="phone" type="text" placeholder="Phone" class="form-control" required/>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="form-group">
                                        <label class="control-label required sr-only" for="select"></label>
                                        <select class="form-control">
                                            <option value="">What Are You Getting In Touch?</option>
                                            <option value="">Time Management</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb20">
                                    <div class="form-group">
                                        <label class="control-label sr-only" for="textarea"></label>
                                        <textarea class="form-control pdt20" id="textarea" name="textarea" rows="4" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                                    <Link to='/Thankyou'><button class="btn btn-dark btn-lg ">Send message</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</>
    )

}
export default Contact;