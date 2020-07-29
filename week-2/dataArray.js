function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    let filteredNumbers = dataArray.filter((number) => number > nilaiAwal && number < nilaiAkhir).sort((a,b) => a-b)

    if (nilaiAkhir < nilaiAwal) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length < 5) {
        console.log("dataArray harus lebih dari 5")
    } else if (filteredNumbers == null) {
        console.log("Jumlah angka dalam dataArray tidak ada")
    }
    console.log(filteredNumbers)
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])