class Personnel {
    constructor(fullName,date,gender,part,image,email,phone,address) {
        this.fullName = fullName;
        this.date = date;
        this.gender = gender;
        this.part = part;
        this.image = image;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
    //
    getfullName() {
        return this.fullName;
    }
    getdate() {
        return this.date;
    }
    getgender() {
        return this.gender;
    }
    getpart() {
        return this.part;
    }
    getimage() {
        return this.image;
    }
    getemail() {
        return this.email;
    }
    getphone() {
        return this.phone;
    }
    getaddress() {
        return this.address;
    }
    //

    setfullName(fullName) {
        this.fullName =fullName;
    }
    setdate(date) {
        this.date = date;
    }
    setgender(gender) {
        this.gender =gender;
    }
    setpart(part) {
        this.part = part;
    }
    setimage(image) {
        this.image = image;
    }
    setemail(email) {
        this.email = email;
    }
    setphone(phone) {
        this.phone = phone;
    }
    setaddress(address) {
        this.address = address;
    }


    edit(fullName,date,gender,part,image,email,phone,address) {
        this.fullName = fullName;
        this.date = date;
        this.gender = gender;
        this.part = part;
        this.image = image;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}