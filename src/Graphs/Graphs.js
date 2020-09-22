let graph = {};
graph["me"] = ["alice", "bob", "cler"];
graph["bob"] = ["peggi", "arti"];
graph["alice"] = ["peggi"];
graph["cler"] = ["anton", "johny"];

const finalCondition = elem => {
    return elem === 'johny' ? true : false;
}

const deepSearching = obj => {
    let queue = Object.keys(obj);
    let completedElems = [];
    let curElem;

    while (queue.length > 0) {
        curElem = queue.shift();

        if (!completedElems.includes(curElem)) {
            if (finalCondition(curElem)) {
                return console.log("DONE, AND ITS NAME IS", curElem);
            } else {
                completedElems.push(curElem);
                for (let key in obj[curElem]) {
                    queue.push(obj[curElem][key]);
                }
            }
        }
    }
    return false;
}

deepSearching(graph);