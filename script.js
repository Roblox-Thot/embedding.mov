const spans = document.querySelector(".logo.is-animetion").querySelectorAll("span");
const spans2 = document.querySelector("#footer").querySelectorAll("span");

spans.forEach((span, index) => { // Get the title so i can add a delay
    span.style.animationDelay = index * 0.05 + "s";
});

spans2.forEach((span, index) => { // Get the title so i can add a delay
    span.style.animationDelay = index * 0.05 + "s";
});

function fallbackCopyTextToClipboard(text) { // idk stole it
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        alert("Fallback: Copying text command was " + msg);
    } catch (err) {
        prompt("Fallback: Failed to auto copy please copy from below:", text);
    }
    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
    }else{
        navigator.clipboard.writeText(text).then(
            function () {
                alert("Copying to clipboard was successful!");
            },
            function (err) {
                fallbackCopyTextToClipboard(text);
            }
        );
    }
}

function copyLink(){ // Lazy coding
    copyTextToClipboard(links[this.innerText])
}

base = document.location.origin

let links = {// Unsorted list of links to be sorted later
    "Airplane! (1980)": base+"/airplane",
    "Bad Guys (2022)": base+"/badguys",
    "Barbie (2023)": base+"/barbie",
    "Blazing Saddles (1974)": base+"/blazingsaddles",
    "Bruce Almighty (2003)": base+"/bruce",
    "Cats (2019)": base+"/cats",
    "Cocaine Bear (2023)": base+"/cbear",
    "Dictator (2012)": base+"/dictator",
    "Elemental (2023)": base+"/elemental",
    "Elf (2003)": base+"/elf",
    "Equalizer 3 (2023)": base+"/equalizer3",
    "Exorcist: Believer (2023)": base+"/exorcistb",
    "Five Nights at Freddies (2023)": base+"/fnaf",
    "Flash (2023)": base+"/flash",
    "Free Guy (2021)": base+"/freeguy",
    "Halloween Kills (2021)": base+"/halloweenkills",
    "Holes (2003)": base+"/holes",
    "Joker (2019)": base+"/joker",
    "Minions: The Rise of Gru (2022)": base+"/gru",
    "Super Mario Movie (2023)": base+"/mario",
    "Superhero Movie (2008)": base+"/superhero",
    "Top Gun: Maverick (2022)": base+"/tgm",
    "Truman Show (1998)": base+"/truman",
    "Violent Night (2022)": base+"/violentnight",
    "WALL·E (2008)": base+"/walle",
    "Zootopia (2016)": base+"/zootopia",
    /////////////////////////////////////////////////
    "Men in Black (1997)": base+"/blackmen",
    "Men in Black 2 (2002)": base+"/blackmen2",
    "Men in Black 3 (2012)": base+"/blackmen3",
    /////////////////////////////////////////////////
    "SpongeBob SquarePants Movie (2004)": base+"/spongebob",
    "SpongeBob Movie: Sponge Out of Water (2015)": base+"/sbow",
    "SpongeBob Movie: Sponge On The Run (2020)": base+"/sbtr",
    /////////////////////////////////////////////////
    "Guardians of the Galaxy Vol. 3 (2023)": base+"/gotgv3",
    /////////////////////////////////////////////////
    "Spy Kids (2001)": base+"/skids",
    "Spy Kids 2 (2002)": base+"/skids2",
    /////////////////////////////////////////////////
    "Shrek (2001)": base+"/shrek",
    "Shrek 2 (2004)": base+"/shrek2",
    "Shrek the Third (2007)": base+"/shrek3",
    "Shrek Forever After (2010)": base+"/shrek4",
    /////////////////////////////////////////////////
    "Puss in Boots (2011)": base+"/puss",
    "Puss in Boots: The Last Wish (2022)": base+"/pusslw",
    /////////////////////////////////////////////////
    "Lego Movie (2014)": base+"/lego",
    "Lego Movie 2: The Second Part (2019)": base+"/lego2",
    /////////////////////////////////////////////////
    "Inside Out (2015)": base+"/insideout",
    /////////////////////////////////////////////////
    "Scary Movie (2000)": base+"/scary",
    "Scary Movie 2 (2001)": base+"/scary2",
    "Scary Movie 3 (2003)": base+"/scary3",
    "Scary Movie 4 (2006)": base+"/scary4",
    "Scary Movie 5 (2013)": base+"/scary5",
    /////////////////////////////////////////////////
    "Deadpool (2016)": base+"/deadpool",
    "Deadpool 2 (2018)": base+"/deadpool2",
}

// let sortedLinks = Object.fromEntries(Object.entries(links).sort((a, b) => {
//     const yearA = parseInt(a[0].match(/\d{4}/)[0]);
//     const yearB = parseInt(b[0].match(/\d{4}/)[0]);
//     return yearA - yearB;
// }));

// for (key in sortedLinks) {
//     element = document.createElement('th');
//     element.innerText = key;
//     element.onclick = copyLink;
//     trelement = document.createElement('tr');
//     trelement.appendChild(element)
//     document.querySelector("#links").appendChild(trelement);
// }

let sortedLinks = Object.keys(links).sort();

for (key in sortedLinks) {
    title = sortedLinks[key]
    element = document.createElement('th');
    element.innerText = title;
    element.onclick = copyLink;
    trelement = document.createElement('tr');
    trelement.appendChild(element)
    document.querySelector("#links").appendChild(trelement);
}
