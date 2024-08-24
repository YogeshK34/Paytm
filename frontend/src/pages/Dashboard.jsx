import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchBalance = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No token found. User might not be logged in.');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setBalance(response.data.balance);
                setLoading(false);
            } catch (err) {
                console.error('Failed to fetch balance:', err);
                setError('Error fetching balance');
                setLoading(false);
            }
        };

        fetchBalance();
    }, []);

    const handleTransactionSuccess = () => {
        // Navigate to the success page
        navigate('/success');
    };

    return (
        <div>
            <Appbar />
            <div className="m-8">
                {loading ? (
                    <div>Loading balance...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    <Balance value={balance} />
                )}
                <Users />
                {/* Call handleTransactionSuccess when a transaction is successful */}
                {/* Example Button to Simulate Success */}
                <button
                    onClick={handleTransactionSuccess}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Simulate Transaction Success
                </button>
            </div>
        </div>
    );
};
