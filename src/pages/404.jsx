import { useRouteError } from "react-router-dom";




function ErrorPage() {
    const error = useRouteError()
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
        <h1 className=" text-3xl font-bold">Oops!</h1>
        <p className="my-5 font-semibold text-xl">Data tidak ditemukan</p>
        <p className="font-semibold">{error.statusText || error.message }</p>
    </div>
  )
}

export default ErrorPage