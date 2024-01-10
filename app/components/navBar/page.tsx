export default function NavBar() {
  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold"> My page</div>
          <div className="space-x-4">
            <a href="#" className="text-white bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
