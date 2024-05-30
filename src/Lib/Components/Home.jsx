import React, { useState } from 'react'
import Navbar from './Navbar'
import { useUser } from '../Context/User'
import IdeasProvider, { useIdeas } from '../Context/Ideas'

const HomeContext = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const user = useUser();
  const ideas = useIdeas();
  console.log(ideas)
  return (


    <div className='w-full h-screen bg-black'>
      <Navbar />
      <div className='flex'>
        {
          user.current &&
          (
            <div className='p-5 flex w-full'>
              <form className='addForm w-full flex flex-column shadow-3xl '>
                <h2 className="text-white">Enter the Form to post</h2>
                <label className='text-white'>Enter the Title</label>
                <input
                  className='p-2 rounded-lg'
                  type="text"
                  placeholder="Title"
                  value={title}

                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
                <label className='text-white'>Enter the Description</label>
                <textarea
                  placeholder="Description"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
                <button
                  type="button"
                  onClick={() => {

                    ideas.add({
                      userId: user.current.$id,
                      title,
                      description,
                      UserName:user.current.name,
                    })
                    console.log(user.current.$id)
                  }
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          )}

        <ul className='w-full p-4'>
          <span className='text-[50px] text-orange-600'>All the messages</span>
          {ideas.current.documents && ideas.current.documents.map((items, index) => (
         
            <li key={index} className='bg-[#a9a9a9] mb-2'>
              <span className='mr-2 px-2 border-b bg-[#a9a9a9] border-r border-solid border-black'>{index+1}</span>
              <b>{items.UserName}:</b>{" "}
              <strong>{items.title}</strong>
              <p>
                {items.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>



  )
}
export default function Home() {
  return (
    <IdeasProvider>
      <HomeContext />
    </IdeasProvider>
  )
}

