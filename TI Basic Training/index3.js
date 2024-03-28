var txt = "Greetings, universe! Abhishek's text. Greetings once more";
var words = "abhishek,universe,once,abhisheks,absent";

function count(w, t) {
    t = t.toLowerCase();
    var wArr = w.split(',');
    var cts = {};

    for (var i = 0; i < wArr.length; i++) {
        var word = wArr[i].toLowerCase();
        var ct = 0;
        var pos = t.indexOf(word);
        while (pos !== -1) {
            ct++;
            pos = t.indexOf(word, pos + 1);
        }
        cts[word] = ct;
    }
    return cts;
}

function foo() {
    try {
        if (txt.trim().length === 0) {
            throw new Error("Empty text.");
        }
        var res = count(words, txt);
        console.log("Counts:", res);
    } catch (e) {
        console.error("Error:", e.message);
    }
}

foo();
