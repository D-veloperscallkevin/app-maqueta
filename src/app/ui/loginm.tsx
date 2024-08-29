import Image from "next/image"
import { Button } from "@/app/ui/components/button"
import { Input } from "@/app/ui/components/input"
import { Label } from "@/app/ui/components/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/app/ui/components/card"
import styles from "@/app/login.module.css"
import LogoApp from "@/public/logo-testing.png"

export default function LoginM() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-500 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
        <div className={styles.logo}><Image
                        src={LogoApp}
                        alt="Screenshots of the dashboard"
                        width={200}
                        />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Nombre de usuario</Label>
            <Input id="email" placeholder="massda@gmail.com" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Input/>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                type="button"></Button>
            </div>
          </div>
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button variant="link" className="text-sm text-muted-foreground">
            Olvidaste la contraseña?
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}