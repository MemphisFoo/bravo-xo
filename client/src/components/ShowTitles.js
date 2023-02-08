import React, {useState} from 'react'
import { useParams, useHistory} from 'react-router-dom'
import ShowUsers from './ShowUsers'

function ShowTitles({show, onShow, onUsers}) {

function handleClick(){
    onShow(show)
    onUsers(show.user)
}

  return (
    <div>
       <div  className="body">
                <button onClick={handleClick} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black bg-opacity-99 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        {show.title}
                    </span>
                </button>
            </div>
            </div>
            )
}

export default ShowTitles