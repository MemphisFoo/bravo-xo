import React from 'react';

function Home({currentUser}) {
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <h2 className="mb-2 text-l font-bold dark:text-purple"> Welcome to the Bravoverse, {currentUser.username}!</h2>
        </div>
    )
}

export default Home;