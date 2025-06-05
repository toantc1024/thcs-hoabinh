import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaInfoCircle, FaGraduationCap, FaNewspaper, FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import LOGO from '../assets/LOGO.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<nav className="bg-blue-700/80 backdrop-blur-md text-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                {/* Logo and school name */}
                <div className="flex items-center">                        
                    <div className="flex-shrink-0 flex items-center">
                    <img className="h-12 w-12 mr-3" src={LOGO} alt="THCS Hoa Binh Logo" />
                    <div className="hidden md:block">
                        <h1 className="text-xl font-bold">Trường THCS Hòa Bình</h1>
                        <p className="text-xs text-blue-200">Tỉnh Bạc Liêu</p>
                    </div>
                </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link to="/" className="flex items-center px-3 py-2 text-sm font-medium hover:bg-blue-600 rounded-md">
                        <FaHome className="mr-1" /> Trang chủ
                    </Link>
                    <Link to="/about" className="flex items-center px-3 py-2 text-sm font-medium hover:bg-blue-600 rounded-md">
                        <FaInfoCircle className="mr-1" /> Giới thiệu
                    </Link>
                    <Link to="/admission" className="flex items-center px-3 py-2 text-sm font-medium hover:bg-blue-600 rounded-md">
                        <FaGraduationCap className="mr-1" /> Tuyển sinh
                    </Link>
                    <Link to="/news" className="flex items-center px-3 py-2 text-sm font-medium hover:bg-blue-600 rounded-md">
                        <FaNewspaper className="mr-1" /> Tin tức
                    </Link>
                    <Link to="/contact" className="flex items-center px-3 py-2 text-sm font-medium hover:bg-blue-600 rounded-md">
                        <FaPhone className="mr-1" /> Liên hệ
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden bg-blue-800">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" className="flex items-center px-3 py-2 text-base font-medium hover:bg-blue-600 rounded-md">
                        <FaHome className="mr-2" /> Trang chủ
                    </Link>
                    <Link to="/about" className="flex items-center px-3 py-2 text-base font-medium hover:bg-blue-600 rounded-md">
                        <FaInfoCircle className="mr-2" /> Giới thiệu
                    </Link>
                    <Link to="/admission" className="flex items-center px-3 py-2 text-base font-medium hover:bg-blue-600 rounded-md">
                        <FaGraduationCap className="mr-2" /> Tuyển sinh
                    </Link>
                    <Link to="/news" className="flex items-center px-3 py-2 text-base font-medium hover:bg-blue-600 rounded-md">
                        <FaNewspaper className="mr-2" /> Tin tức
                    </Link>
                    <Link to="/contact" className="flex items-center px-3 py-2 text-base font-medium hover:bg-blue-600 rounded-md">
                        <FaPhone className="mr-2" /> Liên hệ
                    </Link>
                </div>
            </div>
        )}
    </nav>
    )
}

export default Navbar