import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Lists() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id === '1') {
            navigate('/arrays');
        }
    }, [id, navigate]);

    return (
        <div>
            
        </div>
    );
}
