import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

// Card'a tek tek proplar ekleyin, ardından bunları kullanmak için her birini yeniden yapılandırın
function Card(props) {
  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="bg-white sm:rounded-lg sm:shadow">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full object-cover" 
                src={props.src}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">
                <a href="#" className="hover:underline">
                  {props.name}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <a href="#" className="hover:underline">
                  {props.date}
                </a>
              </p>
            </div>
            <CardButton />
          </div>
        </div>
        <div className="px-4 pb-5 opacity-25 sm:p-6 sm:pt-0">
          <p>
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CardButton() {
  return (
    <div className="flex flex-shrink-0 self-center">
      <div as="div" className="relative inline-block text-left">
        <div>
          <div className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
            <span className="sr-only">Açık opsiyonlar</span>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {

  const users = [
    {name:"Sophia Smith",
      date:"12 February 1989",
      src:"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at lectus urna. Et magnis dis parturient montes nascetur ridiculus."},
    {name:"Olivia Brown",
      date:"5 July 1976",
      src:"https://images.unsplash.com/photo-1589156215870-a324614b3fff?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim suspendisse in est ante in nibh mauris. Facilisis mauris sit amet massa."},
    {name:"Alexander Johnson",
      date:"21 December 1998",
      src:"https://images.unsplash.com/photo-1646658104783-2eec2433c1d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDczfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus suspendisse faucibus interdum posuere. Egestas sed sed risus pretium quam vulputate."},
    {name:"Emily Johnson",
    date:"28 May 1992",
    src:"https://images.unsplash.com/photo-1656432606161-41c3071950ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5N3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus."},

  ]

  const userList = users.map(user=>{
    return(
    <li key={user.name}>
    <Card {...user}/>
    </li>
    )
    })
  

  return (
    <div className="bg-gray-100">
      {userList}
    </div>
  );
}
