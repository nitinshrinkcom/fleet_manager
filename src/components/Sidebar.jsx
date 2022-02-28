import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import aside_logo from '../logo1.png';



export default class Sidebar extends Component {

    render() {
        return (
            <div>
                <div id="kt_aside" className="aside aside-light aside-hoverable" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_mobile_toggle">
                    <div className="aside-logo flex-column-auto" id="kt_aside_logo">
                        <Link to="/">
                            <img alt="Logo" src={aside_logo} className="h-45px  mt-2 logo" />
                        </Link>

                        <div id="kt_aside_toggle" className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">

                            <span className="svg-icon svg-icon-1 rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="black" />
                                    <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="black" />
                                </svg>
                            </span>

                        </div>

                    </div>

                    <div className="aside-menu flex-column-fluid">

                        <div className="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset={0}>

                            <div className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">

                                <div className="menu-item mt-3">
                                    <Link className="menu-link" to="#">
                                        <span className="menu-icon">

                                            <span className="bg-white p-2 rounded-3 svg-icon svg-icon-2">
                                                <i className="fas fa-search text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title text-dark menu_active_link"><input type="text" className="search-input form-control custom_search-bar shadow" name="search" placeholder="Search..." aria-controls="kt_datatable_example_5" autocomplete="off" /></span>
                                    </Link>
                                </div>
                                <div className="menu-item mt-3">
                                    <Link className="menu-link" to="/dashboard">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-tachometer-alt text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title text-dark menu_active_link">TABLEAU DE BOARD....</span>
                                    </Link>
                                </div>

                                {/* <div className="menu-item">
                                    <Link className="menu-link" to="/collab">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-user text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">COLLABORATEURS</span>
                                    </Link>
                                </div> */}

                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                    <span className="menu-link">
                                        <span className="menu-icon">
                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-car-side text-dark"></i>
                                            </span>
                                        </span>
                                        <Link to="/collab">
                                            <span className="menu-title">COLLABORATEURS</span>
                                        </Link>
                                        <span className="menu-arrow" />
                                    </span>
                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                        <div className="menu-item">
                                            <Link className="menu-link" to="/collab_list">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">List des collaborateur</span>
                                            </Link>
                                        </div>
                                        <div className="menu-item">
                                            <Link className="menu-link" to="/collab_wizard1">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Ajouter un collaborateur</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                {/* <div className="menu-item">
                                    <Link className="menu-link" to="/vehicle">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-car-side text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title">VEHICULES</span>
                                    </Link>
                                </div> */}


                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                    <span className="menu-link">
                                        <span className="menu-icon">
                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-car-side text-dark"></i>
                                            </span>
                                        </span>
                                        <Link to="/vehicle">
                                            <span className="menu-title">VEHICULES</span>
                                        </Link>
                                        <span className="menu-arrow" />
                                    </span>
                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                        <div className="menu-item">
                                            <Link className="menu-link" to="/vehicle_list">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">List des vehicules</span>
                                            </Link>
                                        </div>
                                        <div className="menu-item">
                                            <Link className="menu-link" to="/vech_wizard1">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Ajouter un vehicule</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>




                                <div className="menu-item">
                                    <Link className="menu-link" to="/notifications">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-bell text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">NOTIFICATIONS</span>
                                    </Link>
                                </div>

                                {/* <div className="menu-item">
                                    <Link className="menu-link" to="/sinistres">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-bahai text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">SINISTRES</span>
                                    </Link>
                                </div> */}

                                <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                    <span className="menu-link">
                                        <span className="menu-icon">
                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-car-side text-dark"></i>
                                            </span>
                                        </span>
                                        <Link to="/sinistres">
                                            <span className="menu-title">SINISTRES</span>
                                        </Link>
                                        <span className="menu-arrow" />
                                    </span>
                                    <div className="menu-sub menu-sub-accordion menu-active-bg">
                                        <div className="menu-item">
                                            <Link className="menu-link" to="/sinistres_list">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">List des sinistre</span>
                                            </Link>
                                        </div>
                                        <div className="menu-item">
                                            <Link className="menu-link" to="/sin_wizard1">
                                                <span className="menu-bullet">
                                                    <span className="bullet bullet-dot" />
                                                </span>
                                                <span className="menu-title">Ajouter un sinistre</span>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                                <div className="menu-item">
                                    <div className="menu-content pt-4">
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <Link className="menu-link" to="#">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-file-alt text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">CARTES DE PEAGES</span>
                                    </Link>
                                </div>

                                <div className="menu-item">
                                    <Link className="menu-link" to="#">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-leaf text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">CONDUITE</span>
                                    </Link>
                                </div>

                                <div className="menu-item">
                                    <Link className="menu-link" to="#">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-map-marked-alt text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">GEOLOCAUSATION</span>
                                    </Link>
                                </div>

                                <div className="menu-item">
                                    <div className="menu-content pt-12">
                                    </div>
                                </div>

                                <div className="menu-item">
                                    <Link className="menu-link" to="#">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-question text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">AIDE</span>
                                    </Link>
                                </div>

                                <div className="menu-item">
                                    <Link className="menu-link" to="#">
                                        <span className="menu-icon">

                                            <span className="svg-icon svg-icon-2">
                                                <i className="fas fa-cog text-dark"></i>
                                            </span>
                                        </span>
                                        <span className="menu-title nav_links_font">PARAMETRES</span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
