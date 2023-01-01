import { useForm } from "react-hook-form"

export default function Input() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="relative top-16">
      <div>
        <form className="flex w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="outline-none text-right px-8 w-full h-20 bg-slate-100 bg-opacity-50"
            type="text"
            placeholder="text"
            {...register("text", {
              required: true,
            })}
          />
          <button className=" p-2 bg-red-400" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
