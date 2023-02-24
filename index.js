//NO.1
function instagramPost(authorsHandle, content, imageLink, views, likes){
    this.author = authorsHandle;
    this.content = content;
    this.image = imageLink;
    this.views = views;
    this.likes = likes
}


//NO.2
const post1 = new instagramPost('@Decency_Jossy', 'This is a must know for everyone', 'https://decencyjossy.jpeg', '1.1k views', '209 likes');

const post2 = new instagramPost('@alx_africa', 'alx_africa Founded in Silicon Valley and built for Africa', 'https://alx-africa.jpeg', '1k views', '1004 likes');

//console.log({post1});
//console.log({post2});


//NO.3A
function createPerson(firstName, lastName, age, location){
   return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    location: location,
}
   }

   const musaDawodu = createPerson('Musa', 'Dawodu', 19, 'Lekki, Lagos State');
   //console.log(musaDawodu);


   
//NO.3B
function createJambScores(Eng, Govt, Lit, Crk){
    return{
        ENG: Eng,
        GOVT: Govt,
        LIT: Lit,
        CRK: Crk,
    }
} 
const musaJambScores = createJambScores(70, 85, 82, 94);
//console.log(musaJambScores);

musaDawodu.jambScores = musaJambScores; 
//console.log(musaDawodu);


//NO.4
//ways to clone an object are listed below:
//My examples will be drawn from the foregoing objects created above.

//1. object.assign() method. Example: 
const student1 = Object.assign({}, musaDawodu);
    //console.log(student1);

//2. Spread method. Example:
const post1JambScores =  {...post1, ...{ jambScores: musaDawodu.jambScores}};
//console.log(post1JambScores)

//3. JSON.parse(JSON.stringify()). Example:
const post3 = JSON.parse(JSON.stringify(post1));
post3.author = '@misey_ly'
//console.log(post3)


//NO.5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

 
//  for (const i in presidentialCandidates) {
//    console.log(presidentialCandidates.AAC + " " + 'is the presidential candidate of ACC');
 
//    console.log(presidentialCandidates.ACCORD + " " + 'is the presidential candidate of ACCORD');
   
//    console.log(presidentialCandidates.APC + " " + 'is the presidential candidate of APC');
   
//    console.log(presidentialCandidates.LP + " " + 'is the presidential candidate of LP');
   
//    console.log(presidentialCandidates.NNPP + " " + 'is the presidential candidate of NNPP');
   
//    console.log(presidentialCandidates.PDP + " " + 'is the presidential candidate of PDP');
//     break;
   
//  }