import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  id: any;
  job: any = [
    {
      id: 'qly-cuahang',
      tittle: 'Quản lý Cửa hàng',
      desc: 'Nắm vững & hướng dẫn quy trình vận hành và nội quy công ty, đảm bảo thực hiện đúng quy trình làm việc tại cửa hàng; Chịu trách nhiệm điều hành cửa hàng, sắp xếp ca làm việc;Giải quyết mọi vấn đề phát sinh tại cửa hàng. Đảm bảo các tiêu chuẩn về dịch vụ, mang đến cho khách hàng trải nghiệm chất lượng phục vụ cao.Quản lý nhân sự cửa hàng, xây dựng môi trường làm việc thân thiện và hòa nhập cho các thành viên;Thực hiện các báo cáo định kỳ về tình hình kinh doanh của cửa hàng hoặc theo yêu cầu của Quản lý khu vực',
      require: 'Có kinh nghiệm trên 6 tháng ở vị trí Cửa hàng trưởng trong ngành cà phê hoặc nhà hàng, hoặc trên 1 năm ở vị trí giám sát cửa hàng; Có kỹ năng điều hành, dẫn dắt tốt đội ngũ trên 10 nhân sự; Có kỹ năng tin học văn phòng. Kỹ năng làm & đọc báo cáo; Có khả năng làm việc độc lập và làm việc nhóm dưới cường độ và áp lực cao. ',
      salary: 'Thoả thuận',
      deadline: '31/12/2022',
      location: 'Hà Nội, Đà Nẵng',
    },
    {
      id: 'giamsat',
      tittle: 'Giám sát ca',
      desc: 'Nắm vững quy trình vận hành và nội quy công ty, đảm bảo thực hiện đúng quy trình làm việc tại cửa hàng; Xử lý trực tiếp các vấn đề phát sinh, các thắc mắc của khách hàng, hoặc hướng dẫn nhân viên xử lý triệt để nhằm duy trì chất lượng phục vụ trong ca làm việc; Kiểm soát chất lượng sản phẩm được đưa đến tay khách hàng, đảm bảo tính đồng nhất và phù hợp yêu cầu; Hỗ trợ cửa hàng trưởng (SM) đặt & kiểm soát hàng hóa, quản lý tồn kho, sử dụng hiệu quả chi phí cửa hàng; Quản lý nhân sự trong ca làm, đảm bảo quy trình làm việc được thực hiện chính xác và hiệu quả.',
      require: 'Có kinh nghiệm trong ngành cà phê hoặc nhà hàng với ít nhất trên 6 tháng kinh nghiệm ở vị trí tương đương; Có kỹ năng tin học văn phòng; Có kỹ năng giao tiếp, truyền đạt thông tin lưu loát, dễ hiểu; Trung thực, nhiệt tình, nhạy bén và có tinh thần trách nhiệm cao.',
      salary: 'Thỏa thuận',
      deadline: '31/12/2022',
      location: 'Hồ Chí Minh, Đà Nẵng',
    },
    {
      id: 'baove',
      tittle: 'Bảo vệ',
      desc: 'Dẫn dắt xe cho Khách hàng đến Cửa hàng; Bảo vệ an ninh Cửa hàng; Giữ gìn vệ sinh khuôn viên bãi xe; Hỗ trợ một số công việc khác tại Cửa hàng.',
      require: 'Nam, từ 18-60 tuổi; Có sức khỏe tốt, tháo vát; Giao tiếp thân thiện, vui vẻ; Thời gian làm việc: Xoay ca linh động, Đảm bảo trung bình 8h/ Ngày.',
      salary: 'Từ 6.000.000đ',
      deadline: '31/12/2022',
      location: 'Hà Nội, Hải Phòng',
    },
    {
      id: 'nvien-bep',
      tittle: 'Nhân Viên Bếp',
      desc: 'Chuẩn bị nguyên liệu để chế biến món ăn theo công thức.; Đảm bảo chính xác về số lượng hàng hóa.; Giữ gìn và bảo quản công cụ dung cụ và máy móc thiết bị; Sơ chế nguyên liệu, trang trí hoặc ra món theo hướng dẫn của quản lý Bếp và/hoặc quy chuẩn món quy định; Thực hành nghiêm túc quy định về an toàn vệ sinh thực phẩm, quy trình nội bộ, nội qui công ty.',
      require: 'Ưu tiên  có kinh nghiệm làm bếp từ 06 tháng đến 1 năm hoặc đã được đào tạo về nghề bếp; Tác phong nhanh nhẹn, chăm chỉ, tháo vát, hòa đồng; Chịu được  áp lực trong công việc; Khả năng làm việc nhóm.',
      salary: 'Từ 8.000.000đ',
      deadline: '31/12/2022',
      location: 'Hồ Chí Minh, Đà Nẵng, Hải Phòng',
    },
    {
      id: 'barista',
      tittle: 'Barista',
      desc: 'Vận hành với tinh thần học hỏi, trung thực, sở hữu niềm đam mê hiểu biết để giới thiệu về văn hóa, những giá trị cốt lõi, và nhiệm vụ của The Coffee House cho khách hàng ; Luôn giữ vững thái độ làm việc bình tĩnh và chuyên nghiệp nhằm bảo đảm tiêu chuẩn hoạt động của cửa hàng và tạo tấm gương cho những thành viên khác ; Xây dựng môi trường làm việc nhóm thân thiện bằng cách theo dõi, phát hiện các dấu hiệu thay đổi trong đạo đức nghề nghiệp; Luôn giữ thái độ tôn trọng khách hàng để mang lại những dịch vụ hoàn hảo nhất & đáp ứng được mức tốt nhất đối với nhu cầu của họ; Trải nghiệm tất cả các vị trí trong cửa hàng: Thu ngân, Pha chế, Phục vụ.',
      require: 'Tuổi từ đủ 19 trở lên; Nhanh nhẹn, vui vẻ, hoạt bát; Thời gian làm việc: Full Time 08 tiếng/ca hoặc Part Time từ 04 – 06 tiếng/ca.',
      salary: 'Từ 7.000.000đ',
      deadline: '31/12/2022',
      location: 'Hà Nội, Hồ Chí Minh, Đà Nẵng, Hải Phòng',
    },
    {
      id: 'ketoan',
      tittle: 'Nhân Viên Kế Toán',
      desc: 'Khai báo thuế; Làm sổ sách kế toán; Làm Báo cáo tài chính; Làm các công việc theo yêu cầu của cấp trên.',
      require: 'Ứng viên Nữ; Tốt nghiệp từ Cao đẳng trở lên; Có tinh thần cầu tiến, cẩn thận, trách nhiệm',
      salary: '7.000.000đ - 9.000.000đ',
      deadline: '31/12/2022',
      location: 'Hồ Chí Minh',
    },
    {
      id: 'cvien-tuyendung',
      tittle: 'Chuyên Viên Tuyển Dụng',
      desc: 'Xác định nhu cầu tuyển dụng trong doanh nghiệp dựa trên tình hình thực tế của doanh nghiệp hoặc theo tìm hiểu xu hướng mới của ngành; Đề xuất với cấp trên về phương án triển khai việc tuyển dụng. Lập kế hoạch tuyển dụng theo quy trình tuyển dụng; Thực hiện liên hệ các bước sắp xếp phỏng vấn, đặt lịch phỏng vấn, hỗ trợ phòng Nhân sự và các phòng ban khác trong quá trình phỏng vấn; Theo sát tiến độ công việc, báo cáo kết quả, các vấn đề tồn tại trong công tác chuyên môn và đề xuất các giải pháp khắc phục để đạt được mục tiêu tuyển dụng; Giúp nhân viên mới hòa nhập với môi trường doanh nghiệp.',
      require: 'Trình độ CAO ĐẲNG trở lên các ngành Quản trị nhân sự, Quản trị nguồn nhân lực, Kinh tế, Quản trị kinh doanh; Có kinh nghiệm vị trí tuyển dụng hoặc ở vị trí tương đương là một lợi thế; Có khả năng nhìn người và nắm bắt được tâm lý ứng viên; Có kỹ năng tốt trong giao tiếp, hướng dẫn, quản lý đội nhóm.',
      salary: '8.000.000đ - 10.000.000đ',
      deadline: '31/12/2022',
      location: 'Hà Nội',
    },
    {
      id: 'cvien-sqs',
      tittle: 'Chuyên Viên Quản Lý Chất Lượng',
      desc: 'Triển khai, phối hợp với các Đơn vị trong việc xây dựng, hoàn thiện Bộ Tiêu chuẩn chất lượng của từng Đơn vị; Thực hiện đo lường kết quả hoạt động, tổng hợp số liệu, phân tích và đánh giá chất lượng dịch vụ chung của toàn Công ty và của từng Đơn vị;  Tiến hành sàng lọc các Đơn vị có chất lượng dịch vụ chưa đạt yêu cầu trong các kỳ đánh giá và thực hiện yêu cầu khắc phục, cải tiến; Giám sát tiến độ triển khai các hoạt động cải tiến chất lượng dịch vụ và tham gia khắc phục, cải tiến các lỗi phát sinh/phát hiện theo đúng Quy trình khắc phục, cải tiến.',
      require: 'Tốt nghiệp Đại học trở lên chuyên ngành: Tài chính - Ngân hàng, Kinh tế, Quản trị kinh doanh, Marketing, Luật,...; Ưu tiên có chứng chỉ quản lý dự án chuyên nghiệp - PMP/Scrum Master/Agile; Tối thiếu 01 năm kinh nghiệm quản lý chất lượng ,TQM ,ISO 9001 ,Kazen,5S.',
      salary: '10.000.000đ - 12.000.000đ',
      deadline: '31/12/2022',
      location: 'Hà Nội',
    },
    {
      id: 'nvien-cskh',
      tittle: 'Nhân Viên Chăm Sóc Khách Hàng',
      desc: 'Gọi ra cho khách hàng (KH), check phản hồi chất lượng và ghi nhận ý kiến của khách hàng đã dùng; Tư vấn và giải quyết những vấn đề thường gặp theo nhu cầu của KH; Nghe record (bản thân) để tự đánh giá, học hỏi, rèn luyện kỹ năng tư vấn, xử lý tình huống; Thực hiện các công việc khác theo yêu cầu của cấp trên.',
      require: 'Kinh nghiệm: Ít nhất 1 năm kinh nghiệm vị trí CSKH ngành hàng thực phẩm; Ngoại ngữ: Tiếng Anh (Sơ cấp); Vi tính: Văn phòng; Khác: Kỹ năng tư vấn, giao tiếp, xử lý tình huống.',
      salary: '7.000.000đ - 8.000.000đ',
      deadline: '31/12/2022',
      location: 'Hà Nội',
    },
    {
      id: '',
      tittle: '',
      desc: '',
      require: '',
      salary: '',
      deadline: '31/12/2022',
      location: '',
    },
  ];
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
    })
  }
}
