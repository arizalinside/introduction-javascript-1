// function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
//     let filteredNumbers = dataArray.filter((number) => {
//         if (number > nilaiAwal && number < nilaiAkhir) {
//             return number.sort((a,b) => a-b)
//         } else if (nilaiAkhir < nilaiAwal) {
//             console.log("Nilai akhir harus lebih besar dari nilai awal")
//         }
//     }
//     )
// }

//     // if (number > nilaiAwal && number < nilaiAkhir) {
//     //     console.log(filteredNumbers)
//     // } else if (nilaiAkhir < nilaiAwal) {
//     //     console.log("Nilai akhir harus lebih besar dari nilai awal")
//     // } else if (dataArray.length < 5) {
//     //     console.log("Jumlah angka dalam dataArray tidak ada")
//     // }
// // }
// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])

// function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
//     if (nilaiAwal < nilaiAkhir) {
//             let filteredNumbers = dataArray.filter((number) => number > nilaiAwal && number < nilaiAkhir).sort((a, b) => a - b)
//             if (filteredNumbers) {
//                 console.log(filteredNumbers)
//             } else {
//             console.log("data array kurang dari 5")
//             } else {
//         console.log("Nilai Akhir harus lebih besar dari nilai awal")
//     }
// }

// seleksiNilai(2, 10, [1, 34, 54, 23, 7, 8, 5])

  
// function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
//     let filteredNumbers = dataArray.filter((number) => number > nilaiAwal && number < nilaiAkhir).sort((a,b) => a-b)
//     console.log(filteredNumbers)

//     if (nilaiAkhir < nilaiAwal) {
//         console.log("Nilai akhir harus lebih besar dari nilai awal")
//     } else if (dataArray.length < 5) {
//         console.log("dataArray harus lebih dari 5")
//     } else if (filteredNumbers == null) {
//         console.log("Jumlah angka dalam dataArray tidak ada")
//     }

// }
// seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])

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


