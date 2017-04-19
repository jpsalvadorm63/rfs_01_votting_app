import React, { Component } from 'react';
import ProductList from './ProductList';


class App extends Component {

    render() {
        return(
            <div class="main ui text container" >
                <h1 class="ui dividing centered header">Popular Products</h1>
                <div id="content">
                    <ProductList />
                </div>
            </div>
        );
    }

}

export default App ;
