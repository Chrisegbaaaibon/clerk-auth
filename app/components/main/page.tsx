import NavBar from "../navBar/page";

export default function Main() {
  return (
    <div className="bg-gradient-to-tr to-blue-700 from-indigo-900">
      <NavBar />
      <div className="flex min-h-screen items-center justify-center p-10">
        <div className="w-max">
          <h1
            className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
            I'm Christopher. 👋
          </h1>
        </div>
      </div>
    </div>
  )
}
