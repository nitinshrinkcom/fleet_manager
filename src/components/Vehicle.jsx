import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import fingerprint from '../fingerprint.png';
import wheel from '../wheel.png';
import pump from '../pump.png';
import telephone from '../Toll_Road.png';
import sun from '../sun (1).png';
import ice from '../ice.png';
import shield from '../shield.png';
import paper from '../paper.png';
import dummyPDF from '../dummy.pdf';
import Sidebar from './Sidebar';

export default class Vehicle extends Component {
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
                                        <div className="d-flex justify-content-between align-items-center mb-3 vehicu_btns">
                                            <div className="veh_box d-flex">
                                                <h1 className="mt-3 mb-2 sidebar_heading">VEHICULES</h1>
                                                <Link className="btn btn-dark custom_carBtn ms-18"><i className="fas fa-car-side me-2"></i>ID 99234</Link>
                                            </div>
                                            <Link className="btn custom_transBtn"><i className="fas fa-chevron-left me-2"></i>Retour a la liste des vehicules</Link>
                                        </div>

                                        <div className="row" id="vehicleSection">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="row">
                                                    <div className="col-md-6 col-sm-12 vehicle_sectionOneCard padding_web padding_mobile">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-end align-items-center">
                                                                    <div className="blueIcon_bg text-center">
                                                                        <Link to="#"><i className="fas fa-pencil-alt text-dark"></i> </Link>
                                                                    </div>
                                                                </div>
                                                                <div className="image">
                                                                    <img src="#" alt="img" className="img-fluid" />
                                                                    <h2 className="text-center text-dark mt-4" style={{ "fontWeight": "700" }}>XX-00-XX</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 vehicle_sectionOne padding_web padding_mobile">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between align-items-end">
                                                                    <div className="veh_headings">
                                                                        <h1 className="text-start vhead">Vehicule</h1>
                                                                    </div>
                                                                    <div className="blueIcon_bg text-center">
                                                                        <Link to="#"> <i className="fas fa-pencil-alt text-dark"></i> </Link>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="d-flex flex-column justify-content-start mt-3" style={{ "fontWeight": "700" }}>
                                                                    <p className="text-start">Marque</p>
                                                                    <p className="text-start">Modele | Version</p>
                                                                    <p className="text-start">Boite</p>
                                                                    <p className="text-start">Puissance fiscale</p>
                                                                    <p className="text-start">Energie</p>
                                                                    <p className="text-start">Date de mise en circulation</p>
                                                                </div>
                                                                <hr />
                                                                <div className="d-flex flex-column justify-content-start" style={{ "fontWeight": "700" }}>
                                                                    <p className="text-start" style={{ "color": "orange" }}>CONTRAT</p>
                                                                    <p className="text-start mt-2">Duree</p>
                                                                    <p className="text-start">Date d'entree | Date de sortie</p>
                                                                    <p className="text-start">Loyer HT</p>
                                                                    <p className="text-start">Loyer TTC</p>
                                                                    <p className="text-start" style={{ "color": "green" }}>STATUT ACTIF</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-md-6 col-sm-12 padding_web padding_mobile">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between align-items-end">
                                                                    <div className="veh_headings">
                                                                        <h1 className="text-start vhead">Documents</h1>
                                                                    </div>
                                                                    <div className="blueIcon_bg text-center">
                                                                        <Link to="#" data-bs-toggle="modal" data-bs-target="#kt_modal_3"> <i className="fas fa-plus text-dark"></i> </Link>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="mt-2 table-responsive">
                                                                    <table className="table gy-5 gs-7 rounded fw-bold">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td><img src={paper} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">CONTRAT</h5><small className="fw-bold">n<sup>o</sup> 0123456789</small></td>
                                                                                <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><img src={pump} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">CARTE ESSENCE</h5><small className="fw-bold">n<sup>o</sup> 0123456789</small></td>
                                                                                <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><img src={telephone} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">TELEPEAGE</h5><small className="fw-bold">n<sup>o</sup> 0123456789</small></td>
                                                                                <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><img src={wheel} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">CARTE GRISE</h5><small className="fw-bold" style={{ "lineHeight": "12px" }}> contrat n<sup>o</sup> 0123456789</small></td>
                                                                                <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><img src={fingerprint} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">CARTE GRISE</h5><small className="fw-bold" style={{ "lineHeight": "12px" }}> contrat n<sup>o</sup> 0123456789</small></td>
                                                                                <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><img src={shield} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">ASSURANCE</h5><small className="fw-bold" style={{ "lineHeight": "12px" }}> contrat n<sup>o</sup> 0123456789</small></td>
                                                                                <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                            </tr>
                                                                        </tbody>

                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-sm-12 padding_web padding_mobile">
                                                        <div className="d-flex flex-column justify-content-between align-items-center">
                                                            <div className="kilometer_box w-100">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex justify-content-between align-items-end">
                                                                            <div className="veh_headings">
                                                                                <h1 className="text-start vhead">KILOMETARAGE</h1>
                                                                            </div>
                                                                            <div className="blueIcon_bg text-center">
                                                                                <Link to="#"> <i className="fas fa-pencil-alt text-dark"></i> </Link>
                                                                            </div>
                                                                        </div>
                                                                        <hr />
                                                                        <div className="d-flex flex-column justify-content-start mt-3" style={{ "fontWeight": "700" }}>
                                                                            <p className="text-start">CONTRAT: 100 000 kms</p>
                                                                            <Link to="#" className="btn-km mt-5">Releve du Date: xx xxx km </Link>
                                                                            <Link to="#" className="text-decoration-underline text-dark mt-8">Voir les autres releves</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="pneumatiques_box w-100 mt-2" id="pneumatiques_box">
                                                                <div className="card">
                                                                    <div className="card-body">
                                                                        <div className="d-flex justify-content-between align-items-end">
                                                                            <div className="veh_headings">
                                                                                <h1 className="text-start vhead">PNEUMATIQUES</h1>
                                                                            </div>
                                                                            <div className="blueIcon_bg text-center">
                                                                                <Link to="#"> <i className="fas fa-pencil-alt text-dark"></i> </Link>
                                                                            </div>
                                                                        </div>
                                                                        <hr />
                                                                        <div className="mt-2 table-responsive">
                                                                            <table className="table gy-5 gs-7 rounded fw-bold">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td><img src={sun} alt="sun" className="img-fluid document_images" /></td>
                                                                                        <td><h5 className="fw-bold">PNEUS ETE</h5></td>
                                                                                        <td><div className="d-flex flex-column align-items-center"><p className="text-start">Consommes : 2</p> <p className="text-start text-decoration-underline">Restants : 2</p></div></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td><img src={ice} alt="ice" className="img-fluid document_images" /></td>
                                                                                        <td><h5 className="fw-bold">PNEUS ETE</h5></td>
                                                                                        <td><div className="d-flex flex-column align-items-center"><p className="text-start">Consommes : 0</p> <p className="text-start text-decoration-underline">Restants : 4</p></div></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12 padding_web padding_mobile">
                                                <div className="row">
                                                    <div className="col-md-12 col-sm-12 collaborateurCard">
                                                        <div className="card w-100">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between align-items-end">
                                                                    <div className="veh_headings">
                                                                        <h1 className="text-start vhead">COLLABORATEUR</h1>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="row">
                                                                    <div className="col-md-7 col-sm-6">
                                                                        <p className="text-start">ID COLLAB | NOM | PRENOM</p>
                                                                    </div>
                                                                    <div className="col-md-5 col-sm-6">
                                                                        <i className="fas fa-eye text-dark"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 col-sm-12 historicCard mt-3">
                                                        <div className="card w-100">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between align-items-end">
                                                                    <div className="veh_headings">
                                                                        <h1 className="text-start vhead">HISTORIQUE DES INTERVENTIONS</h1>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="mt-3 history_section">
                                                                    <p className="text-dark"><i className="fas fa-bell text-dark ms-3" data-bs-toggle="modal" data-bs-target="#kt_modal_2"></i> Date | Controle technique</p>
                                                                </div>

