import { Home, Search, Bell, User } from "lucide-react"
import { Button } from "@/app/ui/components/button"

export default function FooterM() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <nav className="flex justify-around items-center h-16">
        <Button variant="ghost" size="icon" className="flex flex-col items-center">
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Principal</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center">
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Solicitudes</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center">
          <Bell className="h-5 w-5" />
          <span className="text-xs mt-1">Notificationes</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col items-center">
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Perfil</span>
        </Button>
      </nav>
    </footer>
  )
}