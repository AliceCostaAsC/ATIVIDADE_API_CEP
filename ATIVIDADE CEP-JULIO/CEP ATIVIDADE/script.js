function buscar() {
    const CEP = document.querySelector("#cep")

    const showData = (result) => {
        for (const campo in result) {
            document.getElementById("logradouro").value = result.logradouro
            document.getElementById("complemento").value = result.complemento
            document.getElementById("bairro").value = result.bairro
            document.getElementById("localidade").value = result.localidade
            document.getElementById("uf").value = result.uf
            document.getElementById("ibge").value = result.ibge
            document.getElementById("gia").value = result.gia
            document.getElementById("ddd").value = result.ddd
            document.getElementById("siafi").value = result.siafi

        }
    }

    let search = document.getElementById("cep").value

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => response.json())
        .then(data => showData(data))

    .catch(e => console.log('Houve um erro'))
}