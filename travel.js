const obj = [
    {
        "name": "Dubai",
        "description": "Make The Most Of Exciting, Unmissable Experiences In Abu Dhabi. Plan Your Perfect Day Now! Take A Trip To Abu Dhabi & Discover Amazing Events & Attractions With Abu Dhabi Calendar.",
        "subTitle": "Travel to Dubai with visiting visa",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/ff/2a/caption.jpg?w=700&h=500&s=1&cx=7014&cy=3760&chk=v1_14690e40614ca9b48b73"
    }, {
        "name": "Spain", 
        "image": "https://www.state.gov/wp-content/uploads/2018/11/Spain-2109x1406.jpg",
         "description": "Spain is a beloved country and a chosen destination for plenty of expats, especially those from the UK. We can\'t really blame them! The weather, the seaside, the relaxed way of living,... who wouldn\'t want to come to Spain? Millions of tourists visit Spain every single month, but if you still haven\'t added this beautiful country to your bucket list. Then you should do it now",
        "subTitle": "Travel to Spain with visiting visa"
    },{
        "name":"Portugal",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclgGVT0u8_4cz8_2rnKIKgAzrtO2kXxnHHYf0vKmKnTii0b0drJnCbExHBp026MqIimY&usqp=CAU",
        "description":"Portugal is a country where you can spend the morning surfing awesome waves and the afternoon skiing down snowy slopes? Plus, it is a place that is home to hundreds of award-winning wines.\nWith centuries-old cities and castles, Portugal is a country where you can hike up a 7,000ft tall peak and where you can taste one of the world\u2019s best kept culinary secrets?",
        "subTitle":"Travel to Portugal with visiting visa"
    },{
        "name":"Slovenia",
        "image":"https://www.happy.rentals/admin/uploads/6094f683c159btown-big.jpg",
        "description":"Slovenia is home to friendly people, beautiful nature, delicious food, and has a rich history and culture. It is a great destination for a quick days trip or a week-long relaxing getaway.",
        "subTitle":"Travel to Slovenia with visiting visa"
    }

];

obj.forEach(element => {
    {
        var b = document.getElementById('wrapStudy');
        var item = `<div class="bordCard"><img src="${element.image}" alt="country" id="bordImage"><div class="sizedBox"></div><center><b>${element.name}</b></center><center><div class="label_txt"><i>${element.subTitle}</i></div></center><div class="regular_txt"><p id="padLR">${element.description.substring(0, 170) ?? ""}${element.description.length > 170 ? "..." : ""}</p></div></div>`;
        b.innerHTML += item
    }
});

