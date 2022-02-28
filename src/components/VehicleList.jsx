import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

class VehicleList extends Component {
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
                      <h1 className="mt-3 mb-2 sidebar_heading">LISTE DE VEHICULES</h1>
                      <Link className="btn btn-dark custom_plusBtn"><i className="fas fa-plus me-2"></i>AJOUTER UN VEHICULE</Link>
                    </div>
                    <div className="card mt-3">

                      <div className="card-body">
                        {/* <div className="mt-2 col-md-5 col-sm-12">
                          <form action="#" method="post" className="position-relative mb-3" autoComplete="off">
                            <input type="text" className="search-input form-control custom_search-bar shadow" name="search" placeholder="Recherche Nom collaborateur par exemple" />
                            <button type="submit" className="btn custom_search-btn"><i className="fas fa-search"></i></button>
                          </form>
                        </div> */}

                        <div className="row mt-2">
                          <div className="col-md-12 col-sm-12">
                            <table id="kt_datatable_example_5" class="table table-striped gy-5 gs-7 rounded fw-bold">
                              <thead>
                                <tr className="fw-bold fs-6 text-gray-800 px-7">
                                  <th>IMMAT <i className="fa fa-sot me-2"></i></th>
                                  <th>MARQUE</th>
                                  <th>MODELE</th>
                                  <th>CAT</th>
                                  <th>COLLABORATEUR</th>
                                  <th>ENTREE</th>
                                  <th>SORTIE</th>
                                  <th>STATUT</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>EW-586-VN <i className="fas fa-sot me-2"></i></th>
                                  <th>PEUGEOT</th>
                                  <th>308</th>
                                  <th>4 - FDV</th>
                                  <th>SEGUINEAU Jerome</th>
                                  <th>5/16/18</th>
                                  <th>5/15/22</th>
                                  <th>actif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EW-845-PX <i className="fas fa-sot me-2"></i></th>
                                  <th>RENAULT</th>
                                  <th>KADJAR</th>
                                  <th>3-CVR</th>
                                  <th>TROCME Lambert</th>
                                  <th>5/4/18</th>
                                  <th>5/3/22</th>
                                  <th>actif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EY-721-DB <i className="fas fa-sot me-2"></i></th>
                                  <th>FIAT</th>
                                  <th>500X</th>
                                  <th></th>
                                  <th></th>
                                  <th>7/9/18</th>
                                  <th>7/8/22</th>
                                  <th>Inactif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EW-122-WN <i className="fas fa-sot me-2"></i></th>
                                  <th>RENAULT</th>
                                  <th>KADJAR</th>
                                  <th>4-FDV</th>
                                  <th>GREGET Catherine</th>
                                  <th>5/18/18</th>
                                  <th>5/17/22</th>
                                  <th>actif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EW-952-YM<i className="fas fa-sot me-2"></i></th>
                                  <th>RENAULT</th>
                                  <th>KADJAR</th>
                                  <th>"3-Compte Clé Responsable Détaillant"</th>
                                  <th>BLOT Patricia</th>
                                  <th>5/15/18</th>
                                  <th>5/14/22</th>
                                  <th>inactif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EX-148-YB <i className="fas fa-sot me-2"></i></th>
                                  <th>SKODA</th>
                                  <th>OCTAVIA</th>
                                  <th>4 - FDV</th>
                                  <th>DELAVOYE Karine</th>
                                  <th>6/14/18</th>
                                  <th>5/13/22</th>
                                  <th>actif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EW-481-GZ <i className="fas fa-sot me-2"></i></th>
                                  <th>RENAULT</th>
                                  <th>KADJAR</th>
                                  <th>"3- Animatrice réseau"</th>
                                  <th>PAJON MAGALI</th>
                                  <th>5/2/18</th>
                                  <th>5/1/22</th>
                                  <th>actif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>

                                <tr>
                                  <th>EW-729-CQ <i className="fas fa-sot me-2"></i></th>
                                  <th>RENAULT</th>
                                  <th>KADJAR</th>
                                  <th>4 - FDV</th>
                                  <th></th>
                                  <th>5/30/18</th>
                                  <th>5/29/22</th>
                                  <th>inactif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EW-081-ET <i className="fas fa-sot me-2"></i></th>
                                  <th>RENAULT</th>
                                  <th>KADJAR</th>
                                  <th>4 - FDV</th>
                                  <th>STREBEL Arnaud</th>
                                  <th>5/19/18</th>
                                  <th>3/18/22</th>
                                  <th>actif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>

                                <tr>
                                  <th>EX-053-FG <i className="fas fa-sot me-2"></i></th>
                                  <th>RENAULT</th>
                                  <th>KADJAR</th>
                                  <th>4 - FDV</th>
                                  <th>GIRARD severine</th>
                                  <th>6/5/18</th>
                                  <th>6/4/22</th>
                                  <th>actif</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
                                </tr>
                                <tr>
                                  <th>EY-774-LN <i className="fas fa-sot me-2"></i></th>
                                  <th>FIAT</th>
                                  <th>500X</th>
                                  <th>4 - FDV</th>
                                  <th>TROCHU Benjamin</th>
                                  <th></th>
                                  <th></th>
                                  <th>en commande</th>
                                  <th><Link to="#" className="btn table_btn text-dark fw-bold"><i className="fas fa-eye me-1 text-dark"></i> VOIR LE VEHICULE</Link></th>
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

export default VehicleList;
