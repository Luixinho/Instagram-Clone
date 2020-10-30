import React, { Component } from 'react';
import api from '../services/api';

import './New.css';

class New extends Component {
    // state armazena informações dos inputs
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };

    handleSubmit = async e => {
        // faz com que a página não seja atualizada toda vez que o formulário for enviado
        e.preventDefault();

        // cadastrando informações do formulário
        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data)

        // mandando usuario para rota inicial
        this.props.history.push('/');

    }

    // o "e" se refere a um evento
    // usando o método como uma arrow function para poder acessar o valor do "this", se fosse uma fonção normal, esse valor não estaria disponivel 
    // pegando valor do input e colocando no state para ser salvo
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange} />

                <input
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.state.author}
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    value={this.state.place}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    value={this.state.description}
                />

                <input
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />

                <button type="submit">Enviar</button>

            </form>
        );
    }
}

export default New;