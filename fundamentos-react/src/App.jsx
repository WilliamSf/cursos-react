import React from 'react';
import './App.css';
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card';
import TabelaProdutos from './components/repeticao/TabelaProdutos';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="Repetição">
                <TabelaProdutos  />
            </Card>
            <Card title="Número Aleatório">
                <NumeroAleatorio min={1} max={60} />
            </Card>
        </div>
    </div>
);