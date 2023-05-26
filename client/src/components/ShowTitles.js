import React from 'react'

function ShowTitles({show, onShow}) {

function handleClick(){
    onShow(show)
    const div=document.getElementById('backgroundDiv')
    // console.log(div)
    div.className=show.acronymn
}

  return (
    
                <button onClick={handleClick} className="list-item items-left justify-left p-0.5 mb-1 mr-0.5  text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative inline flex px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {show.title}
                    </span>
                </button>
           
            )
}

export default ShowTitles