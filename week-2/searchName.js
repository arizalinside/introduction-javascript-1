let name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function searchName(searchWord, limit, callback) {
    let words = name.filter(names => names.includes(searchWord))
    let limits = words.slice(0, limit)
    callback(words)
    callback(limits)
}

function showName(first) {
    console.log(first)
}

searchName("an", 3, showName)