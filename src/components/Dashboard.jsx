import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class Dashboard extends Component {
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
                                        <div className="d-flex justify-content-start align-items-center">
                                            <h1 className="mt-3 mb-2 dashboard_heading">TABLEAU DE BORD</h1>
                                            <h3 className="text-end mb-2 mx-3 dashboard_subheading">Bievenue Prenom</h3>
                                        </div>

                                        <div className="row dashButn">
                                            <div className="col-md-8">
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-12">
                                                        <Link className="btn btn-dark custom_plusBtn w-100"><i className="fas fa-plus me-2"></i>AJOUTER UN COLLABORATEUR</Link>
                                                    </div>
                                                    <div className="col-md-4 col-sm-12">
                                                        <Link className="btn btn-dark custom_plusBtn w-100"><i className="fas fa-plus me-2"></i>AJOUTER UN VEHICULE</Link>
                                                    </div>
                                                    <div className="col-md-4 col-sm-12">
                                                        <Link className="btn btn-dark custom_plusBtn w-100 last_btn"><i className="fas fa-plus me-2"></i>DECLARER UN SINISTRE</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                {/* <div className="col-md-3 col-sm-12"> */}
                                                {/* <form action="#" method="post" className="position-relative mb-3" autoComplete="off"> */}
                                                {/* <input type="text" className="search-input form-control custom_search-bar shadow" name="search" placeholder="Recherche Nom collaborateur par exemple" />
                                                    <button type="submit" className="btn custom_search-btn"><i className="fas fa-search"></i></button>
                                                </form> */}
                                                {/* </div> */}
                                            </div>


                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-3 col-sm-12 DashboardCard padding_web padding_mobile">
                                                <div className="d-flex flex-column">
                                                    <div className="vehcile_box_1">
                                                        <div className="card position-relative">
                                                            <div className="card-body bg-dark text-white">
                                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                                    <h2 className="text-center mt-2" style={{ "fontWeight": "800", "color": "#000" }}>VEHICULE </h2>
                                                                </div>
                                                                <hr />
                                                                <div className="whitebox mt-2 mx-auto">
                                                                    <Link className="btn customNumBtn" to="#"><span className="text-center">212</span></Link>
                                                                </div>

                                                                <div className="mt-2 active-details d-flex flex-column justify-content-between align-items-center">
                                                                    <table className="table table-responsive">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>ACTIFS</td>
                                                                                <td><div className="actif-numb">204</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>INACTIFS</td>
                                                                                <td><div className="inactif-numb">8</div></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>EN COMMANDE</td>
                                                                                <td><div className="commande-numb">3</div></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                                <div className="position-absolute mt-3" style={{ "bottom": "10px" }}>
                                                                    <Link to="#" className="btn table_btn_gredient text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vehcile_box_2 mt-4">
                                                        <div className="card position-relative vehicle2Card">
                                                            <div className="card-body bg-dark text-white">
                                                                <div className="card-title d-flex justify-content-center align-items-center">
                                                                    <h2 className="text-center mt-2" style={{ "fontWeight": "800", "color": "#000" }}>TCO par mois </h2>
                                                                </div>
                                                                <hr />

                                                                <div className="mt-3">
                                                                    <div className="row">
                                                                        <div className="col-md-4 col-sm-12">
                                                                            <p className="text-start" style={{ "fontWeight": "700", "color": "#000", "fontSize": "10px" }}>COUT TOTAL DU PARC</p>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <Link className="btn vehcile2Btn" style={{ "fontWeight": "800", "color": "#000", "fontSize": "13px" }} to="#"><span className="text-center">30212,90 €</span></Link>
                                                                        </div>
                                                                    </div>

                                                                    <div className="row mt-3">
                                                                        <div className="col-md-4 col-sm-12">
                                                                            <p className="text-start" style={{ "fontWeight": "700", "color": "#000", "fontSize": "10px" }}>COUT MOYEN PAR VEHICULE</p>
                                                                        </div>
                                                                        <div className="col-md-8 col-sm-12">
                                                                            <Link className="btn vehcile2Btn" style={{ "fontWeight": "800", "color": "#000", "fontSize": "13px" }} to="#"><span className="text-center">212,90 €</span></Link>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className="position-absolute mt-3" style={{ "bottom": "10px" }}>
                                                                    <Link to="#" className="btn table_btn_gredient text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 padding_web padding_mobile">
                                                <div className="card dash_notificationCard" >
                                                    <div className="card-body">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800" }}>NOTIFICATIONS...</h2>
                                                        </div>
                                                        <hr />
                                                        <div className="row mt-2">
                                                            <div className="col-md12 col-sm-12">
                                                                <table id="kt_datatable_example_5" class="table table-striped gy-5 gs-7 rounded fw-bold">
                                                                    <thead>
                                                                        <tr className="fs-6 text-gray-800 px-7">
                                                                            <th>DATE <i className="fas fa-sot me-2"></i></th>
                                                                            <th>Type d'intervention</th>
                                                                            <th></th>
                                                                            <th></th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><i className="fas fa-bell me-2 text-danger"></i>Date</td>
                                                                            <td>Type d'intervention</td>
                                                                            <td>XX-00-XX</td>
                                                                            <td></td>
                                                                            <td><Link to="#" className="text-decoration-underline text-dark"> CONSULTER</Link></td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-3 col-sm-12 DashboardSinistres padding_web padding_mobile">
                                                <div className="card position-relative">
                                                    <div className="card-body bg-dark text-white">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800", "color": "#000" }}>SINISTRES</h2>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-md-12 col-sm-12">
                                                                <div className="d-flex flex-column justify-content-start align-items-start sinistres_data">
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>XX-00-XX</p>
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>Date</p>
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>Statut Declarer</p>
                                                                    <Link to="#" className="text-start" style={{ "fontWeight": "800", "color": "red", "textDecoration": "underline" }}>CONSULTER</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-sm-12 mt-7">
                                                                <div className="d-flex flex-column justify-content-start align-items-start sinistres_data">
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>XX-00-XX</p>
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>Date</p>
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>Statut Declarer</p>
                                                                    <Link to="#" className="text-start" style={{ "fontWeight": "800", "color": "red", "textDecoration": "underline" }}>CONSULTER</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12 col-sm-12 mt-7">
                                                                <div className="d-flex flex-column justify-content-start align-items-start sinistres_data">
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>XX-00-XX</p>
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>Date</p>
                                                                    <p className="text-start" style={{ "fontWeight": "800", "color": "#000" }}>Statut Declarer</p>
                                                                    <Link to="#" className="text-start" style={{ "fontWeight": "800", "color": "red", "textDecoration": "underline" }}>CONSULTER</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-13">
                                                            <Link to="#" className="btn table_btn_gredient text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link>
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

export default Dashboard