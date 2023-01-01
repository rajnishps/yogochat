import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import { Link } from "react-router-dom"

export default function Home() {
  return (
<>
<Link to="/signin">signin</Link>
    <div className="p-8 flex h-full w-full justify-center items-center ">
      <div className="flex h-full rounded-xl truncate m-4 w-3/4">
        <Sidebar />
        <Chat />
      </div>
    </div>
</>
  )
}
