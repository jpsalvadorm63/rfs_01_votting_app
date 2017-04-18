import React, { Component } from 'react';
import Seed from './seed.js';
import Product from './Product.js';


class ProductList extends Component {

    state = { products: [], };

    componentDidMount() {
        this.setState({ products: Seed.products });
    }

    handleProductUpVote = (productId) => {
        const nextProducts = this.state.products.map((product) => {
            if (product.id === productId) {
                return Object.assign({}, product, {
                    votes: product.votes + 1,
                });
            } else {
                return product;
            }
        });

        this.setState({ products: nextProducts, });
    }

    render() {
        const products = this.state.products.sort((a, b) => (
            a.votes - b.votes
        ));

        const productComponents = products.map( (product) => {
            return (
                <Product
                    key={'product-' + product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitter_avatar_url={product.submitterAvatarUrl}
                    product_image_url={product.productImageUrl}
                    onVote={this.handleProductUpVote}
                />
            )
        });

        return(
            <div className='ui unstackable items'>
                {productComponents}
            </div>
        );
    }
}

export default ProductList;
