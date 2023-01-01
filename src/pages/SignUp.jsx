import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

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
            placeholder="Name"
            {...register("name", {
              required: true,
            })}
          />
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded-2xl"
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="pr-4 text-xl text-right text-slate-50">
              Email is required.
            </p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="pr-4 text-xl text-right text-slate-50">
              Email is not valid.
            </p>
          )}
          <input
            className="p-8 mt-8 text-white text-right m-2 h-20 bg-slate-700 bg-opacity-50 rounded-2xl"
            type="password"
            placeholder="Password"
            id="password"
            {...register("pass1", {
              required: true,
              minLength: 6,
            })}
          />
          {errors?.pass1?.type === "required" && (
            <p className="pr-4 text-xl text-right text-slate-50">
              This field is required
            </p>
          )}
          {errors?.pass1?.type === "minLength" && (
            <p className="pr-4 text-xl text-right text-slate-50">
              Password too short
            </p>
          )}

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
