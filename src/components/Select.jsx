import { Input } from "@/components/shadcn/ui/input"

export default function Select() {
  return (
    <div className="flex items-center w-9/12 rounded-full bg-white dark:bg-gray-800 p-2 shadow-md gap-1 z-10">
      <Input
        type="text"
        placeholder="Wyszukaj nazwę pojazdu"
        className="flex-1 rounded-full py-2 px-4 leading-none text-gray-800 dark:text-white bg-transparent focus:outline-none z-10"
      />
      <SearchIcon className="w-5 h-5 text-gray-800 dark:text-white z-10" />
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}