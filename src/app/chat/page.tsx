'use client'
import { people, chat } from '@/db/data';
import React, { useState, useEffect } from 'react';
import { typeChat, typePerson } from '../interface';
import SideBar from '@/compoents/SideBar';



export default function ChatApp() {
    const [activeChat, setActiveChat] = useState('person2');
    const [activeName, setActiveName] = useState('Dog Woofson');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleFriendClick = (dataChat: string, name: string) => {
        setActiveChat(dataChat);
        setActiveName(name);
    };

    const peoples: typePerson[] = people
    const chats = chat;

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="max-h-screen drawer bg-white w-full max-w-screen-2xl mx-auto py-5 items-center justify-center">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className=" flex drawer-content bg-white shadow-md md:overflow-hidden w-screen-2xl border">
                    <div className="flex-none w-full md:w-96 p-4 border-r hidden md:block border-gray-200">
                        <div className="flex items-center justify-between pb-4 border-b border-gray-200 md:h-16">
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
                    <div className="flex-1 flex-col overflow-y-hidden w-screen">
                        <div className="p-4 flex-1 overflow-y-hidden">
                            <div className="flex items-center h-9 md:h-16 justify-between pb-4 border-b border-gray-200">
                                <div className="flex-none lg:hidden">
                                    <label htmlFor="my-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                    </label>
                                </div>
                                <span>To: <span className="font-semibold">{activeName}</span></span>
                            </div>
                            <div className='max-w-screen h-[650px] overflow-hidden'>
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
                        <div className="flex items-center pt-2 border-t m-2 border-gray-200">
                            <span className='block w-6 h-6 bg-no-repeat bg-center bg-cover m-1'>
                                <svg className="feather feather-plus" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19" /><line x1="5" x2="19" y1="12" y2="12" /></svg>
                            </span>
                            <input type="text" className="flex-grow p-2 border border-gray-300 rounded-md outline-none" />
                            <a href="#" className="block w-6 h-6 bg-no-repeat bg-center bg-cover m-2" >
                                <svg data-name="Layer 21" height="24" id="Layer_21" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><title /><polygon points="3 12 8.61 14.992 17 8 9 17.455 9 21 12.164 16.887 18 20 21 3 3 12" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='drawer-side' >
                    {/* side bar */}
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex-none w-96 bg-white h-screen p-4 border-r border-gray-200">
                        <div className="flex items-center justify-between pb-4 border-b border-gray-200 md:h-16">
                            <input type="text" placeholder="Search" className="flex-grow p-2 border border-gray-300 rounded-md outline-none" />
                            <a href="#" className="block w-6 h-6 ml-3 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/search.png')" }}></a>
                        </div>
                        <ul className="mt-4 overflow-y-auto h-4/5">
                            {peoples.map((person) => (
                                <li
                                    key={person.dataChat}
                                    className={`flex items-center p-2 border-b border-gray-200 cursor-pointer person ${activeChat === person.dataChat ? 'bg-gray-100' : ''}`}
                                    data-chat={person.dataChat}
                                    onClick={() => handleFriendClick(person.dataChat, person.name)}

                                >
                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
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
                </div>
            </div>
        </div>
    );
}
