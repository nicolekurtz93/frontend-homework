
import axios from 'axios';
export async function fetchData(){
    const url = 'https://thronesapi.com/api/v2/Characters';
    return axios.get(url)
        .then( (data) =>
            cleanGotData(data.data)
        )
        .catch(function(error) {
            const result = document.getElementById('result')
            result.textContent = 'Failed to load throne data. Try again later.';
            result.className = 'text-danger'
            result.style.textAlign = 'center'
        })
        .finally(function () {
            let loading = document.getElementById("loading");
            if (loading !== null)
                loading.remove();
        })
}

const cleanGotData = (data) => {
    data.forEach((element) => {
        if (element.lastName === 'Targaryan') {
            element.lastName = 'Targaryen'
        }
    })
    return data;
}