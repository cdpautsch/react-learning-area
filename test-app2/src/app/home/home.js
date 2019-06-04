import React from 'react';
import logo from '../../assets/my-logo.png';

function Home() {
    return (
        <div className="home content">
            <h1>Home</h1>
            <p>
                This is the home screen. This is here as the intro screen, but
                also to demonstrate the handling of image imports: one of these
                images is encoded directly in the bundle, while the other is
                loaded as a separate file.
            </p>
            <img src={logo} className="my-logo" alt="logo" />
        </div>
    );
}
export default Home;
