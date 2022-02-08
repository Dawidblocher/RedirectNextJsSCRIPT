

const btn = document.querySelector('#button');

btn.addEventListener('click', function(){
    const dataElement = document.querySelector('#data');
    const data = JSON.parse(dataElement.value)
    let redirects = []
    redirects = data.map(item => ({
        source: item.from.split("https://www.homekoncept.com.pl")[1],
        destination: item.to.split("https://www.homekoncept.com.pl")[1],
        permanent: true,
        statusCode: 301
    }))

    document.querySelector('#result').value = JSON.stringify(redirects)
    console.log(JSON.parse(dataElement.value))
    console.log(JSON.stringify(redirects))
})