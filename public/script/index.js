const selectGrid = document.getElementById('grid');
const container = document.querySelector('.container');
const colors = document.querySelector('.colors');





colors.addEventListener('onchange', (e) => {
    hexName = e.target.value;

})








function createGrid(e) {
    container.innerHTML = ''
    for (let i = 0; i < e.target.value; i++) {
        let div = document.createElement('div');
        div.classList.add('divGrid');
        container.appendChild(div);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red'
        })
    }
}




selectGrid.addEventListener('change', createGrid)