let personnel = new Personnel( "Tạ Thị Thùy", '07/02/2002', 'Nữ','Nhân sự',"https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482740FMP/anh-mo-ta.png","nyq.@gmail.com","0986774851","Quảng Nam" );
let personnel1 = new Personnel("Tạ Thị Thùy", '07/02/2002', 'Nữ','Nhân sự',"https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482740FMP/anh-mo-ta.png","nyq.@gmail.com","0986774851","Quảng Nam");
let personnel2 = new Personnel("Tạ Thị Thùy", '07/02/2002', 'Nữ','Nhân sự',"https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/482740FMP/anh-mo-ta.png","nyq.@gmail.com","0986774851","Quảng Nam");
let arr =[personnel, personnel1, personnel2];
let manage = new PersonnelManagement(arr);

function addPersonnel(){
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let part = document.getElementById('part').value;
    let img = document.getElementById('img').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    let personnel = new Personnel(name,date,gender,part,img,email,phone,address);
    manage.addPersonnel(personnel);
    manage.showList();
    clear();
}
function deletePersonnel(){

}
function clear(){
    document.getElementById('fullname').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('img').value= '';
}
function updatePersonnel(){
    let name = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;
    let part = document.getElementById('part').value;
    let img = document.getElementById('img').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let personnel = manage.findPersonnelById(personnelId);
    manage.edit(personnel,name,date,gender,part, img,email,phone,address);
    manage.showList();
    clear();
}

manage.showList();