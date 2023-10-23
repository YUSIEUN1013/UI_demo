// 가상 API에서 데이터 가져오는 함수

// 표 업데이트 함수
function updateTable() {

    var url = 'http://dev3.acloud.run/apitest/test';

    const tableBody = document.querySelector('#table-body');

    tableBody.innerHTML = ""; // 기존 데이터 지우기

    fetch(url, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach((item) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.menu}</td>
                    <td><button onclick="DeleteData(${item.id})">삭제</button></td>
                `;

                tableBody.appendChild(row);

            });
        });

}

function DeleteData(id) {

    userid = id;
    const url = 'http://dev3.acloud.run/apitest/delete/' + userid;

    fetch(url, {
        method: 'DELETE'
    })
        .then(response => {
            if (response.status === 200){
                updateTable();
            }
        })

}

function InsertOrder(){

    const url = 'http://dev3.acloud.run/apitest/posts';

    var dataname = document.getElementById('username').value;
    var datamenu = document.getElementById('ordermenu').value;

    if (dataname == ''){
        alert('이름을 입력해 주시기 바랍니다.');
    } else if (datamenu == ''){
        alert('메뉴를 입력해 주시기 바랍니다.')
    } else {
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
            .then(response => {
                if (response.status === 200){
                    updateTable();
                    document.getElementById('username').value = '';
                    document.getElementById('ordermenu').value = '';
                }
            })
    }

}

const refreshButton = document.getElementById('updatebutton');
refreshButton.addEventListener('click', updateTable);

const insertButton = document.getElementById('insertbutton');
insertButton.addEventListener('click', InsertOrder);



