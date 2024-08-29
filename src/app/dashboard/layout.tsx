import SideNav from "../ui/sidenav";
import Navbar from "../ui/navbar";
import styles from "./dash.module.css"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className={styles.dash}>
        <Navbar />
        
        <main className={styles.main}>
        <SideNav />
        
        <div className={styles.acomodo}>{children}</div>
        </main>
        <footer className={styles.footer}> Copyright - Aguilar Virtual Solutions </footer>
        </div>
    )
  }