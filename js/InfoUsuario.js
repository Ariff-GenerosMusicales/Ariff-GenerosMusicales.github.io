import { valida } from "../lib/util.js";
import { InfoGeneroMusical } from "./InfoGeneroMusical.js";
import { InfoPrivilegio } from "./InfoPrivilegio.js";

export class InfoUsuario {
  constructor({email, avatar, urlDeAvatar, generomusical, privilegios}) {
    this.email = email;
    this.avatar = avatar;
    this.urlDeAvatar = urlDeAvatar;
    this.generomusical = generomusical;
    this.privilegios = privilegios;
  }
  validaAlAgregar() {
    valida(this.email, "Falta proporcionar el email.");
    valida(this.avatar && this.avatar.size > 0,
       "Favor de poner el avatar.");
  }
  validaAlModificar() {
    valida(this.email, "Favor de proporcionar el email.");
  }
}
