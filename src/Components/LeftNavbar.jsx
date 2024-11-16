import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    /**
     * 
        {category_id: '01', 
        category_name: 'Breaking News'}
     */
    return (
        <div className=''>
            <h1 className='font-semibold text-xl'>All Category</h1>
            <div className='flex flex-col gap-2 my-4'>
                {
                    categories.map(category=> (
                        <NavLink to={`/category/${category.category_id}`} className='btn bg-base-100 ' key={category.category_id}> {category.category_name} </NavLink>
                    ) )
                }
            </div>
        </div>
    );
};

export default LeftNavbar;