import React from 'react';


function ContactUs() {
    const handleSubmit=event=>{
     event.preventDefault();
     alert("f");
    }
    return(
        <div className="wrapper">
            <h1>How About Them Apples</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" value=""/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Email</p>
                        <input name="email" value="" />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Contact</p>
                        <input name="contact" value="" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;