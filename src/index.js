import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './js/reducers/rootReducer'
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './js/components/App';
import {composeWithDevTools} from 'redux-devtools-extension';
import './styles/index.css';

let store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('list')
);
