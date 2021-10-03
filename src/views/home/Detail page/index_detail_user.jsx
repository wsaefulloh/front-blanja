import React, { Component } from 'react'
import Navigasi from '../../../components/navbar/navbar_user'
import Detail from '../../../components/detail_page/detail_user'
import Cards from '../../../components/card_product/card_user.jsx'
import axios from "axios"
import "./style/index_detail.scoped.css"
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "wahyu",
            prods: [],
            other:[],
        }
    }

    componentDidMount() {
        const id_product = this.props.match.url;
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/product${id_product}`
        }).then((res) => {
            this.setState({
                prods: res.data.result,
            })
            const categori = this.state.prods[0].category;
            console.log(this.state.prods)
            this.Getproduct(categori)
        })
        
    }

    Getproduct(val) {
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/product/sort/category/${val}`
        }).then((res) => {
            console.log(res)
            this.setState({
                other: res.data.result,
            })
            console.log(this.state.other)
        })
    }

    render() {
        return (
            <div>
                <Navigasi />
                {this.state.prods.map((val) => {
                    return (
                        <Detail
                            image_product={val.image_product}
                            name_product={val.name_product}
                            price_product={val.price_product}
                            brand_product={val.brand_product}
                            description={val.description}
                            category={val.category}
                            id_product={val.id_product}
                        />
                    )
                })}

                <div className>
                    <div className="container">
                        <div className="">
                            <section className="align-items-center">
                                <h5 className="text-bold m-0 mb-3">Related Product</h5>
                                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 box">
                                    {this.state.other.map((val) => {
                                        return (
                                            <Cards
                                                image_product={val.image_product}
                                                name_product={val.name_product}
                                                price_product={val.price_product}
                                                brand_product={val.brand_product}
                                                id_product={val.id_product}
                                            />
                                        )
                                    })}
                                </div>

                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App