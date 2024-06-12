'use client'
import { useState } from "react";

export default function ModalMessage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="relative">
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={toggleModal}>
                        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative" onClick={e => e.stopPropagation()}>
                            <div className="flex flex-col space-y-4">
                                <button className="flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                                    <img src="document_icon.png" alt="Document" className="w-6 h-6 mr-2" />
                                    Document
                                </button>
                                {/* Tambahkan tombol-tombol lain di sini */}
                                <button className="flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                                    <img src="photos_icon.png" alt="Photos & Videos" className="w-6 h-6 mr-2" />
                                    Photos & Videos
                                </button>
                                <button className="flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                                    <img src="camera_icon.png" alt="Camera" className="w-6 h-6 mr-2" />
                                    Camera
                                </button>
                                <button className="flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                                    <img src="contact_icon.png" alt="Contact" className="w-6 h-6 mr-2" />
                                    Contact
                                </button>
                                <button className="flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                                    <img src="poll_icon.png" alt="Poll" className="w-6 h-6 mr-2" />
                                    Poll
                                </button>
                                <button className="flex items-center px-4 py-2 bg-gray-100 rounded hover:bg-gray-200">
                                    <img src="sticker_icon.png" alt="New Sticker" className="w-6 h-6 mr-2" />
                                    New Sticker
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    onClick={toggleModal}
                    className="px-2 py-2"
                >
                    {isOpen ? (
                        <span className="block w-6 h-6 bg-no-repeat bg-center bg-cover m-1">
                            <svg className="feather feather-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <line x1="18" x2="6" y1="6" y2="18" />
                                <line x1="6" x2="18" y1="6" y2="18" />
                            </svg>
                        </span>
                    ) : (
                        <span className="block w-6 h-6 bg-no-repeat bg-center bg-cover m-1">
                            <svg className="feather feather-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <line x1="12" x2="12" y1="5" y2="19" />
                                <line x1="5" x2="19" y1="12" y2="12" />
                            </svg>
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
}
