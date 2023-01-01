import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"

export default function Home() {
  return (
    <div className="p-8 flex h-full w-full justify-center items-center ">
      <div className="flex h-full rounded-xl truncate m-4 w-3/4">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}
