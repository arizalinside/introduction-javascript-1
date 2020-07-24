let mtk = 80
let bahasaIndonesia = 90
let bahasaInggris = 89
let ipa = 69

let hasil = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4

if (hasil >= 90 && hasil <= 100) {
    console.log("Rata-rata = "+ hasil)
    console.log("Grade = A")
} else if (hasil >= 80 && hasil <= 89) {
    console.log("Rata-rata = "+ hasil)
    console.log("Grade = B")
} else if (hasil >= 70 && hasil <= 79) {
    console.log("Rata-rata = "+ hasil)
    console.log("Grade = C")
} else if (hasil >= 60 && hasil <= 69) {
    console.log("Rata-rata = "+ hasil)
    console.log("Grade = D")
} else {
    console.log("Rata-rata = "+ hasil)
    console.log("Grade = E")
}