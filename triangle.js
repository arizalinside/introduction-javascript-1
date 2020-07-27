let printSegitiga = 5;

if (typeof printSegitiga !== 'number') {
	console.log("Data harus number!")
} else {
	for (let i = printSegitiga; i >= 1; i--) {
		let num = '';
		for (let j = 1; j <= i; j++) {
			num += j;
		}
		console.log(num);
	}
}