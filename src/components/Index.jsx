import React, { Component } from 'react'
import signIn from '../signinLogo.png';
import { Link } from 'react-router-dom'
import $ from 'jquery';

export default class Index extends Component {
    componentDidMount() {
        $(".toggle-password").click(function () {

            $(this).toggleClass("fa-eye fa-eye-slash");
            var input = $($(this).attr("toggle"));
            if (input.attr("type") === "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
        });
    }
    render() {
        return (
            <div>
                <div className="signInBg">
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center panel-body">
                            <img src={signIn} alt="sign_in" className="img-fluid customLogoSign" />
                            <form action="#" method="post" className="form-horizontal" >
                                <div className="form-group">
                                    <input type="email" className="form-control customFormIP" name="email" placeholder="Email" />
                                </div>
                                <div className="form-group position-relative mt-3">
                                    <input id="password-field" type="password" className="form-control customFormIP" name="password" defaultValue="dummy" />
                                    <span toggle="#password-field" className=" text-light fa fa-fw fa-eye field-icon toggle-password" />
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label text-light" htmlFor="flexCheckDefault">
                                           Se souvenir de moi
                                        </label>
                                </div>
                                <div className="mt-8">
                                    <Link to="/dashboard" className="btn signBtn">SE CONNECTER</Link>
                                </div>

                                <div className="mt-4 text-center">
                                 <Link to="#" className="text-dark text-decoration-underline fw-boldest">Mot de passe oublie</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
