define([
    "react",
    "react-dom"
], function(React, ReactDOM) {
    console.log(React);
    var something = React.createClass({
        getInitialState: function() {
            return {
                showFirstNameError: true && window.data.errors && window.data.errors.first_name,
                showLastnameError: true && window.data.errors && window.data.errors.last_name,
                showUsernameError: true && window.data.errors && window.data.errors.username,
                showEmailError: true && window.data.errors && window.data.errors.email
            }
        },
        componentDidMount: function() {
            Materialize.updateTextFields();
        },
        submitForm: function() {
            // debugger;
            var params = {
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val(),
                username: $("#username").val(),
                email: $("#email").val(),
            }
            this.post("/", params)
        },
        post: function(path, params, method) {
            method = method || "post"; // Set method to post by default if not specified.

            // The rest of this code assumes you are not using a library.
            // It can be made less wordy if you use one.
            var form = document.createElement("form");
            form.setAttribute("method", method);
            form.setAttribute("action", path);

            for(var key in params) {
                if(params.hasOwnProperty(key)) {
                    var hiddenField = document.createElement("input");
                    hiddenField.setAttribute("type", "hidden");
                    hiddenField.setAttribute("name", key);
                    hiddenField.setAttribute("value", params[key]);

                    form.appendChild(hiddenField);
                 }
            }
            document.body.appendChild(form);
            form.submit();
        },
        renderFirstNameInput: function() {
            var classNames = ["validate"];
            var error = "";
            if(this.state.showFirstNameError) {
                classNames.push("invalid")
                error = window.data.errors.first_name;
            }
            return (
                <div className="input-field col s12">
                    <input defaultValue={window.data.values.first_name || ""} placeholder="John" id="first_name" type="text" className={classNames.join(" ")}/>
                    <label data-error={error} htmlFor="first_name">First Name</label>
                </div>
            )
        },
        renderLastNameInput: function() {
            var classNames = ["validate"];
            var error = "";
            if(this.state.showLastnameError) {
                classNames.push("invalid")
                error = window.data.errors.last_name;
            }
            return (
                <div className="input-field col s12">
                    <input defaultValue={window.data.values.last_name || ""} placeholder="Doe" id="last_name" type="text" className={classNames.join(" ")}/>
                    <label data-error={error} htmlFor="last_name">Last Name</label>
                </div>
            )
        },
        renderUsernameInput: function() {
            var classNames = ["validate"];
            var error = "";
            if(this.state.showUsernameError) {
                classNames.push("invalid")
                error = window.data.errors.username;
            }
            return (
                <div className="input-field col s12">
                    <input defaultValue={window.data.values.username || ""} placeholder="john_doe" id="username" type="text" className={classNames.join(" ")}/>
                    <label data-error={error} htmlFor="username">Username</label>
                </div>
            )
        },
        renderEmailInput: function() {
            var classNames = ["validate"];
            var error = "";
            if(this.state.showEmailError) {
                classNames.push("invalid")
                error = window.data.errors.email;
            }
            return (
                <div className="input-field col s12">
                    <input defaultValue={window.data.values.email || ""} placeholder="john@doe.com" id="email" data-error={error} type="text" className={classNames.join(" ")}/>
                    <label data-error={error} htmlFor="email">Email</label>
                </div>
            )
        },
        render: function() {
            return (
                <div>
                    <div className="z-depth-5 container">
                        <div className="row">
                            <h2>Register</h2>
                        </div>
                        <div className="row">
                            {this.renderFirstNameInput()}
                        </div>
                        <div className="row">
                            {this.renderLastNameInput()}
                        </div>
                        <div className="row">
                            {this.renderUsernameInput()}
                        </div>
                        <div className="row">
                            {this.renderEmailInput()}
                        </div>
                        <div className="row">
                            <button onClick={this.submitForm} style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}}className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    });
    return something;
});
