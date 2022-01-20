import React, {Component, useState, useEffect} from "react";
import axios from 'axios';
import {AvForm , AvField} from "availity-reactstrap-validation";
import PaginationComponent from "./PaginationComponent";
import {Input, Label} from "reactstrap";

class Pagination extends Component {
    state = {
        data: [],
        totalRecords: 0,
        limit: 6,
        age: '',
        age2: ''
    }

    componentDidMount() {
        this.loadData(1);
    }

    loadData = (page) => {
        // console.log('page>>', page)
        axios.get(`https://reqres.in/api/users?page=` + page)
            .then(res => {
                const data = res.data;
                console.log('data>>>>', data)
                this.setState({
                    data: data.data,
                    totalRecords: data.total ? data.total : 0,
                    limit: data.per_page ? data.per_page : 6
                })
            });
    }

    getPaginatedData = page => {
        this.loadData(page);
    }




    render() {
        const {data, totalRecords, limit} = this.state;

        const Name = (value, field) => {

            const data = {
                field: field,
                value: value
            };
            // props.Filter(data);

        };
        const FULL_NAME = "FULL_NAME";
        return (
            <div>
                <div className="produc">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 pl-0">
                                {/*<AvForm>*/}
                                    <Input type="text" name="search" placeholder="search"
                                           onChange={e => Name(e.target.value , FULL_NAME)}/>
                                {/*</AvForm>*/}
                                <button type="button" className="btn btn-success mt-3">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="container productss">
                        <div className="row productScroll">
                            <div className="container">
                                <table className="tablePagination table-striped table-info">
                                    <thead className="bg-white">
                                    <tr>
                                        <th className="align-middle bt-0">№ <br/>п/п</th>
                                        <th className="align-middle bt-0">name</th>
                                        <th className="align-middle bt-0">names</th>
                                        <th>barcode</th>
                                        <th>barcodes</th>
                                        <th>sku</th>
                                        <th>skus</th>
                                        <th>product[id]</th>
                                        <th>product[name] </th>
                                    </tr>
                                    </thead>
                                    <tbody className="ml-3 bg-white">
                                    {
                                        data && data.length > 0 ?
                                            data.map((item, index) => (
                                                <tr className="mapTr">
                                                    <td scope="col">{item.id}</td>
                                                    <td scope="col">{item.first_name}</td>
                                                    <td scope="col">{item.first_name} - {item.last_name}</td>
                                                    <td scope="col">{item.first_name} - {item.last_name}</td>
                                                    <td scope="col">{item.first_name} - {item.last_name}</td>
                                                    <td scope="col">{item.first_name} - {item.last_name}</td>
                                                    <td scope="col">{item.first_name} - {item.last_name}</td>
                                                    <td scope="col">{item.first_name} - {item.last_name}</td>
                                                    <td scope="col">{item.email}</td>
                                                </tr>
                                            )) :
                                            <h4>No Data Found!!</h4>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row mt-3 pl-0 paginationIndex">
                            {totalRecords > 6 &&
                            <PaginationComponent
                                getAllData={this.getPaginatedData}
                                totalRecords={totalRecords}
                                itemsCountPerPage={limit}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pagination;
