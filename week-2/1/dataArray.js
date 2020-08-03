function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAkhir < nilaiAwal) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length < 5) {
        console.log("dataArray harus lebih dari 5")
    } else {
        let filteredNumbers = dataArray.filter((number) => number > nilaiAwal && number < nilaiAkhir).sort((a,b) => a-b)
        console.log(filteredNumbers)
    }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])


