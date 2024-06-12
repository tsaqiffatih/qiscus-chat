import { typePerson } from "@/app/interface";

type HandleFriendClick = (dataChat: string, name: string) => void;

export default function SideBar({ peoples, handleFriendClick, activeChat }: { peoples: typePerson[], handleFriendClick: HandleFriendClick, activeChat: string }) {
    return (
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
    )
}