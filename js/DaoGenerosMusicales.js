import { DaoAbc } from "../lib/DaoAbc.js";
import { paraTodos, trims } from "../lib/util.js";
import { InfoGeneroMusical } from "./InfoGeneroMusical.js";

export class DaoGenerosMusicales {
  constructor(firestore) {
    this._colección = firestore.collection("GENEROMUSICAL");
  }
  _cargaGeneroMusical(doc) {
    if (doc.exists) {
      const data = doc.data();
      return new InfoGeneroMusical({
        id: doc.id,
        nombre: data.GEN_NOMBRE
      });
    } else {
      return null;
    }
  }

  consulta(callbackError, callback) {
    this._colección.orderBy("GEN_NOMBRE").onSnapshot(
      querySnapshot => callback(
        paraTodos(querySnapshot, doc => this._cargaGeneroMusical(doc))),
      error => {
        callbackError(error);
        this.consulta(callbackError, callback);
      }
    );
  }
  async busca(id) {
    let doc = id ? await this._colección.doc(id).get() : { exists: false };
    return this._cargaGeneroMusical(doc);
  }
  async agrega(modelo) {
    modelo.valida();
    await this._colección.add({
      GEN_NOMBRE: trims(modelo.nombre)
    });
  }
  async modifica(modelo) {
    modelo.valida();
    await this._colección.doc(modelo.id).set({
      GEN_NOMBRE: trims(modelo.nombre)
    });
  }
  async elimina(id) {
    await this._colección.doc(id).delete();
  }
}
