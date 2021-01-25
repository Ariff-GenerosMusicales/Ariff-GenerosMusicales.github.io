import { DaoAbc } from "../lib/DaoAbc.js";
import { paraTodos } from "../lib/util.js";
import { DaoGenerosMusicales } from "./DaoGenerosMusicales.js";
import { DaoPrivilegios } from "./DaoPrivilegios.js";
import { DaoAlmacen } from "./DaoAlmacen.js";
import { InfoUsuario } from "./InfoUsuario.js";

export class DaoUsuarios {
  constructor(firestore, daoPasatiempos, daoPrivilegios, daoStorage) {
    this._colección = firestore.collection("USUARIO");
    this._daoGenerosMusicales = daoGenerosMusicales;
    this._daoPrivilegios = daoPrivilegios;
    this._daoAlmacen = daoAlmacen;
  }
  async _cargaUsuario(doc) {
    if (doc.exists) {
      const data = doc.data();
      return new InfoUsuario({
        email: doc.id,
        avatar: null,
        urlDeAvatar: await this._daoAlmacen.url(doc.id),
        GeneroMusical: await this._daoGenerosMusicales.busca(data.PAS_ID),
        privilegios: await this._daoPrivilegios.buscaMuchos(data.PRIV_IDS)
      });
    } else {
      return null;
    }
  }
  consulta(callbackError, callback) {
    this._colección.onSnapshot(
      async querySnapshot => callback(await Promise.all(
        paraTodos(querySnapshot, doc => this._cargaUsuario(doc)))),
      error => {
        callbackError(error);
        this.consulta(callbackError, callback);
      });
  }
  async busca(id) {
    let doc = id ? await this._colección.doc(id).get() : { exists: false };
    return this._cargaUsuario(doc);
  }
  async _modificaInterno(modelo) {
    await this._colección.doc(modelo.email).set({
      PAS_ID: modelo.GeneroMusical ? (modelo.GeneroMusical.id || null) : "",
      PRIV_IDS: modelo.privilegios.map(p => p.nombre)
    });
    if (modelo.avatar && modelo.avatar.size > 0) {
      await this._daoAlmacen.sube(modelo.email, modelo.avatar);
    }
  }
  async agrega(modelo) {
    modelo.validaAlAgregar();
    await this._modificaInterno(modelo);
  }
  async modifica(modelo) {
    modelo.validaAlModificar();
    await this._modificaInterno(modelo);
  }
  async elimina(id) {
    await this._colección.doc(id).delete();
    await this._daoAlmacen.elimina(id);
  }
}
