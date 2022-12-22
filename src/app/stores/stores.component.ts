import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  id: any;
  stores: any = [
    {id: 'hn1', location: 'hn', long: '', lat: '', tittle: '[HN] Đinh Tiên Hoàng', tel: '0985885888', add: '69 Đinh Tiên Hoàng, Hoàn Kếm, Hà Nội', img1: 'assets/images/store-hn1.1.jpg', img2: 'assets/images/store-hn1.2.jpg', img3: 'assets/images/store-hn1.3.jpg',},
    {id: 'hn2', location: 'hn', long: '', lat: '', tittle: '[HN] Lò Đúc', tel: '0868818828', add: '166 Lò Đúc, Đống Mác, Hai Bà Trưng, Hà Nội', img1: 'assets/images/store-hn2.1.jpg', img2: 'assets/images/store-hn2.2.jpg', img3: 'assets/images/store-hn2.3.jpg',},
    {id: 'hn3', location: 'hn', long: '', lat: '', tittle: '[HN] Lê Thanh Nghị', tel: '0867678322', add: '92 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội', img1: 'assets/images/store-hn3.1.jpg', img2: 'assets/images/store-hn3.2.jpg', img3: 'assets/images/store-hn3.3.jpg',},
    {id: 'hn4', location: 'hn', long: '', lat: '', tittle: '[HN] Vũ Tông Phan', tel: '0904050405', add: '349 P. Vũ Tông Phan, Thanh Xuân, Hà Nội.', img1: 'assets/images/store-hn4.1.jpg', img2: 'assets/images/store-hn4.2.jpg', img3: 'assets/images/store-hn4.3.jpg',},
    {id: 'hn5', location: 'hn', long: '', lat: '', tittle: '[HN] Trần Nguyên Đán', tel: '0901779090', add: '72 Trần Nguyên Đán, Hoàng Mai, Hà Nội.', img1: 'assets/images/store-hn5.1.jpg', img2: 'assets/images/store-hn5.2.jpg', img3: 'assets/images/store-hn5.3.jpg',},
    // {id: 'hn6', location: 'hn', long: '', lat: '', tittle: '[HN] Nguyễn Văn Lộc', tel: '0867671234', add: 'BT16B5, Lô 6, P. Nguyễn Văn Lộc, Hà Đông, HN.', img1: 'assets/images/store-hn6.1.jpg', img2: 'assets/images/store-hn6.2.jpg', img3: 'assets/images/store-hn6.3.jpg',},
    {id: 'sg1', location: 'sg', long: '', lat: '', tittle: '[HCM] Ấp Bắc', tel: '0563065555', add: '4 - 6 Ấp Bắc, Q. Tân Bình, Hồ Chí Minh', img1: 'assets/images/store-sg1.1.jpg', img2: 'assets/images/store-sg1.2.jpg', img3: 'assets/images/store-sg1.3.jpg',},
    {id: 'sg2', location: 'sg', long: '', lat: '', tittle: '[HCM] Điện Biên Phủ', tel: '0988105305', add: '195/10 Điện Biên Phủ, Quận Bình Thạnh, HCM', img1: 'assets/images/store-sg2.1.jpg', img2: 'assets/images/store-sg2.2.jpg', img3: 'assets/images/store-sg2.3.jpg',},
    {id: 'sg3', location: 'sg', long: '', lat: '', tittle: '[HCM] Nguyễn Gia Trí', tel: '0901725033', add: '157 Nguyễn Gia Trí,  Bình Thạnh, HCM', img1: 'assets/images/store-sg3.1.jpg', img2: 'assets/images/store-sg3.2.jpg', img3: 'assets/images/store-sg3.3.jpg',},
    {id: 'sg4', location: 'sg', long: '', lat: '', tittle: '[HCM] Nguyễn Xí', tel: '0943189189', add: '184 Nguyễn Xí, Bình Thạnh, HCM', img1: 'assets/images/store-sg4.1.jpg', img2: 'assets/images/store-sg4.2.jpg', img3: 'assets/images/store-sg4.3.jpg',},
    {id: 'dn1', location: 'dn', long: '', lat: '', tittle: '[ĐN] Núi Thành', tel: '0963852752', add: '01 Núi Thành, Hải Châu, Đà Nẵng', img1: 'assets/images/store-dn1.1.jpg', img2: 'assets/images/store-dn1.2.jpg', img3: 'assets/images/store-dn1.3.jpg',},
    {id: 'dn2', location: 'dn', long: '', lat: '', tittle: '[ĐN] Triệu Nữ Vương', tel: '0770800900', add: '9 Triệu Nữ Vương, Hải Châu, Đà Nẵng', img1: 'assets/images/store-dn2.1.jpg', img2: 'assets/images/store-dn2.2.jpg', img3: 'assets/images/store-dn2.3.jpg',},
    {id: 'dn3', location: 'dn', long: '', lat: '', tittle: '[ĐN] Trần Hưng Đạo', tel: '0868868123', add: '461 Trần Hưng Đạo, Sơn Trà, Đà Nẵng', img1: 'assets/images/store-dn3.1.jpg', img2: 'assets/images/store-dn3.2.jpg', img3: 'assets/images/store-dn3.3.jpg',},
    {id: 'dn4', location: 'dn', long: '', lat: '', tittle: '[ĐN] Nguyễn Văn Linh', tel: '0831832830', add: '2 Nguyễn Văn Linh, Hải Châu, Đà Nẵng', img1: 'assets/images/store-dn4.1.jpg', img2: 'assets/images/store-dn4.2.jpg', img3: 'assets/images/store-dn4.3.jpg',},
    {id: 'hp1', location: 'hp', long: '', lat: '', tittle: '[HP] Lạch Tray', tel: '0363183283', add: '382-384 Lạch Tray, Q. Ngô Quyền, Hải Phòng', img1: 'assets/images/store-hp1.1.jpg', img2: 'assets/images/store-hp1.2.jpg', img3: 'assets/images/store-hp1.3.jpg',},
    {id: 'hp2', location: 'hp', long: '', lat: '', tittle: '[HP] Trần Quang Khải', tel: '0888123858', add: '17 Trần Quang Khải, Q. Hồng Bàng, Hải Phòng', img1: 'assets/images/store-hp2.1.jpg', img2: 'assets/images/store-hp2.2.jpg', img3: 'assets/images/store-hp2.3.jpg',},
  ];
}
