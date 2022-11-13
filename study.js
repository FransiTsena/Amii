const obj = [
    {
        "name":"Poland",
        "image":"https://ramboll.com/-/media/images/rnewmarkets/rpl/rpl_new_website/warsaw-cityscape1360x765.jpg",
        "description":"Currently a few thousand Ethiopian students live in Poland however higher education in Poland is getting more and more popular in Ethiopia."
    },
    {
        "name":"America","image":"https://cdn.eventegg.com//images/travel/3/66/new-york-city-cityscape.jpg","description":"It's not hard to see why over a million international students choose to study in America. The USA is globally renowned for its standard of education and degrees earned in the country have an excellent international reputation."
    },
    {
        "name":"Turkey","image":"https://media.istockphoto.com/photos/roads-and-skyscrapers-of-istanbul-at-night-picture-id898074468?k=20&m=898074468&s=612x612&w=0&h=_4MQL31ZoRSDUcRCfaH6DGZaB2pHcF4SJoGuZQj2O5c=","description":"Turkey ranked as the 7th best country in the world for international workers by the expats living in Turkey, apply for a Turkish universities now."
    },
    {
        "name":"Australia","image":"https://www.grayline.com.au/images/Sydney/sydneyandharbour/sydney-opera-house-from-sydney-harbour-1024x768.jpg"
    },{
        "name":"United Kingdom","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/City_of_London%2C_seen_from_Tower_Bridge.jpg/1200px-City_of_London%2C_seen_from_Tower_Bridge.jpg"
    },{
        "name":"China","image":"https://images.chinahighlights.com/allpicture/2019/11/e8315cf6758f4dfc9d632a24_cut_800x500_61.jpg","description":"Apply now and study in China"
    },{
        "name":"Canada","image":"https://ychef.files.bbci.co.uk/976x549/p0b7f62d.jpg","description":"Apply now and study in Canada"
    },{
        "name":"German","image":"https://static.dw.com/image/16965816_303.jpg","description":"Apply now and study in German"
    },{
        "name":"Switzerland","image":"https://a.cdn-hotels.com/gdcs/production179/d1127/52a93d48-b9d4-4a7e-9fb7-c9466da4c344.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    }
    ];

    obj.forEach(element => {
        {
            var b = document.getElementById('wrapStudy');
            var item = `<div class="bordCard"><img src="${element.image}" alt="country" id="bordImage"><div class="sizedBox"></div><center><b>${element.name}</b></center><div class="label_txt"><p id="padLR">${element.description?? ""}</p></div></div>`;
            b.innerHTML += item
        }
    });
    
    