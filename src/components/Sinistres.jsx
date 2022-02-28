import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wheel from '../wheel.png';
import shield from '../shield.png';
import paper from '../paper.png';
import Sidebar from './Sidebar';

class Sinistres extends Component {
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
                                            <h1 className="mt-3 mb-2 sidebar_heading">SINISTRE</h1>
                                            <Link className="btn custom_plusBtnTransp"><i className="fas fa-arrow-left me-1"></i>Retour a la liste des sinistres</Link>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-12 blackBoxCard padding_web padding_mobile">
                                                <div className="card position-relative">
                                                    <div className="card-body bg-dark text-white">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800", "color": "#fff" }}>VEHICULE </h2>
                                                            <Link className="btn customplusBtn"><i class="fas fa-pencil-alt ms-1 text-dark"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <div className="whitebox mt-2">
                                                            <h2 className="text-center whiteboxText">XX-000-XX</h2>
                                                        </div>

                                                        <div className="position-absolute mb-3" style={{ "bottom": "10px" }}>
                                                            <Link to="#" className="btn table_btn_gredient text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 padding_web padding_mobile">
                                                <div className="card commentCard" >
                                                    <div className="card-body">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800" }}>COMMENTAIRE</h2>
                                                            <Link className="btn customplusBtn"><i class="fas fa-pencil-alt ms-1 text-dark"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-group list-group-flush font-weight-bold">
                                                            <li className="list-group-item">Champs libre</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-12 padding_web padding_mobile">
                                                <div className="card photosCard">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800" }}>PHOTOS</h2>
                                                            <Link className="btn customplusBtn"><i class="fas fa-plus ms-1 text-dark"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <table className="table gy-5 gs-7 rounded fw-bold">
                                                            <tbody>
                                                                <tr>
                                                                    <td>PIC010101 </td>
                                                                    <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>PIC010101</td>
                                                                    <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-3 col-sm-12 padding_web padding_mobile">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center text-dark mt-2" style={{ "fontWeight": "800" }}>DOCUMENTS</h2>
                                                            <Link className="btn customplusBtn"><i className="fas fa-plus ms-1"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <div className="mt-2">
                                                            <table className="table gy-5 gs-7 rounded fw-bold">
                                                                <tbody>
                                                                    <tr>
                                                                        <td><img src={paper} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                        <td><h5 className="fw-bold">CONSTAT</h5><small className="fw-bold">n<sup>o</sup> 0123456789</small></td>
                                                                        <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src={shield} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                        <td><h5 className="fw-bold">ASSURANCE</h5><small className="fw-bold"> contrat n<sup>o</sup> 0123456789</small></td>
                                                                        <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><img src={wheel} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                        <td><h5 className="fw-bold">PERMIS</h5><small className="fw-bold">n<sup>o</sup> 0123456789</small></td>
                                                                        <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                    </tr>
                                                                </tbody>

                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3 col-sm-12 padding_web padding_mobile">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center text-dark mt-2" style={{ "fontWeight": "800" }}>COLLABORATEUR</h2>
                                                            <Link className="btn customplusBtn ms-1"><i className="fas fa-plus ms-1"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <div className="mt-2">
                                                            <ul class="list-group list-group-flush">
                                                                <li class="list-group-item ulListDoc">Categorie</li>
                                                                <li class="list-group-item ulListDoc">Prenom</li>
                                                                <li class="list-group-item ulListDoc">Nom</li>
                                                                <li class="list-group-item ulListDoc">Email</li>
                                                                <li class="list-group-item ulListDoc">Site Hanes</li>
                                                                <li class="list-group-item ulListDoc">Numero de permis</li>
                                                                <li class="list-group-item ulListDoc">Temps Affectation vehicule</li>
                                                                <li class="list-group-item mt-2"><Link to="#" className="btn listBtngradient text-dark">VOIR LA FICHE COLLABORATEUR</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 padding_web padding_mobile">
                                                <div className="information_box">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="card-title">
                                                                <h2 className="text-start" style={{"fontWeight": "800"}}>INFORMATIONS </h2>
                                                                <hr />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6 col-sm-6"><h3 className="text-start text-dark">Date du sinistre</h3></div>
                                                                <div className="col-md-6 col-sm-6"><h3 className="text-start text-dark">Statut du sinistre</h3></div>
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

export default Sinistres;