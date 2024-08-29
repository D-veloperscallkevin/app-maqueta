import { Button } from "@/app/ui/components/button"
import { Input } from "./components/input"
import { Label } from "@/app/ui/components/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ui/components/card"
import Image from "next/image"
import styles from "@/app/login.module.css"
import LogoApp from "@/public/logo-testing.png"

export default function Login() {

  return (
    <div className="conten flex items-center justify-center min-h-screen bg-blue-500">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className={styles.logo}><Image
                        src={LogoApp}
                        alt="Screenshots of the dashboard"
                        width={150}
                        height={100} 
                        />
            </div>
        </CardHeader>
        <form>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nombre de usuario</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}