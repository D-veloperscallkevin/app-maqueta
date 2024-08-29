import { Home, Mail, Settings, HelpCircle } from "lucide-react"

export default function SideNav() {
  return (
    <div className="w-64 h-screen bg-gray-100 text-gray-800 p-4">
      <div className="text-2xl font-bold mb-6"></div>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200">
              <Home className="w-5 h-5" />
              <span>Pagina Principal</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200">
              <Mail className="w-5 h-5" />
              <span>Solicitud Sumnistros</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200">
              <HelpCircle className="w-5 h-5" />
              <span>Reportes</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-200">
              <Settings className="w-5 h-5" />
              <span>Configuraciones</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
