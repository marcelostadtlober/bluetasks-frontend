import React, { Component } from 'react';
import { APP_NAME } from '../constants';
import NavBarItem from './NavBarItem';

class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [
                { name: "Listar Tarefas", href: "/" },
                { name: "Nova Tarefa", href: "/form" }
            ]
        }
    }
    
    onClickHandler(item) {
        alert(item.name);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <span className="navbar-brand" href="#">{ APP_NAME }</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav mr-auto">
                        { this.state.items.map(i => <NavBarItem item={ i } onClick={ this.onClickHandler }/>) }
                        </div>
                    </div>
                </nav>                
            </div>
        );
    }
}

export default NavBar;
