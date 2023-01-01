import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  const email = watch("email")
  const pass1 = watch("pass1")
  const pass2 = watch("pass2")

  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center h-screen w-400">
        <h1 className="font-bold mt-24 mb-14 text-white text-8xl">YOGO</h1>
        <h3 className="mb-14 tracking-widest	font-bold letter text-white text-2xl">
          Sign Up to start chatting as you Go
        </h3>
        <form
          className="flex w-full flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded-2xl"
            type="text"
            placeholder="Email"
            {...register("email", { required: "this is reqired" })}
          />
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded-2xl"
            type="password"
            placeholder="Password"
            {...register("pass1", {
              required: "this is reqired",
              minLength: { value: 8, message: "Minimun Length is 8" },
            })}
          />
          <p className="pr-4 text-xl text-right text-slate-50">
            {errors.pass1?.message}
          </p>
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded-2xl"
            type="password"
            placeholder="Confirm Password"
            {...register("pass2", {
              required: "this is reqired",
              minLength: { value: 8, message: "Minimun Length is 8" },
            })}
          />
          <p className="pr-4 text-xl text-right text-slate-50">
            {errors.pass2?.message}
          </p>
          <div className="flex justify-between"></div>
          <button
            className=" mt-8 tracking-widest font-bold text-white text-2xl text-center m-2 h-20 bg-slate-700 bg-opacity-80 rounded-2xl"
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
