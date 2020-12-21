import React from 'react';
import { Router } from '@reach/router';
import { Link } from 'gatsby';

const Home = () => <p>Home</p>;
const Settings = () => <p>Settings</p>;
const Billing = () => <p>Billing</p>;

const profile = () => {
    return (
        <div>
            <nav>
                <Link to="/profile">Home</Link>
                <Link to="/profile/settings">Settings</Link>
                <Link to="/profile/billing">Billing</Link>
            </nav>
            <p>This is your profile dashboard</p>
            <Router>
                <Home path="/profile"/>
                <Settings path="/profile/settings"/>
                <Billing path="/profile/billing"/>
            </Router>
        </div>
    )
}
export default profile;