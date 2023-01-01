import { Link } from "react-router-dom"

export default function SignIn() {
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
          <div className="flex justify-between">
            <label className="p-8 pl-4 text-slate-400 text-2xl" htmlFor="">
              <input
                className="mr-4"
                type="checkbox"
                name="remember"
                id="remember"
              />
              Remember me
            </label>
            <a className=" p-8  pr-4 text-slate-100 text-2xl" href="">
              Forget Password?
            </a>
          </div>

          <button
            className=" mt-4 tracking-widest font-bold text-white text-2xl text-center m-2 h-20 bg-slate-700 bg-opacity-80 rounded"
            type="submit"
          >
            SIGN IN
          </button>
          <Link
            className=" p-8 text-slate-50  text-2xl w-full text-center"
            to="/signup"
          >
            Not a user? Sign Up
          </Link>
        </form>
      </div>
    </section>
  )
}
