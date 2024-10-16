// set variebel
Nama = "Ilham"
umur = 10
tt = "New Jersey"
Tabungan = 2000000

if ((umur >= 40 )&& (tt == "Nevada" || tt == "New York" || tt == "Havana ") && (Tabungan ==10000000) ){
    console.log(Nama + 'Kemungkinan adalah seorang anggota mafia dengan pangkat DON' )
}else if ((umur >= 25 && umur < 40) && (tt =="New Jersey"|| tt=="Manhattan"|| tt=="Nevada")&& (Tabungan >=1000000 || Tabungan<= 2000000)){
    console.log(Nama + 'kemungkinan adalah seorang anggota mafia dengan pangkat UNDERBOS')
}else if ((umur >=18 && umur < 25) && (tt == "California" || tt =="Detroit" || tt =="Boston") && (Tabungan < 1000000)){
    console.log(Nama + 'kemungkinan adalah seorang anggota mafia denghan pangkat CAPO')
}else{
    console.log(Nama + 'tidak mencurigakan')
}