Nama = "Bugis"
NoPunggung = "99"
console.log("Nama = " + Nama+ "\n" + "Nomor Punggung = "+ NoPunggung+"\n "+"berhak bearada di posisi =")
if (NoPunggung %2==0){
    console.log( "Attacker")
    if (NoPunggung >=50 || NoPunggung <=100) {
        console.log( "Berhak dipilih menjadi captain team")
    }
}
else if(NoPunggung %2==1){
    console.log( "Defender")
    if (NoPunggung>= 90) {
        console.log( "Playmaker")
}       if(NoPunggung %3==0 || NoPunggung %5==0){
        console.log("Keeper")
}else{
    console.log("Not found")
}
  
}
