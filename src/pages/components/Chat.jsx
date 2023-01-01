import Messages from "./Messages"
import Input from "./Input"
import Logo from "../../assets/yogo.svg"
export default function Chat() {
  return (
    <div className="flex-auto w-4/5 lg:w-2/3  bg-gray-700 ">
      <div className="flex justify-between p-8 bg-gray-800">
        <span>RPSSS</span>
        <div>
          <img className="h-8" src={Logo} alt="" />
        </div>
      </div>

      <Messages />
      <Input />
    </div>
  )
}