                                                                <div className="mt-5 table-responsive">
                                                                    <table class="table table-striped gy-5 gs-7 rounded fw-bold customLineHeight">
                                                                        <thead>
                                                                            <tr className="fw-bold fs-6 text-gray-800 px-7">
                                                                                <td>DATE <i className="fa fa-sot me-2"></i></td>
                                                                                <td>TYPE D'INTERVENTION <i className="fa fa-sot me-2"></i></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>24/03/2018 </td>
                                                                                <td>Contrôle technique</td>
                                                                                <td>Controle Technique n°1</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td>Facture</td>
                                                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>12/12/2017 </td>
                                                                                <td>Entretien</td>
                                                                                <td>Pose pneus hiver</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td>Facture</td>
                                                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>09/08/17 </td>
                                                                                <td>Révision Constructeur</td>
                                                                                <td>Révision N°1</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td>Facture</td>
                                                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td>09/07/2017 </td>
                                                                                <td>Intervention Carrosserie</td>
                                                                                <td>Carrosserie Sinistre 1</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td>Facture</td>
                                                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                                                            </tr>

                                                                            <tr>
                                                                                <td>25/06/2017</td>
                                                                                <td>Intervention mécanique</td>
                                                                                <td>Mécanique Sinistre 1</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td>Facture</td>
                                                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="mt-6">
                                                                        <Link className="text-decoration-underline text-dark">Voir toutes les interventions</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12 col-sm-12 sinisCard mt-3">
                                                        <div className="card w-100">
                                                            <div className="card-body">
                                                                <div className="d-flex justify-content-between align-items-end">
                                                                    <div className="veh_headings">
                                                                        <h1 className="text-start vhead">SINISTRES</h1>
                                                                    </div>
                                                                </div>
                                                                <hr />


