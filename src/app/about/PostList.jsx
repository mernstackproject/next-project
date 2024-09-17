import React from "react";

const PostList = ({ post }) => {
  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg w-full">
        {post.slice(0, 30).map((i, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-300"
            style={{ maxWidth: "360px" }}
          >
            <div className="h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-t-lg mb-4"></div>

            <h2 className="text-xl font-bold text-gray-900 mb-3">{i.title}</h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              {i.body.length > 80 ? `${i.body.substring(0, 80)}...` : i.body}
            </p>

            <button className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-semibold rounded-lg text-sm px-4 py-2 transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
