const me = {
    name: "Ming Feng Lee",
    description:"Student @Ngee Ann Polytechnic, Aspiring UI/UX Designer",
    email:"lee.ming.feng.04@gmail.com",
    phone: "+65 8493 7087",
}

export function Navbar() {
  return (
    <nav className="flex flex-row container mx-auto justify-content-center bg-white">
        <div className="navbar-logo basis-1/4 my-3">
            <a href="/index"><img src="/mf.png" alt="Logo" style={{ width: '50%' }} /></a>
        </div>
        <div className="basis-1/4"></div>
        <div className="basis-1/2 my-5 flex flex-row">
            {[
                ['About', '/about'],
                ['Resume', '/resume'],
                ['Projects', '/projects'],
                ['Contact', '/contact'],
            ].map(([title, url]) => (<a href={url} className="basis-1/4 font-light text-end text-lg text-black hover:text-gray-500">{title}</a>))}
        </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer flex flex-row container mx-auto justify-content-between bg-white my-5">
        <div className="basis-1/2 grid justify-items-start"><p className="font-light text-lg">©Ming Feng Lee. 2023</p></div>
        <div className="basis-1/2 grid justify-items-end"><p className="font-light text-lg">Powered by React and Next.Js</p></div>
    </footer>
  );
}