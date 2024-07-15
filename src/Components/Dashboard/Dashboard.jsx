import { useEffect } from "react";
import ActionCard from '../Card/Card';

export default function Dashboard() {
    useEffect(() => {
        const textContainer = document.getElementById('rotating-text');
        if (textContainer) {
            const text = textContainer.innerText;
            const chars = text.split('');
            const newText = chars.map((char, index) => `<span key=${index}>${char}</span>`).join('');
            textContainer.innerHTML = newText;
        }
    }, []);

    const card = [
        { img: 'https://velocityglobal.com/sites/default/files/inline-images/array-logo.jpg', name: 'Array', total: '36' },
        { img: 'https://miro.medium.com/v2/resize:fit:737/1*cS6lfvXUS6hqbK1kGkbewg.png', name: 'Linked List', total: '36' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NS1cOio3g6vJAS4jjQwDRXwd2eyusz5SsarENsoMud-hVngJtvc_fx9hRWt7SC_eI3k&usqp=CAU', name: 'String', total: '43' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvd4Vu9sp9rxdiiAiPOGsinHu0tg7X25Jbw&s', name: 'Heap', total: '18' },
        { img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221215114732/bst-21.png', name: 'Binary Search Trees', total: '22' },
        { img: 'https://www.shutterstock.com/image-vector/set-growth-graph-vector-icons-260nw-2311868813.jpg', name: 'Graph', total: '44' },
        { img: 'https://afteracademy.com/images/what-is-backtracking-banner-f50177b744971af3.png', name: 'Backtracking', total: '22' },
        { img: 'https://www.shutterstock.com/image-vector/initial-letter-dp-logo-design-600nw-2343833393.jpg', name: 'Dynamic Programming', total: '36' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQGXLZ62mV7m7SjwL1ggb6XIBdaarlMdqQ&s', name: 'Binary Search', total: '36' },
        { img: 'https://i.ytimg.com/vi/X2wWb6xt66g/sddefault.jpg', name: 'Searching and Sorting', total: '36' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AU1P8A42Saa5xk4H0MlPXZQ9at7gmFD68w&s', name: 'Matrix', total: '10' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRse3DWUCUZm4KZjnuX_2IzNZK0AEeqC1ik_w&s', name: 'Greedy', total: '35' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRflqWegdHM10F0Q5aqhwanIMJGn7Y76V7X4al2_gIdKTybEiABL1xqm_ugnDNDB4CRPcQ&usqp=CAU', name: 'Binary Trees', total: '35' },
        { img: 'https://miro.medium.com/v2/resize:fit:1200/1*OgpbFS9zCA__pdPR2Og32A.png', name: 'Stack & Queue', total: '38' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-center text-gray-600 font-mono mt-24 water-text">
                <h1 className="text-2xl">DSA Tracker</h1>
                <h1 className="text-2xl">DSA Tracker</h1>
                <p className="pt-10" id="rotating-text">A_gateway_to_product_based_companies</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-24">
                {card.map((item, index) => (
                    <ActionCard
                        key={index}
                        img={item.img}
                        name={item.name}
                        total={item.total}
                    />
                ))}
            </div>
        </div>
    );
}
