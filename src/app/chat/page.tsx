'use client'
import { people, chat } from '@/db/data';
import React, { useState, useEffect } from 'react';
import { typeChat, typePerson } from '../interface';


export default function ChatApp() {
    const [activeChat, setActiveChat] = useState('person2');
    const [activeName, setActiveName] = useState('Dog Woofson');

    const handleFriendClick = (dataChat: string, name: string) => {
        setActiveChat(dataChat);
        setActiveName(name);
    };

    const peoples: typePerson[] = people
    const chats = chat;

    return (
        <div className="w-full max-w-screen-2xl mx-auto py-5">
            <div className="flex bg-white shadow-md md:overflow-hidden">
                <div className="flex-none w-full md:w-96 p-4 border-r border-gray-200">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                        <input type="text" placeholder="Search" className="flex-grow p-2 border border-gray-300 rounded-md outline-none" />
                        <a href="#" className="block w-6 h-6 ml-3 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/search.png')" }}></a>
                    </div>
                    <ul className="mt-4 overflow-y-auto max-h-[400px] md:max-h-[calc(100vh-210px)]">
                        {peoples.map((person) => (
                            <li
                                key={person.dataChat}
                                className={`flex items-center p-2 border-b border-gray-200 cursor-pointer person ${activeChat === person.dataChat ? 'bg-gray-100' : ''}`}
                                data-chat={person.dataChat}
                                onClick={() => handleFriendClick(person.dataChat, person.name)}
                            >
                                <img src={person.img} alt="" className="w-10 h-10 rounded-full mr-3" />
                                <div className="flex-grow">
                                    <span className="block font-semibold name">{person.name}</span>
                                    <span className="block text-xs text-gray-500">{person.time}</span>
                                </div>
                                <span className="block text-xs text-gray-500 preview">{person.preview}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 flex flex-col">
                    <div className="p-4 flex-1">
                        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                            <span>To: <span className="font-semibold">{activeName}</span></span>
                        </div>
                        <div className='max-w-screen max-h-screen overflow-hidden'>
                            {chats.map(chat => (
                                <div
                                    key={chat.dataChat}
                                    className={`${chat.dataChat === activeChat ? 'block' : 'hidden'}`}
                                    data-chat={chat.dataChat}
                                >
                                    <div className="text-center my-4">
                                        <span className="inline-block px-3 py-1 bg-gray-100 text-xs rounded-md">{chat.start}</span>
                                    </div>
                                    <ul className='overflow-y-scroll p-2 max-h-[685px] md:max-h-[calc(100vh-300px)]'>
                                        {chat.messages.map((message, index) => (
                                            <li key={index} className={`bubble p-2 rounded-md mb-3 w-fit ${message.type === 'you' ? 'bg-blue-500 text-white ml-auto text-right' : 'bg-gray-200 mr-auto text-left'}`}>
                                                {message.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center pt-4 border-t m-2 border-gray-200">
                        <input type="text" className="flex-grow p-2 border border-gray-300 rounded-md outline-none" />
                        <a href="#" className="block w-6 h-6 bg-no-repeat bg-center bg-cover ml-3" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/send.png')" }}></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
