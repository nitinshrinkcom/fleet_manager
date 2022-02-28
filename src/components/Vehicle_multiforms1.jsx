import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import aside_logo from '../logo1.png';
import right_img from '../check_r.png';
import Sidebar from './Sidebar'

export default class Vehicle_multiforms1 extends Component {
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
                                            <h1 className="mt-3 mb-2 sidebar_heading">AJOUTER UN VEHICULE</h1>
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
                                                                            <div className="step_line active" data-desc="Creation du vehicule"> <span>1</span></div>
                                                                            <div className="step_line" data-desc="">2</div>
                                                                            <div className="step_line" data-desc="">3</div>
                                                                            <div className="step_line" data-desc="">4</div>
                                                                            <div className="step_line" data-desc=""><img src={right_img} alt="right_check" className="img-fluid" style={{"width":"22px", "height":"22px", "marginBottom": "10px"}}/></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-18">
                                                                        <div className="step initial active">
                                                                            <h1 className="text-center wizardboldHeading">CREATION DE LA FICHE VEHICULE</h1>
                                                                            <div className="card card-bordered card-stretch mt-6 border col-md-8 mx-auto">
                                                                                <div className="card-body">

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">ID</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <p className="text-start fw-bolder">0987</p>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Marque</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <select className="form-select">
                                                                                                <option> Marque</option>
                                                                                                <option value={1}>Option 1</option>
                                                                                                <option value={2}>Option 2</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Modele</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <select className="form-select">
                                                                                                <option> Modele</option>
                                                                                                <option value={1}>Option 1</option>
                                                                                                <option value={2}>Option 2</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Version</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <select className="form-select">
                                                                                                <option> Version</option>
                                                                                                <option value={1}>Option 1</option>
                                                                                                <option value={2}>Option 2</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Boite manuelle</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <select className="form-select">
                                                                                                <option> Boite manuelle</option>
                                                                                                <option value={1}>Option 1</option>
                                                                                                <option value={2}>Option 2</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Puissance Fiscale</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <select className="form-select">
                                                                                                <option> Puissance Fiscale</option>
                                                                                                <option value={1}>Option 1</option>
                                                                                                <option value={2}>Option 2</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Carburant</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <select className="form-select">
                                                                                                <option> Diesel</option>
                                                                                                <option value={1}>Option 1</option>
                                                                                                <option value={2}>Option 2</option>
                                                                                            </select>
                                                                                            <span className="fw-boldest" style={{ "color": "orange" }}>*</span>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Mise en circulation</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <input type="date" className="form-control" name="date" id="date" placeholder="Date de mise en circulation" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Statut</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <select className="form-select">
                                                                                                <option>En commande</option>
                                                                                                <option value={1}>Option 1</option>
                                                                                                <option value={2}>Option 2</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row mt-3 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <p className="fw-boldest float-end" style={{ "color": "rgb(255 120 48)" }}>* Completez les champs requis </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-4 col-sm-12"></div>
                                                                        <div className="col-md-6 col-sm-12 mt-3">
                                                                            <Link to="/vech_wizard2" className="btn enregContBtn reggBTN float-end">ENREGISTRER ET CONTINUER</Link>
                                                                            <Link to="/vech_wizard2" className="btn enregBtn reggBTN me-3 float-end">ENREGISTRER</Link>
                                                                        </div>
                                                                        <div className="col-md-2 col-sm-12"></div>
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
        );
    }
}
