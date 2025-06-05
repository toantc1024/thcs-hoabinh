import React from 'react'
import { FaCalendar, FaUser, FaTag } from 'react-icons/fa'

const NewsPage = () => {    // Sample news data
    const newsItems = [
        {
            id: 1,
            title: 'Thông báo kết quả học tập năm học 2024-2025',
            date: '05/06/2025',
            category: 'Thông báo',
            author: 'Ban Giám Hiệu',
            excerpt: 'Trường THCS Hòa Bình công bố kết quả học tập năm học 2024-2025. Tỷ lệ học sinh đạt danh hiệu học sinh giỏi, tiên tiến tăng so với năm trước.',
            image: '/src/assets/IMAGE_1.png'
        },
        {
            id: 2,
            title: 'Kế hoạch tuyển sinh lớp 6 năm học 2025-2026',
            date: '01/06/2025',
            category: 'Tuyển sinh',
            author: 'Hội đồng tuyển sinh',
            excerpt: 'Trường THCS Hòa Bình thông báo kế hoạch tuyển sinh lớp 6 năm học 2025-2026. Thời gian nhận hồ sơ từ ngày 20/6 đến 10/7/2025.',
            image: '/src/assets/IMAGE_2.png'
        },
        {
            id: 3,
            title: 'Lễ tổng kết năm học và tri ân thầy cô',
            date: '25/05/2025',
            category: 'Hoạt động',
            author: 'Đoàn Thanh niên',
            excerpt: 'Trường THCS Hòa Bình tổ chức lễ tổng kết năm học và tri ân thầy cô với nhiều hoạt động ý nghĩa, thể hiện lòng biết ơn của học sinh đối với thầy cô giáo.',
            image: '/src/assets/IMAGE_1.png'
        },
        {
            id: 4,
            title: 'Học sinh trường THCS Hòa Bình đạt giải cao trong kỳ thi Học sinh giỏi tỉnh',
            date: '20/05/2025',
            category: 'Thành tích',
            author: 'Tổ Toán - Lý - Hóa',
            excerpt: 'Các học sinh của trường THCS Hòa Bình đã xuất sắc đạt 13 giải trong kỳ thi học sinh giỏi cấp tỉnh năm học 2024-2025.',
            image: '/src/assets/IMAGE_2.png'
        },
        {
            id: 5,
            title: 'Chương trình ngoại khóa "Em yêu lịch sử Việt Nam"',
            date: '10/05/2025',
            category: 'Hoạt động',
            author: 'Tổ Xã hội',
            excerpt: 'Trường THCS Hòa Bình tổ chức chương trình ngoại khóa "Em yêu lịch sử Việt Nam" với nhiều hoạt động bổ ích, giúp học sinh hiểu rõ hơn về lịch sử dân tộc.',
            image: '/src/assets/IMAGE_1.png'
        },
        {
            id: 6,
            title: 'Kết quả Hội thi Tin học trẻ cấp tỉnh',
            date: '05/05/2025',
            category: 'Thành tích',
            author: 'Tổ Tin học',
            excerpt: 'Học sinh trường THCS Hòa Bình đạt 4 giải trong Hội thi Tin học trẻ cấp tỉnh Bạc Liêu năm 2025, gồm 1 giải Nhì, 1 giải Ba và 2 giải Khuyến khích.',
            image: '/src/assets/IMAGE_2.png'
        },
    ];

    return (
        <div className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Tin tức - Sự kiện</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Cập nhật những thông tin, hoạt động và sự kiện mới nhất tại Trường THCS Hòa Bình
                    </p>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                        Tất cả
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition">
                        Thông báo
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition">
                        Tuyển sinh
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition">
                        Hoạt động
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition">
                        Thành tích
                    </button>
                </div>

                {/* Featured Article */}                <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-12">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <img
                                src={newsItems[0].image}
                                alt={newsItems[0].title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8">
                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                <FaCalendar className="mr-2" /> {newsItems[0].date}
                                <span className="mx-2">•</span>
                                <FaTag className="mr-2" /> {newsItems[0].category}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">{newsItems[0].title}</h2>
                            <p className="text-gray-600 mb-6">{newsItems[0].excerpt}</p>
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                                    <FaUser className="text-blue-600" />
                                </div>
                                <span className="text-gray-700">{newsItems[0].author}</span>
                            </div>
                            <a
                                href="#"
                                className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition"
                            >
                                Đọc thêm
                            </a>
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.slice(1).map((item) => (
                        <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <FaCalendar className="mr-2" /> {item.date}
                                    <span className="mx-2">•</span>
                                    <FaTag className="mr-2" /> {item.category}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Xem thêm →</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                    <nav className="flex items-center">
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 mr-2 hover:bg-gray-300">
                            &lt;
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white mr-2">
                            1
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 mr-2 hover:bg-gray-300">
                            2
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 mr-2 hover:bg-gray-300">
                            3
                        </a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                            &gt;
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NewsPage
