import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import aside_logo from '../logo1.png';
import right_img from '../check_r.png';
import Sidebar from './Sidebar'

export default class Vehicle_multiforms2 extends Component {
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
                                                                            <div className="step_line active" data-desc=""> 1</div>
                                                                            <div className="step_line active" data-desc="Contrat"><span>2</span></div>
                                                                            <div className="step_line" data-desc="">3</div>
                                                                            <div className="step_line" data-desc="">4</div>
                                                                            <div className="step_line" data-desc=""><img src={right_img} alt="right_check" className="img-fluid" style={{ "width": "22px", "height": "22px", "marginBottom": "10px" }} /></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-18">
                                                                        <div className="step initial active">
                                                                            <h1 className="text-center wizardboldHeading">CONTRAT DU VEHICULE</h1>
                                                                            <div className="card card-bordered card-stretch mt-6 border col-md-8 mx-auto">
                                                                                <div className="card-body">

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Numero de contrat</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <input type="text" className="form-control" name="numero" id="numero" placeholder="Numero de contrat" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Duree</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <input type="text" className="form-control" name="duree" id="duree" placeholder="Duree en mois" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Date d'entree</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <input type="date" className="form-control" name="date1" id="date1" placeholder="Date d'entree" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Date de sortie</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <input type="date" className="form-control" name="date2" id="date2" placeholder="Date de sortie" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Km au contrat</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <input type="text" className="form-control" name="km_contrat" id="km_contrat" placeholder="Km au contrat" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-2 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Pneus au contrat</p>
                                                                                        </div>
                                                                                        <div className="col-sm-8 col-md-8">
                                                                                            <div className="row">
                                                                                                <div className="col-md-6 col-sm-12">
                                                                                                    <select className="form-select">
                                                                                                        <option> Nombre de pneus HIVER</option>
                                                                                                        <option value={1}>Option 1</option>
                                                                                                        <option value={2}>Option 2</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                                <div className="col-md-6 col-sm-12">
                                                                                                    <select className="form-select">
                                                                                                        <option>Nombre de pneus ETE</option>
                                                                                                        <option value={1}>Option 1</option>
                                                                                                        <option value={2}>Option 2</option>
                                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Loyer HT</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <input type="text" className="form-control" name="loyer_ht" id="loyer_ht" placeholder="Loyer HT" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="row mt-4 row-cols-2">
                                                                                        <div className="col-sm-4 col-md-4">
                                                                                            <p className="text-start fw-bolder">Loyer TTC</p>
                                                                                        </div>
                                                                                        <div className="col-sm-4 col-md-8">
                                                                                            <input type="text" className="form-control" name="loyer_ttc" id="loyer_ttc" placeholder="Loyer TTC" />
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
                                                                        <div className="col-md-2 col-sm-12"></div>
                                                                        <div className="col-md-2 col-sm-12 mt-3">
                                                                            <Link to="#" className="btn enregBtn reggBTN me-3 float-start">PRECEDENT</Link>
                                                                        </div>
                                                                        <div className="col-md-6 col-sm-12 mt-3">
                                                                            <Link to="/vech_wizard3" className="btn enregContBtn reggBTN float-end">ENREGISTRER ET CONTINUER</Link>
                                                                            <Link to="/vech_wizard3" className="btn enregBtn reggBTN me-3 float-end">ENREGISTRER</Link>
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
