import { CtrlAbc } from "../lib/CtrlAbc.js";
import { CtrlSesión } from "./CtrlSesion.js";
import { CtrlUsuarios } from "./CtrlUsuarios.js";
import { DaoGenerosMusicales } from "./DaoGenerosMusicales.js";
import { DaoPrivilegios } from "./DaoPrivilegios.js";
import { DaoStorage } from "./DaoStorage.js";
import { DaoUsuarios } from "./DaoUsuarios.js";
import { ForáneasDeUsuarios } from "./ForaneasDeUsuarios.js";

export class Factory {
  constructor() {
    const firestore = firebase.firestore();
    const storage = firebase.storage();
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    this.daoStorage = new DaoStorage(storage);
    this.daoGenerosMusicales = new DaoGenerosMusicales(firestore);
    this.daoPrivilegios = new DaoPrivilegios(firestore);
    this.daoUsuarios = new DaoUsuarios(firestore, this.daoGenerosMusicales,
    this.daoPrivilegios, this.daoAlmacen);
    this.ctrlSesión = new CtrlSesión(auth, provider, this.daoUsuarios);
    this.ctrlGenerosMusicales =
      new CtrlAbc("Genero Musical no encontrado.", this.daoGenerosMusicales);
    this.ctrlUsuarios = new CtrlUsuarios("Genero Musical no encontrado.",
      this.daoUsuarios, this.daoPasatiempos, this.daoPrivilegios);
    this.foráneasDeUsuarios = new ForáneasDeUsuarios();
  }
}
Fábrica.instancia = Object.freeze(new Factory());
