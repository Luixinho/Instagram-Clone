import React, { Component } from 'react';
import api from '../services/api';
import io from 'socket.io-client';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';


class Feed extends Component {
    // variavel usada para salvar uma informação em que sua alteração refletira no html
    state = {
        feed: [],
    };

    async componentDidMount() {
        this.registerToSocket();

        const response = await api.get('posts');

        this.setState({ feed: response.data });
    }

    // publicando em tempo real
    registerToSocket = () => {
        const socket = io('http://localhost:3333');

        // post, like 
        // ouvindo para saber quando houevr um novo post ou novo like
        socket.on('post', newPost => {
            // colocando o novo post no inicio do array de posts do feed
            this.setState({ feed: [newPost, ...this.state.feed] });
        })

        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post =>
                    post._id === likedPost._id ? likedPost : post
                )
            });
        })
    }

    handleLike = id => {
        api.post(`/posts/${id}/like`);
    }

    render() {
        return (
            <section id="post-list">
                {this.state.feed.map(post => (
                    // sempre que usar a propriedade map que é usada pra percorrer as partes da api deve colocar o termo key={} no primeiro elemento após o map, com alguma chave única
                    // no footer no button passando o parametro no onClick como uma arrow function para que o react entenda que não deve execultar aquela função ali e sim passar passar aquele parametro para a função
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>

                            <img src={more} alt="Mais" />

                        </header>

                        <img src={`http://localhost:3333/files/${post.image}`} alt="post" />

                        <footer>
                            <div className="actions">
                                <button type="button" onClick={() => this.handleLike(post._id)}>
                                    <img src={like} alt="like" />
                                </button>
                                <img src={comment} alt="comment" />
                                <img src={send} alt="send" />
                            </div>

                            <strong>{post.likes} curtidas</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>

                        </footer>
                    </article>
                ))}
            </section>
        );
    }
}

export default Feed;


