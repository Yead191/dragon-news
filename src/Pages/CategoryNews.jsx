import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    console.log(news);
    
    return (
        <div>
            <p className='text-gray-400 '>{news.length} found in this category!</p>

            <div className='my-4 space-y-4'>
                {
                    news.map(singleNews=> <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;