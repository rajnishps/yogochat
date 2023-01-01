import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center h-screen w-400">
        <h1 className="font-bold mt-24 mb-14 text-white text-8xl">YOGO</h1>
        <h3 className="mb-14 tracking-widest	font-bold letter text-white text-2xl">
          Sign Up to start chatting as you Go
        </h3>
        <form className="flex w-full flex-col" action="">
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded"
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <div className="flex justify-between"></div>
          <button
            className=" mt-8 tracking-widest font-bold text-white text-2xl text-center m-2 h-20 bg-slate-700 bg-opacity-80 rounded"
            type="submit"
          >
            SIGN UP
          </button>
          <Link
            className=" p-8 text-slate-100 text-2xl w-full text-center"
            to="/"
          >
            Wanna Login?
          </Link>
        </form>
      </div>
    </section>
  )
}
