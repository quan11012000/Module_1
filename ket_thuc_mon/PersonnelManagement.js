class PersonnelManagement {
    constructor(arr) {
        this.personnel = arr;
    }
    showList() {
        let table = '';
        for (let i = 0; i < this.personnel.length; i++) {
            
            table += '<td>';
            table += this.personnel[i].fullName;
            table += '</td>';

            table += '<td>';
            table += this.personnel[i].date;
            table += '</td>';

            table += '<td>';
            table += this.personnel[i].gender;
            table += '</td>';
            table += '<td>';
            table += this.personnel[i].part;
            table += '</td>';
            table += '<td>';
            table += '<img width="100px" height="100px" src=" '+this.personnel[i].image+'">';
            table += '</td>';

            table += '<td>';
            table += this.personnel[i].email;
            table += '</td>';

            table += '<td>';
            table += this.personnel[i].phone;
            table += '</td>';



            table += '<td>';
            table += this.personnel[i].address;
            table += '</td>';






            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deletePersonnel('+i+')">Delete</button> ' +
                ' <button  style="background-color: orange ; color: white" type="button" onclick="editPersonnel('+i+')">Edit</button>' +
                '</td>';

            table += '</tr>';
        }
        document.getElementById('list-personnel').innerHTML = table;
    }

    addPersonnel(personnel) {
        this.personnel.push(personnel);
    }


    edit(personnel,fullname, date, gender,part, img,email,phone,address) {
        personnel.edit( fullname, date,gender, part, img,email,phone,address);
    }

}




