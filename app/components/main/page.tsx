import NavBar from "../navBar/page";

export default function Main() {
  const style: any = "bg-gradient-to-r from-green-400 to-blue-500 h-screen flex justify-center items-center"
  return (
    <div>
      <NavBar style={style} />
      <div className={style}>
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
