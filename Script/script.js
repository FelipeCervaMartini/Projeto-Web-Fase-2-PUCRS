document
  .querySelector("#cadastroCliente")
  .addEventListener("submit", function (event) {
    const selectedService = document.querySelector("#retirada").value;
    let serviceMessage = "";

    //ifs das escolhas de serviço
    if (selectedService === "entrega") {
      serviceMessage = "Você escolheu a opção de tele-entrega!";
    } else if (selectedService === "retirada") {
      serviceMessage = "Você escolheu a opção de retirada no local!";
    }

    // Mostra a mensagem do serviço selecionado
    alert(serviceMessage);

    // Mensagem de sucesso
    alert("Cadastro realizado com sucesso!");
  });
