import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                Home Page <br />
                <Link to="/profile">Go To Profile Page</Link>
            </div>
        );
    }
}

export default HomePage;