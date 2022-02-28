import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import img_1 from '../collab_image.jpg';
import fingerprint from '../fingerprint.png';
import wheel from '../wheel.png';
import pump from '../pump.png';
import telephone from '../Toll_Road.png';


class Collaborators extends Component {
    render() {
        return (
            <div>
                <div className="d-flex flex-column flex-root">
                    <div className="page d-flex flex-row flex-column-fluid">
                       
                       <Sidebar />
                        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                            <div className="content d-flex flex-column flex-column-fluid mt-12" id="kt_content">

                                <div className="post d-flex flex-column-fluid" id="kt_post">

                                    <div id="kt_content_container" className="container-xxl">
                                        
                                    <div className="d-flex align-items-center d-lg-none ms-n2 me-2"
                                    title="Show aside menu"
                                >
                                    <div
                                        className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                                        id="kt_aside_mobile_toggle"
                                    >
                                        <span className="svg-icon svg-icon-1">
                                            <i className="fas fa-bars fa-2x text-dark" ></i>
                                        </span>
                                    </div>
                                </div>

                                        
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="headandLink d-flex justify-content-around align-items-center">
                                                <h1 className="mt-3 mb-2 sidebar_heading">COLLABORATEUR</h1>
                                                <Link className="btn btn-dark custom_plusBtn ms-5 mt-2"><i className="fas fa-user me-2"></i>ID 99234</Link>
                                            </div>
                                            <div className="cornerLinkbtn">
                                                <Link className="btn custom_plusBtnTransp"><i className="fas fa-arrow-left me-1"></i>Retour a la liste des collaborateur</Link>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-12 padding_web padding_mobile">
                                                <div className="flex-column justify-content-between align-items-center">
                                                    <div className="box_1">
                                                        <div className="card w-100">
                                                            <div className="card-body">
                                                                <img src={img_1} alt="collab_photo" className="d-block m-auto img-fluid shadow collab_img" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="box_2 mt-3">
                                                        <div className="card">
                                                            <div className="card-body">
                                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                                    <h2 className="text-center text-dark mt-2">DOCUMENTS</h2>
                                                                    <Link className="btn customplusBtn"><i className="fas fa-plus ms-1"></i></Link>
                                                                </div>
                                                                <hr />
                                                                <div className="mt-2">
                                                                    <table className="table gy-5 gs-7 rounded fw-bold">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td><img src={fingerprint} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">CARTE IDENTITE</h5><small className="fw-bold">n<sup>o</sup> 0123456789</small></td>
                                                                                <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td><img src={wheel} alt="fingerprint" className="img-fluid document_images" /></td>
                                                                                <td><h5 className="fw-bold">PERMIS</h5><small className="fw-bold"> contrat n<sup>o</sup> 0123456789</small></td>
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
                                                                        </tbody>

                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-9 col-sm-12 collabCard padding_web padding_mobile">
                                                <div className="card" >
                                                    <div className="card-body">
                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800" }}>COLLABORATEUR</h2>
                                                            <Link to="#" className="btn customplusBtn" data-bs-toggle="modal" data-bs-target="#kt_modal_1"><i class="fas fa-pencil-alt ms-1 text-dark"></i></Link>
                                                        </div>
                                                        <hr />
                                                        <ul className="list-group list-group-flush font-weight-bold">
                                                            <li className="list-group-item ps-0">Categorie</li>
                                                            <li className="list-group-item ps-0">Prenom</li>
                                                            <li className="list-group-item ps-0">Nom</li>
                                                            <li className="list-group-item ps-0">Email</li>
                                                            <li className="list-group-item ps-0">Site Hanes</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-md-4 col-sm-12 blackBoxCard padding_right0">
                                                        <div className="card">
                                                            <div className="card-body bg-dark text-white">
                                                                <div className="card-title d-flex justify-content-between align-items-center">
                                                                    <h3 className="text-center mt-2" style={{ "fontWeight": "800", "color": "#fff" }}>VEHICULE AFFECTE</h3>
                                                                    <Link className="btn customplusBtn"><i class="fas fa-pencil-alt ms-1 text-dark"></i></Link>
                                                                </div>
                                                                <hr />
                                                                <div className="whitebox mt-2">
                                                                    <h2 className="text-center whiteboxText">EW-586-VN</h2>
                                                                </div>
                                                                <ul className="list-group list-group-flush blackBoxList mt-1">
                                                                    <li className="list-group-item ps-0">48</li>
                                                                    <li className="list-group-item ps-0">5/16/18</li>
                                                                    <li className="list-group-item ps-0">5/15/22</li>
                                                                </ul>
                                                                <div className="mt-5">
                                                                    <Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 col-sm-12">
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <div className="notification_box">
                                                                <div className="card" >
                                                                    <div className="card-body">
                                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800" }}>NOTIFICATION</h2>
                                                                        </div>
                                                                        <hr />
                                                                        <div className="notification_content">
                                                                            <p class="pt-2"><i className="fas fa-bell me-2 text-dark"></i> Date | Fin affectation du vehicule</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="sinistres_box mt-2">
                                                                <div className="card" >
                                                                    <div className="card-body">
                                                                        <div className="card-title d-flex justify-content-between align-items-center">
                                                                            <h2 className="text-center mt-2" style={{ "fontWeight": "800" }}>SINISTRES</h2>
                                                                            <Link className="btn customplusBtn"><i class="fas fa-pencil-alt ms-1 text-dark"></i></Link>
                                                                        </div>
                                                                        <hr />
                                                                        <table className="table gy-5 gs-7 rounded fw-bold">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>Data |  Nom du sinistre | statut du sinistre</td>
                                                                                    <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>Data |  Nom du sinistre | statut du sinistre</td>
                                                                                    <td><Link to="#"><i className="fas fa-eye text-dark"></i></Link></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <Link to="#" className="text-dark text-decoration-underline">Voir toutes les sinistres</Link>
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

                {/* COLLABORATEUR MODAL  */}
                <div className="modal fade" tabIndex={-1} id="kt_modal_1">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content px-6">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark">COLLABORATEUR</h5>
                                {/*begin::Close*/}
                                <div className="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                    <span className="text-dark fw-bolder text-decoration-underline"> Fermer </span>
                                </div>
                                {/*end::Close*/}
                            </div>
                            <div className="modal-body">
                                <form action="#" method="post" id="collab_form" autocomplete="off">
                                    <div className="row">
                                        <div className="col-md-3 col-sm-12">
                                            <label class="fs-5 fw-bold mb-2">NOM</label>
                                        </div>
                                        <div className="col-md-9 col-sm-12">
                                            <input type="text" class="form-control form-control-solid" placeholder="Nom" name="name" />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-3 col-sm-12">
                                            <label class="fs-5 fw-bold mb-2">PRENOM</label>
                                        </div>
                                        <div className="col-md-9 col-sm-12">
                                            <input type="text" class="form-control form-control-solid" placeholder="Prenom" name="prenom" />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-3 col-sm-12">
                                            <label class="fs-5 fw-bold mb-2">EMAIL</label>
                                        </div>
                                        <div className="col-md-9 col-sm-12">
                                            <input type="email" class="form-control form-control-solid" placeholder="Email" name="email" />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-3 col-sm-12">
                                            <label class="fs-5 fw-bold mb-2">CATEGORIE</label>
                                        </div>
                                        <div className="col-md-9 col-sm-12">
                                            <input type="text" class="form-control form-control-solid" placeholder="Categorie" name="category" />
                                        </div>
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-3 col-sm-12">
                                            <label class="fs-5 fw-bold mb-2">SITE HANES</label>
                                        </div>
                                        <div className="col-md-9 col-sm-12">
                                            <input type="text" class="form-control form-control-solid" placeholder="Site Hanes" name="site_hanes" />
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                        <button type="submit" className="btn registerBtn">ENREGISTRER</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Collaborators;
