export default function createHome() {
    let panel = document.createElement("div");
    panel.classList.add("panel");
    panel.classList.add("home");

    let items = ["Best Quality", "Fair Prices", "Huge Selection", "Fast Delivery"];
    let ul = document.createElement("ul");

    for (let i = 0; i < items.length; i++) {
        let el = items[i];
        let li = document.createElement("li");
        li.textContent = el;
        ul.appendChild(li);
    }
    panel.appendChild(ul);

    return panel;
};