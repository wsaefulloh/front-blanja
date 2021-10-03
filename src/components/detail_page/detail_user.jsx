import "../detail_page/detail.scoped.css"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import star from "../asset/star_active.png"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

function Cards(props) {

    const HandAdd = async function AddHandler(id) {
        const count = 1;
        const body = new URLSearchParams();
        body.append("id_product", id);
        body.append("count", count);
        axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/bag/add`,
            data: body,
            headers: { 'Content-type': 'application/x-www-form-urlencoded', }
        }).then((res) => {
            alert('berhasil menambahkan product ke keranjang')
            console.log(res)
        }).catch((err) => {
            alert('gagal menambahkan product ke keranjang')
        })
    }

    return (
        <main className="mb-4">
            <section className="container">
                <div className="my-3">
                    <span className="text-span">Home &gt; Category &gt; {props.category}</span>
                </div>
            </section>
            <div className="container">
                <div className="row justify-content-between">
                    <section className="col align-items-center text-center">
                        <img className="image-prods" src={props.image_product} alt="" />
                    </section>
                    <section className="col">
                        <div>
                            <h4 className="text-bold m-0 p-0 mb-2">{props.name_product}</h4>
                            <p className="desc-product text-reguler mb-2">{props.brand_product}</p>
                            <div className="d-flex mb-2">
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <img src={star} alt="" width="auto" height="20px" />
                                <p className="text-reguler mx-lg-1 text-secondary">(5/5)</p>
                            </div>
                            <p className="desc-product text-reguler mb-2">Price</p>
                            <h4 className="text-bold m-0 p-0 mb-4">Rp. <span>{props.price_product}</span></h4>
                            <div className="d-flex justify-content-start">

                                <div>
                                    <button className="btn-signup-d p-0 m-0 mx-2 text-reguler" onClick={() => HandAdd(props.id_product)} >Add Bag</button>
                                </div>
                                <div>
                                    <button className="btn-login-d p-0 m-0 mx-2 text-reguler">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="mt-4">
                    <section className="align-items-center">
                        <h5 className="text-bold m-0 mb-3">Description</h5>
                        <div className="justify text-reguler detail-product py-3">{props.description}</div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Cards