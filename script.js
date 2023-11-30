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
    "FNAF ASMR (2023)": base+"/example",
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
