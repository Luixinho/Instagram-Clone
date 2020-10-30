import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return (
        // configurando as rotas do projeto para serem chamadas de outros arquivos
        // "exact" termo que faz com que o react dom use a rota que o usuário esta pesquisando e não qualquer rota que contenha uma aprte do que esta na url

        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;