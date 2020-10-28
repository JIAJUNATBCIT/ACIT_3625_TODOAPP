import React, { useState } from 'react';
import axios from 'axios';

export default class API extends React.Component {
    state = {
        hits: []
    }

    componentDidMount() {
        axios.get(`https://hn.algolia.com/api/v1/search?query=`)
            .then(res => {
                const hits = res.data.hits;
                this.setState({ hits });
            })
    }

    render() {
        return (
            <ul>
                { this.state.hits.map(hit => 
                <ul>
                    <li>Title: {hit.title}</li>
                    <li>Author: {hit.author}</li>
                    <li>Created By: {hit.created_at}</li>
                    -------------------------------------
                </ul>
                )}
            </ul>
        )
    }
}