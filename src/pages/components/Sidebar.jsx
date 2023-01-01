import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

export default function Sidebar() {
  return (
    <div className="flex-auto w-1/5 lg:w-1/3 p-4 bg-gray-800 ">
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}
