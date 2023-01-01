import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <section className="flex justify-center">
      <div className="flex flex-col justify-center items-center h-screen w-400">
        <Link to="/">
          <h1 className="font-bold mb-14 text-8xl">YOGO</h1>
        </Link>
        <h3 className="mb-14 tracking-widest	font-bold letter text-2xl">
          Sign Up to start chatting as you Go
        </h3>
        <h2 className="mb-8 tracking-widest	font-bold letter text-4xl">
          SIGN IN
        </h2>
        <form
          className="flex w-full flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="p-8 mt-8 text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded-2xl"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="pr-4 text-xl text-right">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="pr-4 text-xl text-right">Email is not valid.</p>
          )}
          <input
            className="p-8 mt-8 text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded-2xl"
            type="password"
            placeholder="Password"
            id="password"
            {...register("pass1", {
              required: true,
              minLength: 6,
            })}
          />
          {errors?.pass1?.type === "required" && (
            <p className="pr-4 text-xl text-right">This field is required</p>
          )}
          {errors?.pass1?.type === "minLength" && (
            <p className="pr-4 text-xl text-right">Password too short</p>
          )}
          <div className="flex justify-between">
            <label
              className="p-8 pl-4 text-slate-400 text-2xl"
              htmlFor="remember"
            >
              <input
                className="mr-4 "
                type="checkbox"
                name="remember"
                id="remember"
                {...register("remember")}
              />
              Remember me
            </label>
            <a className=" p-8  pr-4 text-slate-100 text-2xl" href="">
              Forget Password?
            </a>
          </div>
          <button
            className=" mt-4 tracking-widest font-bold text-2xl text-center m-2 h-20 bg-slate-700 bg-opacity-80 rounded-2xl"
            type="submit"
          >
            SIGN IN
          </button>
          <Link className=" p-8  text-2xl w-full text-center" to="/signup">
            Dont have an account? Sign Up
          </Link>
        </form>
      </div>
    </section>
  )
}
