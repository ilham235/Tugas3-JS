Nama = "Ujang"
age = 9
tinggi = 160


if(age <= 1){
    hasil1="Di Larang Masuk";
}else if(age <= 3 ){
    hasil1="Rp 30.000";
    if(tinggi >= 70){
        hasil1="Rp 30.000";
        hasil2="Rp 10.000";
    }
}else if(age <=7){
    hasil1="Rp 40.000";
    if(tinggi>=120){
        hasil1="Rp 40.000";
        hasil2="Rp 15.000";
    }
}else if(age<=10){
    hasil1="Rp 50.000";
    if(tinggi>=150){
        hasil1="Rp 50.000";
        hasil2="Rp 20.000";
    }
}else{
    hasil1="Rp 80.000";
    hasil2="Rp_";
}
console.log("Nama = " + Nama + "\n" +"Umur = "+ age +"\n" + "Tinggi = "+ tinggi+ "\n"+ "Harga Tiket = " +hasil1+ "+" + hasil2)