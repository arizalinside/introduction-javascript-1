let mtk = 80
let bahasaIndonesia = 90
let bahasaInggris = 85
let ipa = 69

if (typeof mtk !== 'number' || typeof bahasaIndonesia !== 'number' || typeof bahasaInggris !== 'number' || typeof ipa !== 'number') {
    console.log("Nilai harus berupa angka!");
} else {
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
}