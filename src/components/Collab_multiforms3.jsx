import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import aside_logo from '../logo1.png';
import right_img from '../check_r.png';
import Sidebar from './Sidebar'

export default class Collab_multiforms3 extends Component {

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
                                                                            <div className="step_line active" data-desc="Fiche collaborateur"><span>3</span></div>
                                                                            <div className="step_line" data-desc="">4</div>
                                                                            <div className="step_line" data-desc="">5</div>
                                                                            <div className="step_line" data-desc=""><img src={right_img} alt="right_check" className="img-fluid" style={{"width":"22px", "height":"22px", "marginBottom": "10px"}}/></div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div className="wizard-body mt-18 overflow-auto">
                                                                        <div className="step initial active">
                                                                            <h1 className="text-center">FICHE COLLABORATEUR</h1>
                                                                            <div className="row mt-8">
                                                                                <div className="col-md-7 col-sm-12 mt-4">
                                                                                    <div className="card card-bordered">
                                                                                        <div className="card-header">
                                                                                            <h3 className="card-title fw-bolder">COLLABORATEUR</h3>
                                                                                        </div>
                                                                                        <div className="card-body">
                                                                                            <div className="row">
                                                                                                <div className="col-md-3 col-sm-12">
                                                                                                    <label class="fs-5 fw-bold mb-2">ID CODENEKT</label>
                                                                                                </div>
                                                                                                <div className="col-md-9 col-sm-12">
                                                                                                    <p className="text-start fw-bolder">99234</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-4">
                                                                                                <div className="col-md-3 col-sm-12">
                                                                                                    <label class="fs-5 fw-bold mb-2">NOM</label>
                                                                                                </div>
                                                                                                <div className="col-md-9 col-sm-12">
                                                                                                    <p className="text-start fw-bolder">Nom</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-4">
                                                                                                <div className="col-md-3 col-sm-12">
                                                                                                    <label class="fs-5 fw-bold mb-2">PRENOM</label>
                                                                                                </div>
                                                                                                <div className="col-md-9 col-sm-12">
                                                                                                    <p className="text-start fw-bolder">Prenom</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-4">
                                                                                                <div className="col-md-3 col-sm-12">
                                                                                                    <label class="fs-5 fw-bold mb-2">EMAIL</label>
                                                                                                </div>
                                                                                                <div className="col-md-9 col-sm-12">
                                                                                                    <p className="text-start fw-bolder">Email@email.com</p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-4">
                                                                                                <div className="col-md-3 col-sm-12">
                                                                                                    <label class="fs-5 fw-bold mb-2">CATEGORIE</label>
                                                                                                </div>
                                                                                                <div className="col-md-9 col-sm-12">
                                                                                                    <input type="text" class="form-control form-control-solid" defaultValue="Categorie" />
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="row mt-4">
                                                                                                <div className="col-md-3 col-sm-12">
                                                                                                    <label class="fs-5 fw-bold mb-2">SITE HANES</label>
                                                                                                </div>
                                                                                                <div className="col-md-9 col-sm-12">
                                                                                                    <input type="text" class="form-control form-control-solid" defaultValue="Site Hanes" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-md-5 colsm-12 mt-4">
                                                                                    <div className="card card-bordered">
                                                                                        <div className="card-header">
                                                                                            <h3 className="card-title fw-bolder">DOCUMENTS</h3>
                                                                                        </div>
                                                                                        <div className="card-body">
                                                                                            <div className="mt-8">
                                                                                                <div className="row">
                                                                                                    <div className="col-md-8 col-sm-6">
                                                                                                        <h3 className="text-start fw-bolder">CARTE IDENTITE</h3> <br />
                                                                                                        <small className="text-start fw-bolder">n<sup>o</sup> 0123456789</small>
                                                                                                    </div>
                                                                                                    <div className="col-md-4 col-sm-6">
                                                                                                        <Link to="#"><i className="fas fa-eye text-dark fa-2x"></i></Link>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <hr />
                                                                                                <div className="row">
                                                                                                    <div className="col-md-8 col-sm-6">
                                                                                                        <h3 className="text-start fw-bolder">PERMIS</h3> <br />
                                                                                                    </div>
                                                                                                    <div className="col-md-4 col-sm-6">
                                                                                                        <Link to="#" style={{ "color": "orange" }}>Document manquant</Link>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="d-flex justify-content-center align-items-center mt-7 mb-12">
                                                                                                    <Link to="#" className="w-100 envourBtn">ENVOYER UN RAPPEL A VOTRE COLLABORATEUR</Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-between align-items-center mt-4">
                                                                                        <Link to="/collab_wizard4" className="btn enregBtn reggBTN">ENREGISTRER</Link>
                                                                                        <Link to="/collab_wizard4" className="btn enregContBtn reggBTN">ENREGISTRER ET CONTINUER</Link>
                                                                                    </div>
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
