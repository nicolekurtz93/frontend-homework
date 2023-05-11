
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Nav'

const Search = (props) => {
    const {thorneData} = props;

    const handleChange = (event) => {
        let resultDiv = document.getElementById('searchResult');
        resultDiv.innerHTML = ''
        if (event.target.value === '') {
            return;
        }
        console.log(event.target.value)
        const result = thorneData.filter((item) => {
            return item.fullName.toLowerCase().includes(event.target.value.toLowerCase())
        })
        if (result.length === 0) {
            let message = document.createElement('p');
            message.textContent = `There were no results for search: ${event.target.value}. Please try another search`
            resultDiv.appendChild(message);
            return;
        }
        result.forEach(element => {
            let div = document.createElement('div');
            let photo = document.createElement('img');
            let title = document.createElement('p');
            photo.src = element.imageUrl;
            photo.alt = `Headshot of ${element.fullName}`;
            photo.className = 'mb-2';
            photo.style.width = '200px';
            photo.style.height = '200px';
            photo.style.objectFit = 'cover';
            title.textContent = element.fullName;
            resultDiv.appendChild(div).appendChild(photo)
            div.appendChild(title)
        });
    }
    return (
        <><div className='h-100 flex justify-content-center'>
            <div className="row w-100">
                <h1 className='text-center p-4 w-100'>
                    Character Search
                </h1>
            </div>
            <div className="justify-content-center d-flex">
                <label for='characterToSearch' className='p-2'>Type the name of a Game of Thrones Character: </label>
                <input type="text" id='characterToSearch' name='characterToSearch' className="form-control w-50 align-center" onChange={handleChange} />
            </div>
            <div id='searchResult' />
        </div></>
    );
};

export default Search;