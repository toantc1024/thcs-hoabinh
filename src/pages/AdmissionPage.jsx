import React from 'react'
import { FaFileDownload, FaList, FaQuestionCircle, FaClipboardList } from 'react-icons/fa'

const AdmissionPage = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Thông tin tuyển sinh lớp 6</h1>
                    <h2 className="text-xl text-blue-600 font-medium mt-2">Năm học 2024-2025</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <FaQuestionCircle size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Điều kiện xét tuyển</h2>
                    </div>

                    <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                        <li>Học sinh đã hoàn thành chương trình Tiểu học (tốt nghiệp lớp 5), có giấy Chứng nhận hoàn thành tiểu học.</li>
                        <li>Có hộ khẩu thường trú (hoặc tạm trú có xác nhận) tại khu vực tuyển sinh của Trường THCS Hòa Bình (xã Hòa Bình, huyện Thủy Nguyên).</li>
                        <li>Học sinh đảm bảo đủ sức khỏe, các tiêu chuẩn về học lực và đạo đức theo quy định của Bộ GD&ĐT và Sở GD&ĐT Hải Phòng.</li>
                    </ul>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <FaList size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Thời gian tuyển sinh & Hạn nộp hồ sơ</h2>
                    </div>

                    <div className="text-gray-700">
                        <p className="mb-4">Dự kiến tuyển sinh vào khoảng tháng 6 – 7/2024. Theo kế hoạch chung, sẽ có hai giai đoạn:</p>
                        <ul className="list-disc pl-6 space-y-3 mb-4">
                            <li>Đăng ký dự tuyển (có thể thực hiện trực tuyến qua cổng tuyển sinh) vào cuối tháng 6/2024</li>
                            <li>Nộp hồ sơ trực tiếp tại trường trong đầu tháng 7/2024 (thời hạn cụ thể do trường thông báo)</li>
                        </ul>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                            <p className="text-yellow-700"><span className="font-bold">Lưu ý:</span> Trường không nhận hồ sơ trước thời gian quy định.</p>
                        </div>
                        <p className="italic text-blue-600">Chi tiết lịch tuyển sinh sẽ được công bố cụ thể trên thông báo chính thức của nhà trường.</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <FaClipboardList size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Phương thức xét tuyển</h2>
                    </div>

                    <div className="text-gray-700">
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                            <p className="text-lg font-medium text-blue-700 mb-2">Trường không tổ chức thi tuyển đầu vào.</p>
                            <p>Việc xét tuyển dựa trên kết quả học bạ cuối năm lớp 5 và ưu tiên khu vực (ngoài ra, ưu tiên đối tượng chính sách nếu có).</p>
                        </div>
                        <p className="mb-4">Do đó, học sinh cần chuẩn bị học bạ, điểm tổng kết và các giấy tờ ưu tiên (nếu thuộc diện gia đình chính sách) để nhà trường xét duyệt.</p>
                        <p>(Không có kỳ thi, tổ hợp môn thi, hay nội dung ôn thi cụ thể cho lớp 6.)</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <FaFileDownload size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Học phí và học bổng</h2>
                    </div>

                    <div className="text-gray-700">
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Trường THCS Hòa Bình là trường công lập, thực hiện chính sách miễn học phí theo quy định của Nhà nước đối với bậc THCS.</li>
                            <li>Các khoản thu khác (bảo hiểm y tế, vệ sinh…) thu theo quy định chung của cấp thành phố.</li>
                            <li>Trường có chính sách hỗ trợ học bổng, giảm học phí cho học sinh khó khăn, con gia đình chính sách và khen thưởng học sinh giỏi theo quy định của Sở GD&ĐT Hải Phòng và Phòng GD&ĐT huyện Thủy Nguyên.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8">
                    <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                            <FaFileDownload size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Hướng dẫn làm hồ sơ</h2>
                    </div>

                    <div className="text-gray-700">
                        <p className="mb-4">Hồ sơ dự tuyển gồm các giấy tờ cơ bản sau (bản sao công chứng/chứng thực):</p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li>Đơn dự tuyển vào lớp 6 (theo mẫu của nhà trường hoặc PGD Thủy Nguyên).</li>
                            <li>Học bạ tiểu học (sao y có xác nhận). Nếu đang học lớp 5, nộp học bạ 4 năm học; nếu đã tốt nghiệp, nộp bản sao giấy chứng nhận tốt nghiệp tiểu học.</li>
                            <li>Giấy khai sinh (sao y công chứng).</li>
                            <li>Sổ hộ khẩu thường trú (hoặc sổ tạm trú) của học sinh và cha mẹ. Nếu là tỉnh ngoài hoặc tạm trú, kèm Giấy xác nhận tạm trú do công an địa phương cấp.</li>
                            <li>Ảnh chân dung 3×4: khoảng 2 ảnh (một gắn kèm hồ sơ, một dán vào đơn).</li>
                            <li>Giấy tờ ưu tiên (nếu có): Giấy chứng nhận con gia đình chính sách, trẻ khuyết tật… để được cộng điểm khuyến khích.</li>
                            <li>Giấy khám sức khỏe (nếu trường yêu cầu) và các giấy tờ khác theo hướng dẫn của trường.</li>
                        </ol>
                    </div>

                    <div className="mt-8 text-center">
                        <a href="#" className="inline-block bg-blue-600 text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                            Tải mẫu đơn dự tuyển
                        </a>
                    </div>
                </div>

                <div className="bg-blue-600 text-white rounded-lg p-8 mt-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Cần hỗ trợ thêm?</h2>
                        <p className="mb-6">
                            Nếu phụ huynh hoặc học sinh cần thêm thông tin, vui lòng liên hệ trực tiếp với văn phòng tuyển sinh của nhà trường.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#" className="bg-white text-blue-700 font-medium px-6 py-3 rounded-md hover:bg-blue-50 transition duration-300">
                                Liên hệ tư vấn
                            </a>
                            <a href="#" className="bg-blue-700 border-2 border-white text-white font-medium px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
                                Đăng ký nhận thông báo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdmissionPage
