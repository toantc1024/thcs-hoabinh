import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaUsers, FaMedal, FaSchool } from 'react-icons/fa'
import LOGO from '../assets/LOGO.png'
import IMAGE_1 from '../assets/IMAGE_1.png'
import IMAGE_2 from '../assets/IMAGE_2.png'
const HomePage = () => {
    return (
        <div className="bg-transparent">
            {/* Hero Section */}
            <section className="relative pt-8">
                <div className="bg-gradient-to-r from-blue-700/90 to-indigo-700/90 backdrop-blur-md text-white rounded-xl mx-4 lg:mx-8 overflow-hidden shadow-xl">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/4 flex justify-center mb-8 md:mb-0">
                                <img src={LOGO} alt="Logo THCS Hòa Bình" className="w-40 h-40 object-contain drop-shadow-glow" />
                            </div>
                            <div className="md:w-2/3">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Trường THCS Hòa Bình</h1>
                                <p className="text-xl md:text-2xl mb-8">Chất lượng giáo dục - Môi trường thân thiện</p>
                                <p className="text-lg mb-6">
                                    Trường THCS Hòa Bình là trường trọng điểm, trường chất lượng cao của huyện Hòa Bình, tỉnh Bạc Liêu.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#about" className="bg-white/90 backdrop-blur-sm text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-white transition duration-300 text-center">
                                        Tìm hiểu thêm
                                    </a>
                                    <a href="#admission" className="bg-yellow-500/90 backdrop-blur-sm text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition duration-300 text-center">
                                        Thông tin tuyển sinh
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-wave-pattern bg-repeat-x"></div>
            </section>

            {/* Stats Section */}            <section className="py-12 bg-white/60 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-xl transition duration-300 border border-white/20 shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-600/90 backdrop-blur-sm rounded-full text-white shadow-lg">
                                <FaUsers size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">1,137+</h3>
                            <p className="text-gray-600">Học sinh</p>
                        </div>                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-xl transition duration-300 border border-white/20 shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-600/90 backdrop-blur-sm rounded-full text-white shadow-lg">
                                <FaGraduationCap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">67+</h3>
                            <p className="text-gray-600">Giáo viên</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-xl transition duration-300 border border-white/20 shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-600/90 backdrop-blur-sm rounded-full text-white shadow-lg">
                                <FaMedal size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">30+</h3>
                            <p className="text-gray-600">Giải thưởng cấp tỉnh</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-xl transition duration-300 border border-white/20 shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-600/90 backdrop-blur-sm rounded-full text-white shadow-lg">
                                <FaSchool size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">1973</h3>
                            <p className="text-gray-600">Năm thành lập</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}            
            <section id="about" className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center mb-4">
                            <img src={LOGO} alt="Logo THCS Hòa Bình" className="w-12 h-12 object-contain mr-3" />
                            <h2 className="text-3xl font-bold text-gray-800">Giới thiệu Trường THCS Hòa Bình</h2>
                        </div>
                        <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/20"><div>
                        <img src={IMAGE_1} alt="Trường THCS Hòa Bình" className="rounded-lg shadow-xl w-full" />
                    </div>
                        <div>
                            <p className="text-gray-700 mb-4">
                                Trường THCS Hoà Bình được thành lập năm 1973 với tên trường là "Trung học Tỉnh Hạt Hòa Bình". Sau nhiều thay đổi qua các thời kỳ, đến năm 2004, trường chính thức mang tên THCS Hòa Bình theo quyết định số 104/QĐ-UB của UBND huyện Vĩnh Lợi, tỉnh Bạc Liêu.
                            </p>
                            <p className="text-gray-700 mb-4">
                                Trường có cơ sở vật chất và trang thiết bị hiện đại, đội ngũ giáo viên có tay nghề vững vàng. Trường được công nhận đạt chuẩn quốc gia mức độ 2 và kiểm định chất lượng mức độ 3 vào tháng 06/2022.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-6">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">33 lớp học</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">42 phòng học</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">15.571,8m² diện tích</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                                    <span className="text-gray-700">Chất lượng giáo dục cao</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Admission Section */}            
            <section id="admission" className="py-16 bg-white/60 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center mb-4">
                            <img src={LOGO} alt="Logo THCS Hòa Bình" className="w-12 h-12 object-contain mr-3" />
                            <h2 className="text-3xl font-bold text-gray-800">Thông tin tuyển sinh lớp 6 – Năm học 2024-2025</h2>
                        </div>
                        <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50/80 to-blue-100/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-white/20">
                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                                <FaCalendarAlt size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Điều kiện xét tuyển</h3>
                            </div>
                        </div>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                            <li>Học sinh đã hoàn thành chương trình Tiểu học (tốt nghiệp lớp 5), có giấy Chứng nhận hoàn thành tiểu học.</li>
                            <li>Có hộ khẩu thường trú (hoặc tạm trú có xác nhận) tại khu vực tuyển sinh của Trường THCS Hòa Bình (xã Hòa Bình, huyện Thủy Nguyên).</li>
                            <li>Học sinh đảm bảo đủ sức khỏe, các tiêu chuẩn về học lực và đạo đức theo quy định của Bộ GD&ĐT và Sở GD&ĐT.</li>
                        </ul>

                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                                <FaCalendarAlt size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Thời gian tuyển sinh & Hạn nộp hồ sơ</h3>
                            </div>
                        </div>
                        <div className="mb-8 text-gray-700">
                            <p className="mb-2">Dự kiến tuyển sinh vào khoảng tháng 6 – 7/2024. Theo kế hoạch chung:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Đăng ký dự tuyển (có thể thực hiện trực tuyến qua cổng tuyển sinh) vào cuối tháng 6/2024.</li>
                                <li>Nộp hồ sơ trực tiếp tại trường trong đầu tháng 7/2024 (thời hạn cụ thể do trường thông báo).</li>
                            </ul>
                            <p className="mt-4 italic">Chi tiết lịch tuyển sinh sẽ được công bố cụ thể trên thông báo chính thức của nhà trường.</p>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="bg-blue-600 p-3 rounded-full text-white mr-4">
                                <FaCalendarAlt size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Phương thức xét tuyển</h3>
                            </div>
                        </div>
                        <p className="mb-8 text-gray-700">
                            Trường không tổ chức thi tuyển đầu vào. Việc xét tuyển dựa trên kết quả học bạ cuối năm lớp 5 và ưu tiên khu vực (ngoài ra, ưu tiên đối tượng chính sách nếu có). Do đó, học sinh cần chuẩn bị học bạ, điểm tổng kết và các giấy tờ ưu tiên (nếu thuộc diện gia đình chính sách) để nhà trường xét duyệt.
                        </p>                        <div className="text-center mt-6">
                            <a href="#" className="inline-block bg-blue-600/90 backdrop-blur-sm text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg">
                                Xem chi tiết thông tin tuyển sinh
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Highlights */}            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex justify-center items-center mb-4">
                            <img src={LOGO} alt="Logo THCS Hòa Bình" className="w-12 h-12 object-contain mr-3" />
                            <h2 className="text-3xl font-bold text-gray-800">Tin tức nổi bật</h2>
                        </div>
                        <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-white/20">
                            <img src={IMAGE_1} alt="Tin tức" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="text-sm text-blue-600 mb-2">05/06/2025</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Thông báo kết quả học tập năm học 2024-2025</h3>
                                <p className="text-gray-600 mb-4">Trường THCS Hòa Bình thông báo kết quả học tập năm học 2024-2025...</p>
                                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Xem thêm →</a>
                            </div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-white/20">
                            <img src={IMAGE_2} alt="Tin tức" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="text-sm text-blue-600 mb-2">01/06/2025</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Kế hoạch tuyển sinh lớp 6 năm học 2025-2026</h3>
                                <p className="text-gray-600 mb-4">Trường THCS Hòa Bình thông báo kế hoạch tuyển sinh lớp 6...</p>
                                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Xem thêm →</a>
                            </div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 border border-white/20">
                            <img src={IMAGE_1} alt="Tin tức" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="text-sm text-blue-600 mb-2">25/05/2025</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Lễ tổng kết năm học và tri ân thầy cô</h3>
                                <p className="text-gray-600 mb-4">Trường THCS Hòa Bình tổ chức lễ tổng kết năm học và tri ân thầy cô...</p>
                                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Xem thêm →</a>
                            </div>
                        </div>
                    </div>                    <div className="text-center mt-10">
                        <a href="#" className="inline-block border-2 border-blue-600/80 text-blue-600 font-medium px-8 py-3 rounded-md hover:bg-blue-600/90 hover:text-white transition duration-300 backdrop-blur-sm shadow-lg">
                            Xem tất cả tin tức
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}            <section className="py-16 bg-gradient-to-r from-blue-700/90 to-indigo-700/90 backdrop-blur-md text-white rounded-xl mx-4 lg:mx-8 my-8 overflow-hidden shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-8 md:mb-0">
                            <h2 className="text-3xl font-bold mb-4">Liên hệ với chúng tôi</h2>
                            <p className="text-blue-100 max-w-xl">
                                Để biết thêm thông tin chi tiết về tuyển sinh, chương trình học và các hoạt động của trường, vui lòng liên hệ với chúng tôi.
                            </p>
                        </div>
                        <a href="#" className="bg-white/90 backdrop-blur-sm text-blue-700 font-medium px-8 py-3 rounded-md hover:bg-white transition duration-300 shadow-lg">
                            Liên hệ ngay
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage