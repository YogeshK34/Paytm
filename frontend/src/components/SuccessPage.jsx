import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-green-500 text-2xl">Transaction Successful!</h1>
            <p>Your transaction has been completed successfully.</p>
            <Link to="/dashboard" className="text-blue-500 hover:underline">Go back to Dashboard</Link>
        </div>
    );
};

export default SuccessPage;
