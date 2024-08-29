import Link from "next/link"

export default function FooterLogin() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
      <div className="text-center space-y-2">
        <p className="text-xs text-muted-foreground">
         Aguilar Virtual Solutions. Todos los derechos reservados.
        </p>
        <div className="flex justify-center space-x-4 text-xs">
          <Link href="#" className="text-primary hover:underline">
            Terminos del servicio
          </Link>
          <Link href="#" className="text-primary hover:underline">
            Politicas de Privacidad
          </Link>
          <Link href="#" className="text-primary hover:underline">
            Ayuda
          </Link>
        </div>
      </div>
    </footer>
  )
}