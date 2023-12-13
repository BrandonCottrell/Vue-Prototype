
    // HgXTzfO9HyuHLBh1nv6zrw==vbh1bP0fUlSsljEB

    // var name = prompt("What would you like to look up?")
    // var searchTerm = document.getElementById('#locationSearch')
    // var searchTerm = prompt("What would you like to look up?")


    function getLocation() {
        result.innerHTML = '';
        var searchTerm = document.getElementById('locationSearch').value
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/city?limit=10&name=' + searchTerm,
        headers: { 'X-Api-Key': 'HgXTzfO9HyuHLBh1nv6zrw==vbh1bP0fUlSsljEB' },
        contentType: 'application/json',
        limit: 10,
        success: function (result) {
            console.log(result);
            result.forEach(result => {
                $('#result').append(`<h4>City: <h6>${result.name}<h6> </h4>`);
                $('#result').append(`<h4>Country: <h6>${result.country}<h6> </h4>`);
                $('#result').append(`<h4>Population: <h6>${result.population}<h6> </h4>`);
                $('#result').append(`<hr>`);
            })
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
    }


