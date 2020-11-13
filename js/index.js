function myFunction() {
    var x,y;
    x = document.getElementById("myInputId").value;
    y = document.getElementById("myInputName").value;
    try{
      if(x == "" && y == "") throw "Nhập tên đăng nhập và mật khẩu";
      if(x != "" && y == "") throw "Bạn cần nhập mật khẩu";
      if(x == "" && y != "") throw "Bạn cần nhập tên đăng nhập";
      if(x == "admin" && y == "1234567") throw "Đăng nhập thành công";
      if(x = "" && y != "" && y.length < 6) throw "Mật khẩu cần nhập trên 6 ký tự";
    }catch(err) {
      alert(err);
  }
}

//Bind() == On()
$(document).ready(function(){
  $("#slide").bind({
    click:function(){$(".card-bodys").slideToggle();},
  });
});