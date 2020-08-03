const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja("senin")
    .then((result) => { //then akan berjalan jika promise berhasil dipenuhi
        console.log(result) //parameter result adalah callback dari resolve
    })
    .catch((error) => { //catch akan berjalan jika promise gagal dipenuhi
        console.log(error) // parameter error adalah callback dari reject
    })

// async function data(day) {
//     try { //digunakan untuk mengeksekusi kode pada async await
//         let newData = await cekHariKerja(day) //menyimpan function ke dalam variable
//         console.log(newData)
//     } catch (error) { //catch untuk menangkap error jika try salah
//         console.log(error)
//     }
// }

// data("selasa") //menjalankan fungsi data