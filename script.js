let myObject = [
    {
        'name': 'Alex',
        'good_dude': true,
    },
    {
        'name': 'Sandra',
        'good_dude': false,
    },
    {
        'name': 'Jenni',
        'good_dude': true,
    },
    {
        'name': 'Justus',
        'good_dude': false,
    },
    {
        'name': 'Nick',
        'good_dude': false,
    },
];

console.table(myObject)

console.table(myObject.filter((element) => {return element['good_dude'] == false})
);

console.table(
    myObject.filter((element) => {return element['name'] == 'Alex'})
)