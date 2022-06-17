import React from 'react';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import { signInWithGoogle, signInWithFacebook, auth, handleLogout } from '../../Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const FirebaseSocialLogin: React.FC = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <>
            <div className="main">
                <button className="button" id="google" onClick={signInWithGoogle}>
                    <GoogleIcon />
                    Sign in with Google
                </button>
                <button className="button" id="facebook" onClick={signInWithFacebook}>
                    <FacebookIcon />
                    Sign in with Facebook
                </button>
            </div>
            {/* Profile Detail */}
            <div>
                <>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Something went wrong</div>
                    ) : (
                        <>
                            {user && (
                                <div className="user-info">
                                    <p>
                                        <span>Display Name : </span>
                                        <span>{user?.displayName}</span>
                                    </p>

                                    <p>
                                        <span>Email : </span>
                                        <span>{user?.email}</span>
                                    </p>

                                    <p>
                                        <span>Sub : </span> <span>{user?.providerData[0].providerId}</span>
                                    </p>

                                    <button className="button" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </>
            </div>
        </>
    );
};

export default FirebaseSocialLogin;
