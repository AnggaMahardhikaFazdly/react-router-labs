import React from 'react';
import { Link } from 'react-router-dom';

class ProfileHome extends React.Component {
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                Profile Page <br />
                <Link to="/counter">Go To Counter Page</Link><br />
                <button onClick={() => this.goBack()}>Go Back</button>
            </div>
        );
    }
}

export default ProfileHome;