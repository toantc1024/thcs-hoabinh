import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (<footer className="bg-gray-800/90 backdrop-blur-md text-white pt-12 pb-8 border-t border-gray-700/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">                    {/* School Information */}                    <div>
                <div className="flex items-center mb-4">
                    <img src="/src/assets/LOGO.png" alt="THCS Hoa Binh Logo" className="h-10 w-10 mr-3 drop-shadow-glow" />
                    <h3 className="text-xl font-bold text-white/90">THCS Hòa Bình</h3>
                </div>
                <p className="text-gray-400 mb-6">
                    Trường THCS Hòa Bình là trường trọng điểm, trường chất lượng cao của huyện Hòa Bình, tỉnh Bạc Liêu.
                </p>
                <ul className="space-y-4">
                    <li className="flex">
                        <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">Ấp thị trấn B, Thị trấn Hòa Bình, huyện Hòa Bình, Tỉnh Bạc Liêu</span>
                    </li>
                    <li className="flex">
                        <FaPhone className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">02913.882268</span>
                    </li>
                    <li className="flex">
                        <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">thcshoabinh@pgdhoabinh.edu.vn</span>
                    </li>
                </ul>
            </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">Liên kết nhanh</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                Giới thiệu
                            </Link>
                        </li>
                        <li>
                            <Link to="/admission" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                Tuyển sinh
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                Tin tức - Sự kiện
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition duration-300">
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Working Hours */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">Giờ làm việc</h3>
                    <ul className="space-y-3">
                        <li className="flex">
                            <FaClock className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <p className="text-gray-300">Thứ Hai - Thứ Sáu</p>
                                <p className="text-gray-400">7:00 - 17:00</p>
                            </div>
                        </li>
                        <li className="flex">
                            <FaClock className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <p className="text-gray-300">Thứ Bảy</p>
                                <p className="text-gray-400">7:00 - 11:30</p>
                            </div>
                        </li>
                        <li className="flex">
                            <FaClock className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                            <div>
                                <p className="text-gray-300">Chủ Nhật</p>
                                <p className="text-gray-400">Nghỉ</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">Kết nối với chúng tôi</h3>
                    <p className="text-gray-400 mb-6">
                        Theo dõi chúng tôi trên các nền tảng mạng xã hội để cập nhật các tin tức và hoạt động của trường.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition duration-300">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Trường THCS Hòa Bình - Tỉnh Bạc Liêu. Tất cả các quyền được bảo lưu.
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                    Địa chỉ trang tin điện tử: http://thcshoabinh.pgdhoabinh.edu.vn/
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer