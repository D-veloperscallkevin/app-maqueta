import FooterM from "../../ui/footerm"

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <body >
        {children}
        <FooterM />
      </body>
    </html>
  )
}