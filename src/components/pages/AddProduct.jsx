import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            image: null,
            productAdded: false
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value}, console.log(this.state));
    }

    handleFile = e => {
        let file = e.target.files;

        let reader = new FileReader();
        reader.readAsDataURL(file[0]);

        reader.onload = (e) => {
            this.setState({ image: e.target.result })
        }
     
    }

    onSubmit = (e) => {
        e.preventDefault();

        // const formData = new FormData();

        const data = {
            'title': this.state.title,
            'description': this.state.description,
            'image': this.state.image
        }

        axios.post('http://localhost/react/crud-app/api/products/create.php', data)
            .then(() => this.setState({ productAdded: true })); 

    }

    render() {
        if (this.state.productAdded) {
            return <Redirect to="/" />;
        }
        return (
            <React.Fragment>
                <div className="pageBody">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="heading">Add Product</h2>
                            </div>
                            <div className="col-md-6">
                                <form id="productAdd" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" className="form-control" name="title" placeholder="Enter title here" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" name="description" placeholder="Enter title here" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label> <br />
                                        <input type="file" name="image" onChange={this.handleFile} />
                                    </div>
                                    <br />
                                    <input type="submit" className="btn btn-success"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AddProduct;