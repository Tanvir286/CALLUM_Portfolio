import React, { useState, useEffect } from 'react';
import Button from './button/Button';
import Navbar from './navbar/Navbar';

const Banner = () => {
    const arr = ["CSE Engineer", "MERNSTACK Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [count, setCount] = useState(-1);
    const [text, setText] = useState(arr[0].split(''));

    useEffect(() => {
        const intervalId = setInterval(() => {
            typejs();
        }, 300);

        return () => clearInterval(intervalId);
    }, [count, text, currentIndex]);

    const typejs = () => {
        if (count < text.length) {
            setCount(prevCount => prevCount + 1);
        } else {
            const newText = text.slice(0, -1);
            setText(newText);

            if (newText.length === 0) {
                setCount(-1);
                setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
                setText(arr[currentIndex].split(''));
            }
        }
    };

    return (
        <section className="py-462" style={{ background: 'url(https://harnishdesign.net/demo/react/callum/demo/images/intro-bg.jpg) no-repeat center ', backgroundSize: 'cover', position: 'relative' }}>
            <div className='overlay absolute top-0 left-0 bg-overlay w-full h-full'>
                <Navbar />
                <div className='text-center'>
                    <h1 className='text-white text-5xl font-open mt-72'>HI, I'M Tanvir Ahamed  </h1>
                    <h1 className='text-white text-9xl font-open mt-4 font-bold type'>{text.join('')}</h1>
                    <p className='font-open text-3xl mt-4 text-white'>based in Los Angeles, USA.</p>
                    <Button title="View My Works" btnStyle="bg-secondary !text-black text-2xl mt-10" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
