import React, { MouseEvent } from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import { useAuth0 } from '@auth0/auth0-react';

const AuthO: React.FC = () => {
    const { loginWithPopup, user, logout, isAuthenticated, isLoading } = useAuth0();

    const handleLogin = (e: MouseEvent<HTMLDivElement>) => {
        const id = (e.target as HTMLDivElement).id;
        if (id) {
            loginWithPopup({ connection: id })
                .then((response) => {
                    console.log({ response });
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
    };

    return (
        <>
            <div className="main" onClick={handleLogin}>
                <button className="button" id="facebook">
                    <FacebookIcon />
                    Facebook
                </button>
                <button className="button" id="google-oauth2">
                    <GoogleIcon />
                    Google
                </button>
            </div>
            {/* User profile detail */}
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                isAuthenticated && (
                    <>
                        <div className="user-info">
                            <p>
                                <span>Given Name : </span>
                                <span>{user?.given_name}</span>
                            </p>
                            <p>
                                <span>Email : </span>
                                <span>{user?.email}</span>
                            </p>
                            <p>
                                <span>Sub : </span>
                                <span>{user?.sub}</span>
                            </p>
                            <button className="button" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    </>
                )
            )}
        </>
    );
};

export default AuthO;
