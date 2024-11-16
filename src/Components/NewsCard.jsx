import React from "react";
import { FaRegBookmark, FaShareAlt, FaRegStar, FaEye } from "react-icons/fa";

// const NewsCard = (props = {}) => {
// const {news} = props || {}


// const NewsCard = ({ news }) => {

const NewsCard = (props = {}) => {
    const { news } = props || {}



    const {
        title,
        author,
        thumbnail_url,
        rating,
        total_view,
        details,
        others_info: { is_trending },
    } = news;

    return (
        <div className="border rounded-lg shadow-md bg-white *:px-4 *:py-2 ">
            {/* Header Section */}
            <div className="flex justify-between items-center  bg-base-200 ">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt="Author"
                        className="w-10 h-10 rounded-full border"
                    />
                    <div>
                        <h4 className="text-sm font-semibold">{author.name}</h4>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <button>
                        <FaRegBookmark className="hover:text-orange-500" />
                    </button>
                    <button>
                        <FaShareAlt className="hover:text-orange-500" />
                    </button>
                </div>
            </div>

            {/* Title Section */}
            <div className="flex items-center gap-2">

                <h2 className="text-lg font-bold my-2">{title}</h2>
                <div className="py-0 ">
                    {is_trending && (
                        <span className="badge badge-secondary ">Trending</span>
                    )}
                </div>
            </div>

            {/* Image Section */}
            <img
                src={thumbnail_url}
                alt="News Thumbnail"
                className="w-full md:h-[520px] rounded-lg mb-4"
            />



            {/* Details Section */}
            <p className="text-sm text-gray-600 mb-4">
                {details.slice(0, 250)}...{" "}
                <span className="text-orange-500 cursor-pointer font-semibold">
                    Read More
                </span>
            </p>

                    <hr />
            {/* Footer Section */}
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-1 pb-4">
                    {/* Display stars based on the rating */}
                    {[...Array(5)].map((_, index) => (
                        <span
                            key={index}
                            className={`text-orange-500 ${index < Math.round(rating.number) ? "fill-current" : "opacity-50"
                                }`}
                        >
                            ★
                        </span>
                    ))}
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                        {rating.number}
                    </span>
                </div>
                <div className="flex items-center gap-1 text-gray-600 pb-4">
                    <FaEye />
                    <span className="text-sm">{total_view}</span>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;
