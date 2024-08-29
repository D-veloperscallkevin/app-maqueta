import { Bell, Menu, FileText, Package, Calendar, Users } from "lucide-react"
import { Button } from "@/app/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/components/card"

export default function Component() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex justify-between items-center p-4 border-b">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menu</span>
        </Button>
        <h1 className="text-lg font-semibold">Intranet-App</h1>
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notificaciones</span>
        </Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-blue-400">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <FileText className="h-6 w-6 text-primary" />
            <CardTitle>Reportes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Toca para ver los reportes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Package className="h-6 w-6 text-primary" />
            <CardTitle>Documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Toca para ver</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Calendar className="h-6 w-6 text-primary" />
            <CardTitle>Calendario</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Toca para ver la actividades del mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <Users className="h-6 w-6 text-primary" />
            <CardTitle>Colaboradores</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Toca para ver a los colaboradores</p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}