/**
 * bai 2
 * đầu vào :
 * số thực 1 :5
 * số thực 2 :6 
 * số thực 3 :7
 * số thực 4 :8
 * số thực 5 :9
 * xử lý :
 * tổng = sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5 = 5 + 6 + 7 + 8 + 9 = 35
 * trung binh = tong/5 = 35:5 = 7
 * đầu ra :
 * xuất ra trung bình : 7
 */

var sothuc1 = 5;
var sothuc2 = 6;
var sothuc3 = 7;
var sothuc4 = 8;
var sothuc5 = 9;
var tong = sothuc1 + sothuc2 + sothuc3 + sothuc4 + sothuc5;
var trungBinh = tong / 5;
console.log('Gia Tri Trung Binh = ' + trungBinh);


/**
 * bai 3
 * đầu vào
 * tỉ gia USD = 23500VND;
 * số tiền USD qui đổi ra VND : 5$;
 * xử lý:
 * số tiền sau qui đổi = tỉ giá USD * số tiền USD muốn qui đổi  = 23500 * 5 = 117500
 * đầu ra:
 * xuat ra số tiền sau qui đổi : 117500
 */
const USD = 23500;
var tienUSD = 5;
var tienViet = tienUSD * USD;
console.log('So Tien Sau Khi Qui Doi = ' + tienViet + 'VND');

/***
 * bai 4
 * đầu vào: 
 * chiều dài : 10
 * chiều rông: 5
 * xử lý:
 * chu vi = (chiều dài + chiều rộng) * 2 = (5 + 10)*2 = 30;
 * diện tích = chiều dài * chiều rộng = 5 * 10 = 50;
 * dau ra :
 * chu vi = 30
 * dien tich - 50
 */
var chieuDai = 10;
var chieuRong = 5;
var chuVi = (chieuDai + chieuRong) * 2;
console.log('Chu Vi = ' + chuVi);

var dienTich = chieuDai * chieuRong;
console.log('Dien Tich = ' + dienTich);

/**
 * bai 5:
 * đầu vào:
 * nhập vào 1 số 2 chữ số : n= 35;
 * xử lý:
 * lấy số hàng đơn vị : sohangdonvi = n % 10 = 5
 * lấy số hàng chục : Math.floor((n % 100) / 10);
 * tổng kí số = sohangdonvi + sohangchuc = 5+3 = 8
 * đầu ra:
 * xuất ra tổng kí số : 8
 */
var n = 35;
var hangDV = n % 10;
var hangChuc = Math.floor((n % 100) / 10);
var sum = hangDV + hangChuc;
console.log('Tổng kí số = ', sum)

