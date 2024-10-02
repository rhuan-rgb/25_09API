let organizadores = [];
let idOrganizador = 1;

module.exports = class organizadorController {
  static async createOrganizador(req, res) {
    const { nome, email, senha, telefone } = req.body;

    if (!nome || !email || !senha || !telefone) {
      res
        .status(400)
        .json({ message: "Todos os campos devem ser preenchidos." });
    } else if (isNaN(telefone) || telefone.length !== 11) {
      return res.status(400).json({
        error: "Telefone inválido. Deve conter exatamente 11 dígitos numéricos",
      });
    } else if (!email.includes("@")) {
      return res.status(400).json({ error: "Email inválido. Deve conter @" });
    }
    
    if (organizadores.find((organizador) => organizador.email === email)) {
      return res.status(400).json({ error: "Organizador já cadastrado." });
    }
    const newOrganizador = {
      id: idOrganizador++,
      nome,
      email,
      senha,
      telefone,
    };
    organizadores.push(newOrganizador);
    return res
      .status(201)
      .json({
        message: "Organizador criado com sucesso",
        organizador: newOrganizador,
      });
  }
  static async updateOrganizador(req, res) {
    const { id, nome, email, senha, telefone } = req.body;

    if (!id || !nome || !email || !senha || !telefone) {
      res
        .status(400)
        .json({ message: "Todos os campos devem ser preenchidos." });
    } else if (isNaN(telefone) || telefone.length !== 11) {
      return res.status(400).json({
        error: "Telefone inválido. Deve conter exatamente 11 dígitos numéricos",
      });
    } else if (!email.includes("@")) {
      return res.status(400).json({ error: "Email inválido. Deve conter @" });
    }
    const organizadorIndex = organizadores.findIndex(
      (organizador) => organizador.id === id
    );
    if (isNaN(id)) {
      return res.status(400).json({
        error: "o id deve ser números",
      });
    }
    //caso não encontre o organizador.
    if (organizadorIndex === -1) {
      return res.status(400).json({ error: "Organizador não encontrado" });
    }

    organizadores[organizadorIndex] = { id, nome, email, senha, telefone };
    res
      .status(200)
      .json({
        message: "Organizador atualizado com sucesso.",
        organizador: organizadores[organizadorIndex],
      });
  }
  static async deleteOrganizador(req, res) {
    const idOrganizador = req.params.id;
    const organizadorIndex = organizadores.findIndex(
      (organizador) => organizador.id == idOrganizador
    );
    if (organizadorIndex === -1) {
      return res.status(400).json({ error: "Organizador não encontrado" });
    }
    organizadores.splice(organizadorIndex);
    res.status(200).json({ message: "Organizador deletado com sucesso." });
  }
  static async getAllOrganizador(req, res) {
    res
      .status(200)
      .json({
        message: "Todos os organizadores à seguir:",
        organizador: organizadores,
      });
  }
};
