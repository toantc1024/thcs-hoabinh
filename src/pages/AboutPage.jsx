import React from 'react'

const AboutPage = () => {
    return (
        <div className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Giới thiệu về Trường THCS Hòa Bình</h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Lịch sử phát triển</h2>
                    <p className="text-gray-700 mb-4">
                        Trường THCS Hoà Bình được thành lập năm 1973 với tên trường là "Trung học Tỉnh Hạt Hòa Bình". Năm 1975, trường sáp nhập với cấp I và đổi tên trường là "Trường Cấp I, II Hòa Bình". Thời gian sau đổi thành trường "Phổ thông cơ sở Vĩnh Lợi A". Đến năm 1989, mặc dù còn chung cơ sở vật chất, nhưng trường được tách Ban giám hiệu của hai cấp hoạt động chuyên môn riêng. Năm 1992, trường sáp nhập vào trường THPT Vĩnh Lợi.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Năm 2004 tách ra khỏi trường THPT Vĩnh Lợi, trường mang tên THCS Hòa Bình theo quyết định số 104/QĐ-UB ngày 31/8/2004 của UBND huyện Vĩnh Lợi, tỉnh Bạc Liêu.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Khi mới tách ra, Trường THCS Hoà Bình có 63 cán bộ, giáo viên, 31 lớp với 1.170 học sinh và 15 phòng. Đến năm học 2024-2025, quy mô trường đã có sự phát triển đáng kể gồm: 72 cán bộ, giáo viên, trong đó CBQL là 02, giáo viên là 67, nhân viên là 03; có tổng số 33 lớp với 1137 học sinh và 42 phòng.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cơ sở vật chất</h2>
                        <p className="text-gray-700 mb-4">
                            Trường có cơ sở vật chất và trang thiết bị khá hiện đại, tổng diện tích là 15.571,8m²; đội ngũ giáo viên có tay nghề vững vàng, đáp ứng yêu cầu phát triển trong thời kỳ công nghiệp hoá, hiện đại hoá đất nước.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Trường được công nhận đạt chuẩn quốc gia lần đầu vào tháng 12/2012, đến tháng 6/2022 trường được kiểm tra và đánh giá đạt kiểm định mức độ 3 và đạt chuẩn quốc gia mức độ 2.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Thành tích nổi bật</h2>
                        <p className="text-gray-700 mb-4">
                            Trải qua nhiều thế hệ lãnh đạo cùng với đội ngũ nhà giáo tâm huyết, trường THCS Hòa Bình đã đào tạo nhiều thế hệ học sinh đóng góp nguồn nhân lực cho sự phát triển kinh tế - xã hội của địa phương.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Nhiều học sinh của trường trưởng thành, hiện là cán bộ lãnh đạo, bác sĩ, kỹ sư, kiến trúc sư, sĩ quan, doanh nhân thành đạt, … trong và ngoài tỉnh.
                        </p>
                        <p className="text-gray-700">
                            Trường THCS Hoà Bình hiện nay được Phòng Giáo dục và Đào tạo huyện Hòa Bình chọn là trường trọng điểm, trường chất lượng cao của huyện.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sứ mệnh và tầm nhìn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sứ mệnh</h3>
                            <p className="text-gray-700">
                                Đào tạo những thế hệ học sinh có phẩm chất tốt, có kiến thức nền tảng vững chắc và kỹ năng thiết yếu để phát triển toàn diện, trở thành công dân tích cực, sáng tạo, đóng góp cho sự phát triển của quê hương và đất nước.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Tầm nhìn</h3>
                            <p className="text-gray-700">
                                Xây dựng Trường THCS Hòa Bình trở thành môi trường giáo dục chất lượng cao, thân thiện, hiện đại, đáp ứng yêu cầu đổi mới căn bản, toàn diện giáo dục và đào tạo, phát triển tài năng, kỹ năng toàn diện cho học sinh.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
