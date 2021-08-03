//
// alert("Tui là alert!!!")
//
// /**
//  * confirm() dùng để xác nhận
//  */
// confirm("Tui là confirm !!!")
//
// /**
//  * prompt() dùng để cho người dùng nhập dữ liệu
//  */
// prompt("Tui là prompt!!")
//
// /**
//  * console.log() dùng để hiển thị dữ liệu trong màn hình console
//  */
// console.log("Tui là console.log!!")
//
// /**
//  * document.write(): viết nội dung lên trang web
//  */
// document.writeln("I love u");
//
// /**
//  * document.getElementById("id").innerText : in giá trị lên thẻ HTML thông qua id
//  */
// document.getElementById("header").innerText = "<h1>Hello, Tui sinh ra từ InnerText</h1>";
//
// /**
//  * document.getElementById("id").innerText : in giá trị lên thẻ HTML thông qua id
//  */
document.getElementById("header").innerHTML = "<h1>Hello, Tui sinh ra từ InnerHTML</h1>";
function main() {
  let a=document.getElementById('name').value;
   document.getElementById('header').innerHTML=a;
   document.getElementById('btn').style.backgroundColor= 'red';
   document.getElementById('img').src='https://image.thanhnien.vn/1024/uploaded/binhhh/2020_09_28/bts-2_kbet.jpg';
}