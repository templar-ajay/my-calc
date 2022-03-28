class fourEl extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
                <td id = "C" onclick="allClear()">C</td>
                <td id = "delete-btn" onclick="del()"><i class="fa-solid fa-delete-left"></i></td>
                <td onclick="send('%')">&percnt;</td>
                <td onclick="send('/')"><i class="fa-solid fa-divide"></i></td>
        `
    }
}
customElements.define('four-el',fourEl)

class threeEl  extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
                <td id = "C" colspan = 2 onclick="allClear()">C</td>
                <td id = "delete-btn" hidden onclick="del()"><i class="fa-solid fa-delete-left"></i></td>
                <td onclick="send('%')">&percnt;</td>
                <td onclick="send('/')"><i class="fa-solid fa-divide"></i></td>
        `
    }
}
customElements.define('three-el',threeEl)

class threeElWel  extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
                <td id = "C" colspan = 2 onclick="allClear()">Let's Start</td>
                <td id = "delete-btn" hidden onclick="del()"><i class="fa-solid fa-delete-left"></i></td>
                <td onclick="send('%')">&percnt;</td>
                <td onclick="send('/')"><i class="fa-solid fa-divide"></i></td>
        `
    }
}
customElements.define('three-el-wel',threeElWel)