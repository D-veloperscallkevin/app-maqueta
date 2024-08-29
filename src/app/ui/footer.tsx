import { Facebook, Twitter, Instagram, Linkedin, Mail, Home, FileText, Users, Bell } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Información</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-gray-900 flex items-center">
                  <Home className="w-4 h-4 mr-2" />
                  <span>Contáctanos</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 flex items-center">
                  <Bell className="w-4 h-4 mr-2" />
                  <span>Pagina Ofical</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>Eventos</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Colaboraciones</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Números de teléfono</h2>
            <address className="not-italic">
              <p>Aserrí</p>
              <p>San José, Costa Rica</p>
              <p className="mt-2">
                <a href="mailto:info@example.com" className="hover:text-gray-900 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Entrar en las redes sociales</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-900" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Mensaje motivacional</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2024 Aguilar Virtual Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}