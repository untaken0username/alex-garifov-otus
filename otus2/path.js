function getPath(target) {
    let a = target;
    let selector = [];
    let index = Array.prototype.indexOf.call(a.parentElement.children, a);
    let tag = a.tagName;
    selector.push({
        index: index,
        tag: tag
    });
    while (a) {
        a = a.parentElement;
        if (a) {
            if (a.parentElement) {
                let index = Array.prototype.indexOf.call(a.parentElement.children, a);
                let tag = a.tagName;
                selector.push({
                    index: index,
                    tag: tag
                });
            }
        }
    }
    let result = "";
    selector.reverse();
    selector.forEach(element => {
        result += element["tag"].toLowerCase()
        result += ":nth-child(" + (element['index'] + 1) + ") "
    });
    console.log(result);
    document.querySelector(result).style.color = "#f4e"
}