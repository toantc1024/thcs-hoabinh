import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

const ContactPage = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Liên hệ</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Mọi thông tin liên hệ với Trường THCS Hòa Bình. Chúng tôi luôn sẵn sàng hỗ trợ và giải đáp thắc mắc của quý phụ huynh và học sinh.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                            <FaMapMarkerAlt className="text-blue-600 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Địa chỉ</h3>
                        <p className="text-gray-600">
                            Ấp thị trấn B, Thị trấn Hòa Bình, huyện Hòa Bình, Tỉnh Bạc Liêu
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                            <FaPhone className="text-blue-600 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Số điện thoại</h3>
                        <p className="text-gray-600">
                            02913.882268
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                            <FaEnvelope className="text-blue-600 text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                        <p className="text-gray-600">
                            thcshoabinh@pgdhoabinh.edu.vn
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Giờ làm việc</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaClock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-800 font-medium">Thứ Hai - Thứ Sáu</p>
                                    <p className="text-gray-600">7:00 - 17:00</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaClock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-800 font-medium">Thứ Bảy</p>
                                    <p className="text-gray-600">7:00 - 11:30</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <FaClock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-800 font-medium">Chủ Nhật</p>
                                    <p className="text-gray-600">Nghỉ</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Địa chỉ trang tin điện tử</h3>
                            <a href="http://thcshoabinh.pgdhoabinh.edu.vn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                http://thcshoabinh.pgdhoabinh.edu.vn/
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Gửi thông tin liên hệ</h3>

                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 mb-2">Họ và tên</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Nhập họ và tên"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Nhập địa chỉ email"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 mb-2">Số điện thoại</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-gray-700 mb-2">Chủ đề</label>
                                    <select
                                        id="subject"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Chọn chủ đề</option>
                                        <option value="tuyen-sinh">Tuyển sinh</option>
                                        <option value="hoc-phi">Học phí</option>
                                        <option value="chuong-trinh">Chương trình học</option>
                                        <option value="khac">Khác</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 mb-2">Nội dung</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nhập nội dung tin nhắn"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300 flex items-center"
                            >
                                <FaPaperPlane className="mr-2" /> Gửi thông tin
                            </button>
                        </form>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-2">
                    {/* Replace this with your actual Google Maps embed code */}
                    <div className="w-full h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7576685991753!2d105.6399635!3d8.9983729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b4e0f81b76c1%3A0x5c9192591ed06d51!2zVHLGsOG7nW5nIFRIQ1MgSMOyYSBCw6xuaA!5e0!3m2!1svi!2s!4v1654567890123!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
