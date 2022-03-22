import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from '@pages/Checkout';
import CreateAccount from '@pages/CreateAccount';
import Home from '@pages/Home';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import NewPassword from '@pages/NewPassword';
import NotFound from '@pages/NotFound';
import Orders from '@pages/Orders';
import RecoveryPassword from '@pages/RecoveryPassword';
import SendEmail from '@pages/SendEmail';
import '@styles/global.css';

const App = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                <Route exact path="/send-email" element={<SendEmail />} />
                <Route exact path="/new-password" element={<NewPassword />} />
                <Route exact path="/account" element={<MyAccount />} />
                <Route exact path="/signup" element={<CreateAccount />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter> 
    
    );
}

export default App;