import React from 'react';
import Hero from './Components/Hero';
import NewsLetter from './Components/NewsLetter';
import Products from './Components/Products';
import { useLoaderData } from 'react-router';

const Home = () => {
     const products = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            <Products products={products}></Products>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;