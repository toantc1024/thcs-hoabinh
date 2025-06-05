import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import IMAGE_1 from '../assets/IMAGE_1.png'
const DefaultLayout = () => {
    return (<div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="absolute inset-0 bg-[url('/src/assets/IMAGE_1.png')] opacity-10 bg-fixed bg-center bg-cover -z-10"></div>
        <Navbar />
        <main className="flex-grow pt-16">
            <Outlet />
        </main>
        <Footer />
    </div>
    )
}

export default DefaultLayout