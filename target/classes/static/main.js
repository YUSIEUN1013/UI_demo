function updateTable(){

    const url = 'http://localhost:8080/test';

    const tableBody = document.querySelector('#table-body');

    while (tableBody.firstChild){
        tableBody.removeChild(tableBody.firstChild);
    }

    fetch(url, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach((item) => {
                const row = document.createElement('tr');
                const namecell = document.createElement('td');
                const menucell = document.createElement('td');
                const deletecell = document.createElement('td');

                namecell.textContent = item.name;
                menucell.textContent = item.menu;
                deletecell.

                row.appendChild(namecell);
                row.appendChild(menucell);

                tableBody.appendChild(row);

            });
        });

}

function InsertOrder(){

    const url = 'http://localhost:8080/posts';

    const dataname = document.getElementById('username').value;
    const datamenu = document.getElementById('ordermenu').value;

    const postData = {
        name: dataname,
        menu: datamenu
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })

}

const refreshButton = document.getElementById('updatebutton');
refreshButton.addEventListener('click', updateTable);

const insertButton = document.getElementById('insertbutton');
insertButton.addEventListener('click', InsertOrder);