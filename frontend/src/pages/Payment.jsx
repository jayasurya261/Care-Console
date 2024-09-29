import React, { useState, useEffect } from 'react';
import { images } from '../assets/images';
import Spinner from '../components/Spinner';
import BubbleMovement from '@/components/Bubble';
import Loading from '@/components/Loading';

const Payment = () => {
    const [loading, setLoading] = useState(true);
    const [cachedData, setCachedData] = useState(null);

    useEffect(() => {
        // Simulate a 10-second loading process
        const timeout = setTimeout(() => {
            // Simulate fetching or returning cached data
            const cache = { paymentStatus: 'success', timestamp: new Date() };
            setCachedData(cache);
            setLoading(false); // Stop loading after 10 seconds
        }, 10000);

        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <BubbleMovement/>
            <div className="flex justify-center">
                <div className="justify-center text-center items-center">
                    <p className="text-3xl font-bold mb-10">SCAN QR</p>
                    <img className="w-[400px]" src={images.payment} alt="Payment QR" />
                    {loading ? <div className='mt-5 ml-32 mb-8'><Loading/></div> : <p className='mt-10 text-3xl text-blue-900 p-3 rounded-[10px]'>Payment processed successfully!</p>}
                </div>
            </div>
        </div>
    );
};

export default Payment;
