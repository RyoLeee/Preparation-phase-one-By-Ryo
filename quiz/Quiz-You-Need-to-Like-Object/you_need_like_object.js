// FIRST QUIZ
function ganjilGenapAsianGames(date, data) {
  if (date < 1 || date > 31) return "Invalid Dates";
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    let firstVehicle = data[i];
    if (firstVehicle.type.toLowerCase() === "mobil") {
      let plateNumb = firstVehicle.plat.match(/[0-9]/g);
      let lastNumb = Number(plateNumb[plateNumb.length - 1]);
      if (
        (date % 2 === 0 && lastNumb % 2 !== 0) ||
        (date % 2 !== 0 && lastNumb % 2 === 0)
      ) {
        result += 1;
      }
    }
  }
  return result;
}

console.log(
  ganjilGenapAsianGames(30, [
    {
      plat: "B 1234 ABC",
      type: "Mobil",
    },
    {
      plat: "A 2457 HE",
      type: "Motor",
    },
    {
      plat: "AB 87 RFS",
      type: "Motor",
    },
    {
      plat: "Z 999 ERT",
      type: "Mobil",
    },
  ])
); // 1

console.log(
  ganjilGenapAsianGames(26, [
    {
      plat: "A 24 HE",
      type: "Mobil",
    },
    {
      plat: "AB 871 RFS",
      type: "Mobil",
    },
    {
      plat: "Z 9992 ERT",
      type: "Mobil",
    },
  ])
); // 1

console.log(
  ganjilGenapAsianGames(1, [
    {
      plat: "A 24 WE",
      type: "Mobil",
    },
    {
      plat: "AB 871 RFS",
      type: "Mobil",
    },
    {
      plat: "Z 9992 XOXO",
      type: "Mobil",
    },
  ])
); // 2

console.log(
  ganjilGenapAsianGames(1, [
    {
      plat: "A 2431 HE",
      type: "Motor",
    },
    {
      plat: "AB 8711 RFS",
      type: "Motor",
    },
    {
      plat: "Z 999 ERT",
      type: "Motor",
    },
  ])
); // 0

console.log(
  ganjilGenapAsianGames(32, [
    {
      plat: "X 123 HAHA",
      type: "Mobil",
    },
  ])
); // invalid dates

console.log(
  ganjilGenapAsianGames(0, [
    {
      plat: "X 123 HAHA",
      type: "Mobil",
    },
  ])
); // invalid dates

console.log(" ");
console.log(" ");
console.log(" ");

// SECOND QUIZ
function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000;
  let duitLarry = 95000;
  let duitJack = 90000;
  let result = [];

  for (let i = 0; i < tradeActivity.length; i++) {
    let moment = tradeActivity[i];
    for (let j = 0; j < moment.length; j++) {
      let activity = moment[j];
      let name = activity.split(/[-+]/)[0].trim().toLowerCase();
      let match = activity.match(/[-+]\d+/); // contoh "+5" atau "-3"
      if (!match) continue;

      let change = parseInt(match[0]);
      let currentMoney = null;
      let owner = "";

      if (name === "jeff bezos") {
        currentMoney = duitJeff;
        owner = "Amazon";
      } else if (name === "larry page") {
        currentMoney = duitLarry;
        owner = "Google";
      } else if (name === "jack ma") {
        currentMoney = duitJack;
        owner = "Alibaba";
      }

      let newMoney = currentMoney + currentMoney * (change / 100);

      if (name === "jeff bezos") duitJeff = newMoney;
      if (name === "larry page") duitLarry = newMoney;
      if (name === "jack ma") duitJack = newMoney;

      result.push({
        name: name.replace(/\b\w/g, (c) => c.toUpperCase()),
        deposit: newMoney,
        owner: owner,
      });
    }
  }

  return result;
}

console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);

console.log(
  "=============================================================================="
);

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));

console.log(" ");
console.log(" ");
console.log(" ");

// THIRD QUIZ
function initialObjectGrouping(studentsArr) {
  let result = {};
  for (let i = 0; i < studentsArr.length; i++) {
    let name = studentsArr[i];
    let firstAvbt = name[0].toLowerCase();
    if (!result[firstAvbt]) {
      result[firstAvbt] = [];
    }
    result[firstAvbt].push(name);
  }
  return result;
}
console.log(initialObjectGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
} */

console.log(" ");
console.log(" ");
console.log(" ");

// FOURTH QUIZ
function travelingIndonesia(arr, emoney) {
  let route = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
  let transportCost = {
    Pesawat: 275000,
    Kereta: 250000,
    Bis: 225000,
  };

  let discountVoucer = {
    OVO: 15,
    Dana: 10,
    Gopay: 5,
    Cash: 0,
  };

  if (arr.length < 1) return [];

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let firstArr = arr[i].split("-");
    let person = firstArr[0];
    let from = firstArr[1];
    let to = firstArr[2];
    let transportation = firstArr[3];
    let total = 0;

    for (let j = 0; j < route.length; j++) {
      if (route[j] === from) from = j;
      if (route[j] === to) to = j;
    }

    // hitung jarak (absolut biar bisa bolak-balik)
    let distance = Math.abs(to - from);

    // hitung biaya transport
    total = distance * transportCost[transportation];

    // terapkan diskon sesuai e-money
    let discount = discountVoucer[emoney];
    total = total - (total * discount) / 100;

    result.push({
      name: person,
      from: route[from],
      to: route[to],
      transportation: transportation,
      total: total,
      payment: emoney,
    });
  }

  return result;
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];

console.log(" ");
console.log(" ");
console.log(" ");

// FIFTH QUIZ
function deleteUndefinedKeys(data) {
  if (data.length < 1) return "No Data";
  for (let i = 0; i < data.length; i++) {
    let firstObj = data[i];
    for (let key in firstObj) {
      if (!firstObj[key]) {
        delete firstObj[key];
      }
    }
  }
  return data;
}

console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([{
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data