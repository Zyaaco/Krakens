async function getData() {
    const response = await fetch('json/output.json');
    const data = await response.json();
    return data.krakens;
}


async function main() {
    const data = await getData();

    let i = 0;
    for (item of data) {
        const image = document.createElement('img');
        image.src = item;
        image.height = "300";
        const copy = document.createElement('button');
        const link = document.createElement('a');
        link.href = item;
        copy.id = i;
        copy.textContent = "Copy";
        link.textContent = "Link";
        const breakLine = document.createElement('br');
        document.body.append(image, copy, link, breakLine);
        i++;
    }

    for (let i = 0; i < data.length; i++) {
        document.getElementById(i).addEventListener('click', function () {
            navigator.clipboard.writeText(data[i]);
        });
    }
}
main();



