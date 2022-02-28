import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import aside_logo from '../logo1.png';
import right_img from '../check_r.png';
import Sidebar from './Sidebar'
 import $ from 'jquery';

export default class Collab_multiforms6 extends Component {

    componentDidMount() {
        // Checking button status ( wether or not next/previous and
        // submit should be displayed )
        const checkButtons = (activeStep, stepsCount) => {
            const prevBtn = $("#wizard-prev");
            const nextBtn = $("#wizard-next");
            const submBtn = $("#wizard-subm");

            switch (activeStep / stepsCount) {
                case 0: // First Step
                    prevBtn.hide();
                    submBtn.hide();
                    nextBtn.show();
                    break;
                case 1: // Last Step
                    nextBtn.hide();
                    prevBtn.show();
                    submBtn.show();
                    break;
                default:
                    submBtn.hide();
                    prevBtn.show();
                    nextBtn.show();
            }
        };

        // Scrolling the form to the middle of the screen if the form
        // is taller than the viewHeight
        const scrollWindow = (activeStepHeight, viewHeight) => {
            const steps = $(".wizard-body .step");
            if (viewHeight < activeStepHeight) {
                $(window).scrollTop($(steps[activeStepHeight]).offset().top - viewHeight / 2);
            }
        };

        // Setting the wizard body height, this is needed because
        // the steps inside of the body have position: absolute
        const setWizardHeight = activeStepHeight => {
            $(".wizard-body").height(activeStepHeight);
        };

        $(function () {
            // Form step counter (little cirecles at the top of the form)
            const wizardSteps = $(".wizard-header .wizard-step");
            // Form steps (actual steps)
            const steps = $(".wizard-body .step");
            // Number of steps (counting from 0)
            const stepsCount = steps.length - 1;
            // Screen Height
            const viewHeight = $(window).height();
            // Current step being shown (counting from 0)
            let activeStep = 0;
            // Height of the current step
            let activeStepHeight = $(steps[activeStep]).height();

            checkButtons(activeStep, stepsCount);
            setWizardHeight(activeStepHeight);

            // Resizing wizard body when the viewport changes
            $(window).resize(function () {
                setWizardHeight($(steps[activeStep]).height());
            });

            // Previous button handler
            $("#wizard-prev").click(() => {
                // Sliding out current step
                $(steps[activeStep]).removeClass("active");
                $(wizardSteps[activeStep]).removeClass("active");

                activeStep--;

                // Sliding in previous Step
                $(steps[activeStep]).removeClass("off").addClass("active");
                $(wizardSteps[activeStep]).addClass("active");

                activeStepHeight = $(steps[activeStep]).height();
                setWizardHeight(activeStepHeight);
                checkButtons(activeStep, stepsCount);
            });

            // Next button handler
            $("#wizard-next").click(() => {
                // Sliding out current step
                $(steps[activeStep]).removeClass("inital").addClass("off").removeClass("active");
                $(wizardSteps[activeStep]).removeClass("active");

                // Next step
                activeStep++;

                // Sliding in next step
                $(steps[activeStep]).addClass("active");
                $(wizardSteps[activeStep]).addClass("active");

                activeStepHeight = $(steps[activeStep]).height();
                setWizardHeight(activeStepHeight);
                checkButtons(activeStep, stepsCount);
            });
        });
    }
    render() {
        return (
            <div>
                <div className="d-flex flex-column flex-root">
                    <div className="page d-flex flex-row flex-column-fluid">
                      <Sidebar />

                        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                            <div className="content d-flex flex-column flex-column-fluid mt-12" id="kt_content">
                            <div className="d-flex align-items-center d-lg-none ms-n2 me-2"
                                    title="Show aside menu">
                                    <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_aside_mobile_toggle">
                                        <span className="svg-icon svg-icon-1">
                                            <i className="fas fa-bars fa-2x text-dark" ></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="post d-flex flex-column-fluid" id="kt_post">

                                    <div id="kt_content_container" className="container-xxl">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h1 className="mt-3 mb-2 sidebar_heading">AJOUTER UN COLLABORATEUR</h1>
                                        </div>
                                        <div className="mt-3">
                                            <div className="card card-bordered">
                                                <div className="card-body form-wizard">
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-12 col-lg-12">
                                                            <div className="wizard card-like">
                                                                <form action="#" method="post" autocomplete="off">
                                                                    <div className="mt-5 text-center wizard-header">
                                                                        <div id="steps_line">
                                                                            <div className="step_line active" data-desc="">1</div>
                                                                            <div className="step_line active" data-desc="">2</div>
                                                                            <div className="step_line active" data-desc="">3</div>
                                                                            <div className="step_line active" data-desc="">4</div>
                                                                            <div className="step_line active" data-desc="">5</div>
                                                                            <div className="step_line" data-desc="validation de la fiche collaborateur"><img src={right_img} alt="right_check" className="img-fluid" style={{"width":"22px", "height":"22px", "marginBottom": "10px"}}/></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="wizard-body mt-18 overflow-auto">
                                                                        <div className="step  active">
                                                                            <h1 className="text-center">VALIDATION DE LA FICHE COLLABORATEUR</h1>
                                                                            <div className="row">
                                                                                <div className="col-md-6 col-sm-12">
                                                                                    <div className="card card-bordered card-stretch">
                                                                                        <div className="card-body">
                                                                                            <h1 className="fw-bolder">COLLABORATEUR</h1>
                                                                                            <div className="row mt-4 row-cols-2">
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">ID CODENEKT</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">99234</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-4 row-cols-2">
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">NOM</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">Nom</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row mt-4 row-cols-2">
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">PRENOM</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">Prenom</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row mt-4 row-cols-2">
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">EMAIL</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">Email@email.com</p>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="row mt-4 row-cols-2">
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">SITE HANES</p>
                                                                                                </div>
                                                                                                <div className="col-sm-6 col-md-6">
                                                                                                    <p className="text-start fw-bolder">Site Hanes</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-6 col-sm-12">
                                                                                    <div className="row">
                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="card card-bordered card-stretch">
                                                                                                <div className="card-body">
                                                                                                    <h1 className="fw-bolder">DOCUMENTS</h1>
                                                                                                    <div className="row mt-4 row-cols-2">
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">CARTE IDENTITE <br /><small style={{ "lineHeight": "2" }}> n<sup>o</sup> 0123456789</small></p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <hr style={{ "margin": "0px" }} />
                                                                                                    <div className="row mt-4 row-cols-2">
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">PERMIS <br /><small style={{ "lineHeight": "2" }}> n<sup>o</sup> 0123456789</small></p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <hr style={{ "margin": "0px" }} />
                                                                                                    <div className="row mt-4 row-cols-2">
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">CARTE ESSENCE <br /><small style={{ "lineHeight": "2" }}> n<sup>o</sup> 0123456789</small></p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <hr style={{ "margin": "0px" }} />
                                                                                                    <div className="row mt-4 row-cols-2">
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">TELEPEAGE <br /><small style={{ "lineHeight": "2" }}> n<sup>o</sup> 0123456789</small></p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6 col-sm-12">
                                                                                            <div className="card card-bordered card-stretch">
                                                                                                <div className="card-body">
                                                                                                    <h1 className="fw-bolder">VEHICULE</h1>
                                                                                                    <div className="row mt-4">
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">XX-00-XXX</p>
                                                                                                        </div>
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">Marque</p>
                                                                                                        </div>
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">Modele | Version</p>
                                                                                                        </div>
                                                                                                        <div className="col-sm-12 col-md-12">
                                                                                                            <p className="text-start fw-bolder">Date de fin d'affectation</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="row mt-5">
                                                                                <div className="col-md-3 col-sm-12">
                                                                                    <Link to="#" className="enregBtn reggBTN float-left">PRECEDENT</Link>
                                                                                </div>

                                                                                <div className="col-md-2 col-sm-12"></div>

                                                                                <div className="col-md-3 col-sm-12">
                                                                                    <Link to="/collab_wizard7" className="btn enregBtn reggBTN float-end">ENREGISTRER</Link>
                                                                                </div>
                                                                                <div className="col-md-4 col-sm-12">
                                                                                    <Link to="/collab_wizard7" className="btn enregContBtn reggBTN float-left">ENREGISTRER ET CONTINUER</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
                    <span className="svg-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="black" />
                            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
                        </svg>
                    </span>
                </div>

            </div>
        )
    }
}
