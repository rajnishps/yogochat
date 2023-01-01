import Yogo from "../../assets/yogo.svg"

export default function Header() {
  return (
    <header className="h-28 p-4 flex bg-slate-500 bg-opacity-30 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <img className="pl-10 " src={Yogo} alt="Yogo Logo" />
    </header>
  )
}
