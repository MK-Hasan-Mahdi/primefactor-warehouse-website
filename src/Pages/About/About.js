import React from 'react';
import './About.css';
import about from '../../images/about.png';
import { RiMotorbikeFill } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { FaBusAlt } from 'react-icons/fa';



const About = () => {
    return (
        <div className='container text-center'>
            <h2>About PrimeFactor</h2>
            <div>
                <p>
                    PrimeFactor warehouse management system (WMS) is an integrated set of system functions designed to manage a warehouse or distribution center locating, putaway, movement, picking, and cycle count/inventory verification activities.
                </p>
                <br />
                <p>
                    PrimeFactor warehouse management system some feature:
                    Following are the features of the warehouse management system.

                    Warehouse infrastructure: This system allows the organization to design the warehouse so that it has sufficient space for seasonal inventories.
                    Monitoring of inventory: The system allows for tracking, monitoring, and moving the inventories quickly with the help of a barcode scanner.
                    Incoming and outgoing inventories: With the help of pick-to-light and pick-to-voice technology, this system optimizes the incoming and outgoing inventory process.
                    Picking and packing of finished products: The system includes efficient picking systems like zone picking, wave picking, and batch picking that help the worker pick the goods efficiently.
                    Shipping: The system allows you to create invoices and packing lists for shipping and sends shipping notifications to the customer in advance.
                    Employee management: The system allows the warehouse managers to manage the employees and monitor their performance with the help of key performance indicators (KPI).
                    Dock management directs the drives to find the proper ducks to load and unload the inventories.
                    Documentation: The system generates all the reports that help managers analyze the warehouse process.
                </p>
            </div>
            <section id="about" className="about">
                <div className="container-fluid">

                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                            <img className='img-fluid' src={about} alt="" />
                        </div>

                        <div className="col-xl-5 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                            <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                            <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                            <div className="icon-box">
                                <div className="icon"><span> <AiFillCar></AiFillCar> </span></div>
                                <h4 className="title">Excellent Car Stock</h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><span> <RiMotorbikeFill></RiMotorbikeFill> </span></div>
                                <h4 className="title">Updated Bike Stock</h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            </div>

                            <div className="icon-box">
                                <div className="icon"><span> <FaBusAlt></FaBusAlt> </span></div>
                                <h4 className="title">Coming Soon Bus Stock</h4>
                                <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;