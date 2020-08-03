function arkFood(harga, voucher, jarak, pajak) {
    let diskon = cekDiskon(harga, voucher)
    let ongkir = cekOngkir(jarak)
    let totalPajak = cekPajak(harga, pajak)
    let subTotal = harga - diskon + ongkir + totalPajak 
    console.log(`Harga          : ${harga}`)
    console.log(`Potongan       : ${diskon}`)    
    console.log(`Biaya Antar    : ${ongkir}`)
    console.log(`Pajak          : ${totalPajak}`)
    console.log(`SubTotal       : ${subTotal}`)
}

function cekDiskon(harga, voucher) {
    if (voucher === 'ARKAFOOD5' && harga >= 50000) {
        if (harga * 0.5 <= 50000) {
            diskon = harga * 0.5            
        } else {
            diskon = 50000
        }
    } else if (voucher === 'DITRAKTIRDEMY' && harga >= 25000) {
        if (harga * 0.6 <= 30000){
            diskon = harga * 0.6
        } else {
            diskon = 30000
        }
    } else {
        diskon = 0
    }

    return diskon
}

function cekOngkir(jarak) {
    if (jarak <= 2) {
        ongkir = 5000
    } else {
        ongkir = 5000 + ((jarak - 2) * 3000)
    }

    return ongkir
}

function cekPajak(harga, pajak) {
    if(pajak) {
        totalPajak = harga * 0.05
    } else {
        totalPajak = 0
    }

    return totalPajak
}

arkFood(75000, 'ARKAFOOD5', 5, true)