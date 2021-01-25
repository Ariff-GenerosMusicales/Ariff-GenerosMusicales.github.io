import { CtrlAbc } from "../lib/CtrlAbc.js";
import { DaoGenerosMusicales } from "./DaoGenerosMusicales.js";
import { DaoPrivilegios } from "./DaoPrivilegios.js";
import { DaoUsuarios } from "./DaoUsuarios.js";
import { InfoGeneroMusical } from "./InfoGeneroMusical.js";
import { InfoPrivilegio } from "./InfoPrivilegio.js";
import { InfoUsuario } from "./InfoUsuario.js";

export class CtrlUsuarios extends CtrlAbc {
  constructor(mensajeNoEncontrado, daoUsuarios, daoGenerosMusicales,
    daoPrivilegios) {
    super(mensajeNoEncontrado, daoUsuarios);
    this._daoGenerosMusicales = daoGenerosMusicales;
    this._daoPrivilegios = daoPrivilegios;
  }
  foráneas(callbackError, callbackGenerosMusicales, callbackPrivilegios) {
    this._daoPGenerosMusicales.consulta(callbackError, callbackGenerosMusicales);
    this._daoPrivilegios.consulta(callbackError, callbackPrivilegios);
  }
}
