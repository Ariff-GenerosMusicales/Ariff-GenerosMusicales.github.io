import { DaoAbc } from "./DaoAbc.js";

export class CtrlAbc {
  constructor(mensajeNoEncontrado, daoAbc) {
    this.mensajeNoEncontrado = mensajeNoEncontrado;
    this.daoAbc = daoAbc;
  }
  consulta(callbackError, callback) {
    this.daoAbc.consulta(callbackError, callback);
  }
  async busca(id) {
    const modelo = await this.daoAbc.busca(id);
    if (modelo) {
      return modelo;
    } else {
      throw new Error(this.mensajeNoEncontrado);
    }
  }
  async agrega(modelo) {
    await this.daoAbc.agrega(modelo);
  }
  async modifica(modelo) {
    await this.daoAbc.modifica(modelo);
  }
  async elimina(id) {
    await this.daoAbc.elimina(id);
  }
}
