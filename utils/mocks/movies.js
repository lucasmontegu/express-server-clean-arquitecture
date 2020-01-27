const moviesMock = [
    {
        "id": "101e1599-7e6c-454d-8bf4-5de07fa3146a",
        "title": "Magnolia",
        "year": 2007,
        "cover": "http://dummyimage.com/126x166.bmp/5fa2dd/ffffff",
        "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "duration": 1979,
        "contentRating": "G",
        "source": "http://dedecms.com/vitae/quam/suspendisse/potenti/nullam/porttitor.png?imperdiet=suscipit&nullam=nulla&orci=elit&pede=ac",
        "tags": [
            "Crime|Drama|Thriller",
            "Crime|Drama|Mystery|Thriller",
            "Action|Adventure|Children"
        ]
    },
    {
        "id": "55936f16-3240-4b19-8672-14ec5c7ac782",
        "title": "Dreamworld",
        "year": 2010,
        "cover": "http://dummyimage.com/238x121.jpg/dddddd/000000",
        "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "duration": 2027,
        "contentRating": "G",
        "source": "http://forbes.com/praesent/id/massa/id.js?suscipit=lacinia&nulla=eget&elit=tincidunt&ac=eget&nulla=tempus&sed=vel&vel=pede&enim=morbi&sit=porttitor&amet=lorem&nunc=id&viverra=ligula&dapibus=suspendisse&nulla=ornare&suscipit=consequat&ligula=lectus&in=in&lacus=est&curabitur=risus&at=auctor&ipsum=sed&ac=tristique&tellus=in&semper=tempus&interdum=sit&mauris=amet&ullamcorper=sem&purus=fusce&sit=consequat&amet=nulla&nulla=nisl&quisque=nunc&arcu=nisl&libero=duis&rutrum=bibendum&ac=felis&lobortis=sed&vel=interdum&dapibus=venenatis&at=turpis&diam=enim&nam=blandit&tristique=mi&tortor=in",
        "tags": [
            "(no genres listed)",
            "Action|Crime|Thriller",
            "Action|Sci-Fi|Thriller",
            "Adventure|Crime|Documentary|Drama",
            "Horror|Thriller"
        ]
    },
    {
        "id": "bfb36e10-470a-45e2-987d-e777ea5506d7",
        "title": "Wetlands (Feuchtgebiete)",
        "year": 2008,
        "cover": "http://dummyimage.com/155x202.bmp/ff4444/ffffff",
        "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "duration": 1910,
        "contentRating": "NC-17",
        "source": "https://bluehost.com/et/eros/vestibulum/ac/est/lacinia.jpg?commodo=nulla",
        "tags": [
            "Comedy|Drama",
            "Drama|Romance",
            "Children|Comedy",
            "Drama",
            "Sci-Fi|Thriller"
        ]
    },
    {
        "id": "3fdc8220-81cf-485f-80da-e3231dddbd6f",
        "title": "Tyson",
        "year": 1999,
        "cover": "http://dummyimage.com/229x201.png/5fa2dd/ffffff",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
        "duration": 1981,
        "contentRating": "G",
        "source": "http://timesonline.co.uk/morbi/ut/odio/cras/mi.aspx?vitae=turpis&quam=a&suspendisse=pede&potenti=posuere&nullam=nonummy&porttitor=integer&lacus=non&at=velit&turpis=donec&donec=diam&posuere=neque&metus=vestibulum&vitae=eget&ipsum=vulputate&aliquam=ut&non=ultrices&mauris=vel&morbi=augue&non=vestibulum&lectus=ante&aliquam=ipsum&sit=primis&amet=in&diam=faucibus&in=orci&magna=luctus&bibendum=et&imperdiet=ultrices&nullam=posuere&orci=cubilia&pede=curae&venenatis=donec&non=pharetra&sodales=magna&sed=vestibulum&tincidunt=aliquet&eu=ultrices&felis=erat&fusce=tortor&posuere=sollicitudin&felis=mi&sed=sit&lacus=amet&morbi=lobortis&sem=sapien&mauris=sapien",
        "tags": [
            "Drama|Film-Noir|Thriller",
            "Comedy|Drama|Romance",
            "Drama|Horror|Mystery"
        ]
    },
    {
        "id": "7ba321de-20e3-4069-b79c-768e0e8aba9c",
        "title": "Maternal Halfbrothers (Braca po materi)",
        "year": 1998,
        "cover": "http://dummyimage.com/217x206.png/ff4444/ffffff",
        "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "duration": 1993,
        "contentRating": "PG",
        "source": "https://cdc.gov/nunc/proin.xml?in=maecenas&hac=pulvinar&habitasse=lobortis&platea=est&dictumst=phasellus&maecenas=sit&ut=amet&massa=erat&quis=nulla&augue=tempus&luctus=vivamus&tincidunt=in&nulla=felis&mollis=eu&molestie=sapien&lorem=cursus&quisque=vestibulum&ut=proin&erat=eu&curabitur=mi&gravida=nulla&nisi=ac&at=enim&nibh=in&in=tempor&hac=turpis&habitasse=nec&platea=euismod&dictumst=scelerisque&aliquam=quam&augue=turpis&quam=adipiscing&sollicitudin=lorem&vitae=vitae&consectetuer=mattis&eget=nibh&rutrum=ligula&at=nec&lorem=sem&integer=duis&tincidunt=aliquam&ante=convallis&vel=nunc&ipsum=proin&praesent=at",
        "tags": [
            "Children|Fantasy|Sci-Fi",
            "Comedy"
        ]
    },
    {
        "id": "611ef7de-8e59-4814-bbed-0bbaecba9abc",
        "title": "Neon Genesis Evangelion: The End of Evangelion (Shin seiki Evangelion Gekijô-ban: Air/Magokoro wo, kimi ni)",
        "year": 2007,
        "cover": "http://dummyimage.com/239x162.png/5fa2dd/ffffff",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "duration": 1973,
        "contentRating": "PG",
        "source": "https://mit.edu/metus/aenean/fermentum/donec/ut/mauris.js?enim=lectus&leo=in&rhoncus=quam&sed=fringilla&vestibulum=rhoncus&sit=mauris&amet=enim&cursus=leo&id=rhoncus&turpis=sed&integer=vestibulum&aliquet=sit&massa=amet&id=cursus&lobortis=id&convallis=turpis&tortor=integer&risus=aliquet&dapibus=massa&augue=id&vel=lobortis&accumsan=convallis&tellus=tortor&nisi=risus&eu=dapibus&orci=augue&mauris=vel&lacinia=accumsan&sapien=tellus&quis=nisi&libero=eu&nullam=orci&sit=mauris&amet=lacinia&turpis=sapien&elementum=quis&ligula=libero&vehicula=nullam&consequat=sit&morbi=amet&a=turpis&ipsum=elementum&integer=ligula&a=vehicula&nibh=consequat&in=morbi&quis=a&justo=ipsum&maecenas=integer&rhoncus=a&aliquam=nibh&lacus=in&morbi=quis&quis=justo&tortor=maecenas&id=rhoncus&nulla=aliquam&ultrices=lacus&aliquet=morbi&maecenas=quis&leo=tortor&odio=id&condimentum=nulla&id=ultrices&luctus=aliquet&nec=maecenas&molestie=leo&sed=odio&justo=condimentum&pellentesque=id&viverra=luctus",
        "tags": [
            "Comedy|Drama|Romance",
            "Drama|War",
            "Horror|Thriller"
        ]
    },
    {
        "id": "efc6d571-7fe9-4b2c-8474-631507ca40de",
        "title": "Dead Rising: Watchtower",
        "year": 2009,
        "cover": "http://dummyimage.com/241x149.png/ff4444/ffffff",
        "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "duration": 1983,
        "contentRating": "G",
        "source": "https://ask.com/libero/nam/dui/proin/leo/odio.jsp?dictumst=sit&etiam=amet&faucibus=sapien&cursus=dignissim&urna=vestibulum&ut=vestibulum&tellus=ante&nulla=ipsum&ut=primis&erat=in&id=faucibus&mauris=orci&vulputate=luctus&elementum=et&nullam=ultrices&varius=posuere&nulla=cubilia&facilisi=curae&cras=nulla&non=dapibus&velit=dolor&nec=vel&nisi=est&vulputate=donec&nonummy=odio&maecenas=justo&tincidunt=sollicitudin&lacus=ut&at=suscipit&velit=a&vivamus=feugiat&vel=et&nulla=eros&eget=vestibulum&eros=ac&elementum=est&pellentesque=lacinia&quisque=nisi&porta=venenatis&volutpat=tristique&erat=fusce&quisque=congue&erat=diam&eros=id&viverra=ornare&eget=imperdiet&congue=sapien&eget=urna&semper=pretium&rutrum=nisl&nulla=ut&nunc=volutpat&purus=sapien&phasellus=arcu&in=sed&felis=augue&donec=aliquam&semper=erat&sapien=volutpat&a=in&libero=congue",
        "tags": [
            "Adventure",
            "Drama"
        ]
    },
    {
        "id": "7bf94d97-f4e1-4553-9443-d849a3950898",
        "title": "Salting the Battlefield",
        "year": 1988,
        "cover": "http://dummyimage.com/208x144.bmp/cc0000/ffffff",
        "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
        "duration": 1953,
        "contentRating": "PG",
        "source": "http://freewebs.com/dapibus/augue/vel/accumsan/tellus/nisi.aspx?luctus=cubilia&rutrum=curae&nulla=mauris&tellus=viverra&in=diam&sagittis=vitae&dui=quam&vel=suspendisse&nisl=potenti&duis=nullam&ac=porttitor&nibh=lacus&fusce=at&lacus=turpis&purus=donec&aliquet=posuere&at=metus&feugiat=vitae&non=ipsum&pretium=aliquam&quis=non&lectus=mauris&suspendisse=morbi&potenti=non&in=lectus&eleifend=aliquam&quam=sit&a=amet&odio=diam&in=in&hac=magna&habitasse=bibendum&platea=imperdiet&dictumst=nullam&maecenas=orci&ut=pede&massa=venenatis&quis=non&augue=sodales&luctus=sed&tincidunt=tincidunt&nulla=eu&mollis=felis",
        "tags": [
            "Drama"
        ]
    },
    {
        "id": "f1805454-faa9-4e92-aba2-5ec2d1e74590",
        "title": "Ugly Truth, The",
        "year": 2008,
        "cover": "http://dummyimage.com/113x162.bmp/ff4444/ffffff",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "duration": 2021,
        "contentRating": "PG",
        "source": "https://godaddy.com/suspendisse/potenti/cras/in.js?magna=nec&vestibulum=molestie&aliquet=sed&ultrices=justo&erat=pellentesque&tortor=viverra&sollicitudin=pede&mi=ac&sit=diam&amet=cras&lobortis=pellentesque&sapien=volutpat&sapien=dui&non=maecenas&mi=tristique&integer=est&ac=et&neque=tempus&duis=semper&bibendum=est&morbi=quam&non=pharetra&quam=magna&nec=ac&dui=consequat&luctus=metus&rutrum=sapien&nulla=ut&tellus=nunc&in=vestibulum&sagittis=ante&dui=ipsum&vel=primis&nisl=in&duis=faucibus&ac=orci&nibh=luctus&fusce=et&lacus=ultrices&purus=posuere&aliquet=cubilia&at=curae&feugiat=mauris&non=viverra&pretium=diam&quis=vitae&lectus=quam&suspendisse=suspendisse&potenti=potenti&in=nullam&eleifend=porttitor&quam=lacus&a=at&odio=turpis&in=donec&hac=posuere&habitasse=metus&platea=vitae&dictumst=ipsum&maecenas=aliquam&ut=non&massa=mauris&quis=morbi&augue=non&luctus=lectus&tincidunt=aliquam&nulla=sit&mollis=amet&molestie=diam&lorem=in&quisque=magna&ut=bibendum&erat=imperdiet&curabitur=nullam&gravida=orci&nisi=pede&at=venenatis&nibh=non&in=sodales&hac=sed&habitasse=tincidunt&platea=eu&dictumst=felis&aliquam=fusce&augue=posuere&quam=felis&sollicitudin=sed&vitae=lacus&consectetuer=morbi&eget=sem",
        "tags": [
            "Horror|Thriller",
            "Comedy|Romance"
        ]
    },
    {
        "id": "24e0bfdd-8353-405b-96f5-bc99d06de61d",
        "title": "If Footmen Tire You What Will Horses Do?",
        "year": 1992,
        "cover": "http://dummyimage.com/140x198.jpg/ff4444/ffffff",
        "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
        "duration": 2000,
        "contentRating": "R",
        "source": "http://dagondesign.com/cras/mi/pede/malesuada.html?non=integer&sodales=tincidunt&sed=ante&tincidunt=vel&eu=ipsum&felis=praesent&fusce=blandit&posuere=lacinia&felis=erat&sed=vestibulum&lacus=sed&morbi=magna&sem=at&mauris=nunc&laoreet=commodo&ut=placerat&rhoncus=praesent&aliquet=blandit&pulvinar=nam&sed=nulla&nisl=integer&nunc=pede&rhoncus=justo&dui=lacinia&vel=eget&sem=tincidunt&sed=eget&sagittis=tempus&nam=vel&congue=pede&risus=morbi&semper=porttitor&porta=lorem&volutpat=id&quam=ligula&pede=suspendisse&lobortis=ornare&ligula=consequat&sit=lectus&amet=in&eleifend=est&pede=risus&libero=auctor&quis=sed&orci=tristique&nullam=in&molestie=tempus&nibh=sit&in=amet&lectus=sem&pellentesque=fusce&at=consequat&nulla=nulla&suspendisse=nisl&potenti=nunc&cras=nisl&in=duis&purus=bibendum&eu=felis&magna=sed&vulputate=interdum&luctus=venenatis&cum=turpis&sociis=enim&natoque=blandit&penatibus=mi&et=in&magnis=porttitor&dis=pede&parturient=justo&montes=eu&nascetur=massa",
        "tags": [
            "Horror|Thriller",
            "Drama",
            "Drama|Sci-Fi|Thriller",
            "Thriller",
            "Drama"
        ]
    }
]

module.exports = {
    moviesMock
}