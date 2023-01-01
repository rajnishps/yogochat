import Logo from "../../assets/yogo.svg"

export default function Navbar() {
  return (
    <div className="flex justify-between p-4">
      <img className="h-14" src={Logo} alt="logo" />
      <div>
        <span className="mr-4">RPsingh</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
