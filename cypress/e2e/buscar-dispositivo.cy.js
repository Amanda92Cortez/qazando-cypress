///<reference types="cypress"/>

describe("Buscar dispositivo", () => {
  it("Buscar dispotivo especifico", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/3",
    }).then((resultado) => {
      // será executado quando o requisição responder
      expect(resultado.status).equal(200);
      expect(resultado.body.id).equal("3");
      expect(resultado.body.id).not.empty;
      expect(resultado.body.name).equal("Apple iPhone 12 Pro Max");
      //console.log('RESULTADO DO FINOTTI: ', resultado.body)
      //console.log('CÓDIGO: ', resultado.status)
    });
  });

  it("Buscar dispotivo inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/as",
      failOnStatusCode: false,
    }).then((resultado) => {
      // será executado quando o requisição responder
      expect(resultado.status).equal(404);
      expect(resultado.body.error).equal("Oject with id=as was not found.");
    });
  });

  var token = ''
  it("Buscar dispotivo inexistente - Token", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/as",
      failOnStatusCode: false,
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((resultado) => {
      // será executado quando o requisição responder
      token = resultado.body.token
    });
  });
});
