
import { Link } from "react-router-dom"
import SubscriptionCards from "./Subscriptioncard"
// import Image from "next/image"

export default function Dashboard() {
    return (
        <>
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="logo">
                    {/* <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qGzLsmWzSOXYgn7gAktgrXhsLP2pz1.png"
                        alt="Almeria NeoBank"
                        width={120}
                        height={40}
                    /> */}
                </div>
                <nav className="nav-menu">
                    <Link href="#" className="nav-item active">
                        Dashboard
                    </Link>
                    <Link href="#" className="nav-item">
                        Photos
                    </Link>
                    <Link href="#" className="nav-item">
                        Videos
                    </Link>
                    <Link href="#" className="nav-item">
                        Cottages
                    </Link>
                    <Link href="#" className="nav-item">
                        My Notes
                    </Link>
                    <Link href="#" className="nav-item">
                        Collection
                    </Link>
                    <Link href="#" className="nav-item">
                         Private
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="main-content">
                <header className="header">
                    <nav className="top-nav">
                        <Link href="#" className="nav-link">
                            Feed
                        </Link>
                        <Link href="#" className="nav-link">
                            Friends
                        </Link>
                        <Link href="#" className="nav-link">
                            Subscription
                        </Link>
                        <Link href="#" className="nav-link">
                            Settings
                        </Link>
                        <Link href="#" className="nav-link">
                            
                        </Link>
                    </nav>
                    <div className="user-section">
                        <span className="user-name">Himeshchanchal Bhattarai</span>
                        <div className="user-avatar">
                            <img src="/placeholder.svg" alt="User" width={32} height={32} className="avatar" />
                        </div>
                    </div>
                </header>
            </main>
                
            {/* Payment Sidebar */}
            <aside className="payment-sidebar">
                   <SubscriptionCards />
            </aside>
        </div>
            </>
            )
        }

            