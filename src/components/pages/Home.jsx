import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost/react/crud-app/api/products/read.php')
            .then(response => this.setState({products: response.data.data}));
    }
        
    render() {
        const { products } = this.state;

        return (
            <React.Fragment>
                <div className="pageBody">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <h2 className="heading">Our Products</h2>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-end">
                                        <Link to="/add-product"><button className="btn btn-warning">Add Product</button></Link>
                                    </div>
                                </div>
                            </div>
                            {products.length > 0 ? 
                                products.map(product => {
                                    return(
                                        <div className="col-md-4">
                                            <div className="foodBox">
                                                <div className="foodImg"><img src={product.image} alt="-" className="img-fluid"/></div>
                                                <div className="foodText">
                                                    <h3>{product.title}</h3>
                                                    <p>{product.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            :
                                <div className="empty">No Posts Found</div>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;