import React, { Component } from 'react';
import Table from './Table';

class Main extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            category: 0,
            /* cart: [] */
        }

        this.changeCategory = this.changeCategory.bind(this)
    }

/*     cartItem = {
        'Autor': "",
        'Titel': "",
        
    } */
    

    products = [
        {
            'name': 'Bücher',
            'items': [
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Carrie',
                    'Jahr': 1974,
                    'Seiten': 199,
                    'Verlag': 'Doubleday'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'The Shining',
                    'Jahr': 1977,
                    'Seiten': 447,
                    'Verlag': 'Doubleday'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Christine',
                    'Jahr': 1983,
                    'Seiten': 526,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'It',
                    'Jahr': 1986,
                    'Seiten': 1138,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Misery',
                    'Jahr': 1987,
                    'Seiten': 310,
                    'Verlag': 'Viking'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Joyland',
                    'Jahr': 2013,
                    'Seiten': 288,
                    'Verlag': 'Hard Case Crime'
                }
            ]
        },
        {
            'name': 'Audio-Books',
            'items': [
                {
                    'Autor': 'Stephen King',
                    'Titel': 'On Writing: A Memoir of the Craft ',
                    'Jahr': 2000,
                    'Länge': 120,
                    'Verlag': 'Simon & Schuster Audio'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Salem\'s Lot (introduction)',
                    'Jahr': 2004,
                    'Länge': 180,
                    'Verlag': 'Simon & Schuster Audio'
                },
                {
                    'Autor': 'Stephen King',
                    'Titel': 'Bag of Bones',
                    'Jahr': 2005,
                    'Länge': 240,
                    'Verlag': 'Simon & Schuster Audio'
                }
            ]
        }
    ];

    changeCategory() {
        this.setState({
            category : (this.state.category + 1) % this.products.length
        })
    }


    render() {
        return (
        <main>
            <button onClick={this.changeCategory}>Produktkategorie wechseln</button>

            <h2>{this.products[this.state.category].name}</h2>
            <Table data={this.products[this.state.category].items}/>

{/*             <h2>Warenkorb</h2>
            <Table data={this.state.cart} /> */}

        </main>
    );                

    }
}

export default Main;