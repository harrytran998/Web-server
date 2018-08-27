const express = require('express');
const app = express();
// app.get('/Information', (req, res) => {
//     res.send({
//         Tên_Phòng_Trọ: 'Tuấn Phong',
//         Số_Người_Ở_Tối_Đa: '2 (Lưu ý : Không nhận cặp đôi nhé !',
//         Số_Phòng_Còn_Trống: 1,
//         Khoảng_Cách: 'Cách trường 1,4 KM đi lên chợ HL, gần Karaoke Garden',
//         Thông_Tin_Cơ_Bản: [
//             'Loại phòng : Phòng trọ không khép kín, NVS riêng ở bên cạnh P',
//             'Nội Thất có sẵn : Gác xép + 1 cái giường',
//             'Phòng rộng 13m2'
//         ],
//         Giá_Phòng_Trọ_Combo_1Củ: [
//             'Tiền_Phòng',
//             'Tiền_Điện',
//             'Tiền_Nước'
//         ],
//         Tiền_Mạng: 'Mình đã bắt ở đây gói 400k/1 tháng[Download speed = 4mb/s] => Mỗi người 80k tháng ',
//         Có_Ở_Cạnh_Chủ_Trọ_Hay_Không: 'YES',
//         Ưu_Điểm: [
//             '1. Phòng giá cực có tâm(1 củ ~full combo)',
//             '2. Cả 2 vợ chồng bác chủ nhà max dễ thương + quan tâm mọi người, nhà có gì toàn cho không à',
//             '3: Vì nơi ở có 3 phòng => Thoáng mát, sạch sẽ, không ồn ào, náo nhiệt => Dễ tập trung học hành',
//             '4: Ở đây đã có mình mua full bộ dụng cụ Nấu Ăn => Chỉ cần đến và dùng, ý thức nấu xong dọn dẹp là OKIE',
//             '5: Nếu bạn nhác không muốn nấu mà vẫn có ăn thì => Ăn chung cùng chủ nhà, mình ở đây ăn ở với bác rất thoải mái, như những đứa con trong gia đình bác thực sự',
//             '6: Ở trung tâm thiên địa : Trước là hiệu thuốc, tạp hóa + Gần chợ HL + Gần quán xá, đặc biệt là quán bún Huê nổi tiếng ở đây. Chán thì qua đánh Bia or hát Kara => Ngon !',
//             '7: Bạn nhác giặt đồ ư => Đã có máy giặt nhà bác => Chỉ việc nhét vào + tự phơi => Done !',
//             '8: Nếu bạn học ngành Kỹ thuật phần mềm || ngôn ngữ Nhật quả là 1 lựa chọn quá tuyệt vời vì => bên cạnh phòng có 1 anh học cực ngon về kỹ thuật phần mềm + tiếng Nhật, miễn là bạn chịu khó qua hỏi => Sẵn sàng giúp bất cứ lúc nào  ♥♥♥',
//             '9: Ở đây có 2 con cún tên là Phát + Trung rất dễ thương, nghịch ngợm => Lúc buồn qua nghịch với chúng nó rất vui hihi',
//             '10: Vì dãy trọ có 3 phòng => Sống sẽ rất tình cảm, san sẻ cho nhau, giúp đỡ nhau nhiều hơn là ở tập thể quá nhiều p => Loãng + K an toàn',
//             '11: Ở chỗ nay gần như là chưa có 1 vụ TRỘM CẮP nào, ở Tân Xã và các khu vực gần cây xăng HL thì trộm cắp đã từng xảy ra => Cực an toàn'
//         ],
//         Hạn_Chế: [
//             '1: Nhà vệ sinh không khép kín => Khá nhiều người k thích, nhưng mình lại thích vì không quen phòng chung PVS(bẩn + hôi + ảnh hưởng đến việc học hành)',
//             '2: Phòng có 13m2 => Chỉ ở được tối đa 2 người thôi',
//             '3: Bác chủ nhà là người tử tế => K thích những người ăn chơi, nghịch phá vào. Cụ thể ở đây là : Hút cần, tụ tập nhậu nhẹt, bia rượu, thuốc lá, gái gú, trai gái, .... Nói chung là những thứ không tốt :)',
//             '4: Vì cách trường 1.4 KM => Phải có xe máy để đi lại',
//             '5: Nóng lạnh và điều hòa chưa có => Nhưng sẽ fix khi vào ở)',
//             '6: ..... Chắc hết rồi :), mình đã ở đây ~6 tháng và chưa thấy gì thêm, rất tốt cho việc tập trung để học'
//         ]
//     });
// });

/**
 * Dùng để hiển thị trang html || cái # trong folder #
 */
app.use(express.static(__dirname + '/public'));

// app.get('/bad', (req, res) => {
//     res.send('Du ma sai gon !');
// });
// app.get('/', (req, res) => {
//     // res.send('Hello mother Fucker !');
//     res.send({
//         name: 'Nhat',
//         habit: [
//             'Fucking',
//             'Sleeping'
//         ]
//     });
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>Fuck</h1>');
// });

app.listen(3000);