                                                                <div className="mt-2 table-responsive">
                                                                    <table class="table table-striped gy-5 gs-7 rounded fw-bold customLineHeight">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>Date |</td>
                                                                                <td>Nom du sinistre |</td>
                                                                                <td>Statut de sinistre</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>Date |</td>
                                                                                <td>Nom du sinistre |</td>
                                                                                <td>Statut de sinistre</td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td></td>
                                                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="mt-6">
                                                                        <Link className="text-decoration-underline text-dark">Voir toutes les interventions</Link>
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
                {/* HISTORIC DES MODAL  */}
                <div className="modal fade" tabIndex={-1} id="kt_modal_2">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark">HISTORIQUE DES INTERVENTIONS</h5>
                                {/*begin::Close*/}
                                <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                    <span className="text-dark fw-bolder text-decoration-underline"> Fermer </span>
                                </div>
                                {/*end::Close*/}
                            </div>
                            <div className="modal-body">
                                <div className="history_section">
                                    <p className="text-dark"><i className="fas fa-bell text-dark ms-3"></i> Date | Controle technique</p>
                                </div>
                                <div className="mt-5 table-responsive">
                                    <table class="table table-striped gy-5 gs-7 rounded fw-bold customLineHeight">
                                        <thead>
                                            <tr className="fw-bold fs-6 text-gray-800 px-7">
                                                <td>DATE <i className="fa fa-sot me-2"></i></td>
                                                <td>TYPE D'INTERVENTION <i className="fa fa-sot me-2"></i></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Date |</td>
                                                <td>Type d'intervention |</td>
                                                <td>Nom Intervention</td>
                                                <td></td>
                                                <td></td>
                                                <td>Facture</td>
                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Date |</td>
                                                <td>Type d'intervention |</td>
                                                <td>Nom Intervention</td>
                                                <td></td>
                                                <td></td>
                                                <td>Facture</td>
                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Date |</td>
                                                <td>Type d'intervention |</td>
                                                <td>Nom Intervention</td>
                                                <td></td>
                                                <td></td>
                                                <td>Facture</td>
                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Date |</td>
                                                <td>Type d'intervention |</td>
                                                <td>Nom Intervention</td>
                                                <td></td>
                                                <td></td>
                                                <td>Facture</td>
                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                            </tr>
                                            <tr>
                                                <td>Date |</td>
                                                <td>Type d'intervention |</td>
                                                <td>Nom Intervention</td>
                                                <td></td>
                                                <td></td>
                                                <td>Facture</td>
                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                            </tr>

                                            <tr>
                                                <td>Date |</td>
                                                <td>Type d'intervention |</td>
                                                <td>Nom Intervention</td>
                                                <td></td>
                                                <td></td>
                                                <td>Facture</td>
                                                <td><Link to="#"><i className="fas fa-eye me-1 text-dark"></i></Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DOCUMENTS MODAL  */}
                <div className="modal fade" tabIndex={-1} id="kt_modal_3">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark">NOM DU DOCUMENT</h5>
                                {/*begin::Close*/}
                                <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                    <span className="text-dark fw-bolder text-decoration-underline"> Fermer </span>
                                </div>
                                {/*end::Close*/}
                            </div>
                            <div className="modal-body">
                                <p className="text-start fw-bolder">
                                    Nom du document <br />
                                    N<sup>o</sup> de contrat
                                </p>
                                <div className="ratio ratio-1x1">
                                    <iframe src={dummyPDF} title="PDF Document" allowfullscreen frameborder="0" id="iframe_pdf"></iframe>
                                </div>

                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <button type="submit" className="btn downloadBtn">TELECHARGER</button>
                                    <button type="submit" className="btn modifyBtn ms-3"><i className="fas fa-pencil-alt text-dark"></i> MODIFIER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
