import React, { useState, useEffect } from 'react';
import '../styles/contact.css'

const Contact = (props) => {

    const [state, setState] = useState({ name: "", email: "", message: "" });

    function onChange(event) {
        const { name, value } = event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }

    function clearState() {
        setState({ name: "", email: "", message: "" });
    }
    // console.log(document.getElementsByClassName("btnOne")[0].disabled = false)
    useEffect(() => {
        const btn = document.getElementsByClassName("btnOne")[0]; 
        if (state.name !== "" && state.message !== "" && state.email !== "") {
            btn.disabled = false;
            btn.classList.add("activeBtn")
        } else {
            btn.disabled = true;
            btn.classList.remove("activeBtn")
        }
    }, [state])

    return (
        <form action="https://formkeep.com/f/1a1a98ea0db7"
            accept-charset="UTF-8"
            enctype="multipart/form-data"
            method="POST">
            <header className="contactHeader">
                <h2>Interested in working together?</h2>
                <p>Hit me up!</p>
            </header>
            <div className="row">
                <div className="nameEmailContainer">
                    <input className="nameEmail name" type="text" value={state.name} name="name" id="name" placeholder="Name" autoComplete="off" onChange={onChange} />
                    <input className="nameEmail email" type="text" value={state.email} name="email" id="email" placeholder="Email" autoComplete="off" onChange={onChange} />
                </div>
                <textarea className="subMessage" value={state.message} name="message" id="message" placeholder="Message" onChange={onChange} ></textarea>

                <div className="buttons inp">
                    <input className="clearBtn butn" type="reset" value="Clear Form" onClick={clearState} />
                    <input className="btnOne butn" type="submit" value="Send Message" disabled />
                </div>
            </div>
        </form>
    )
}
export default Contact