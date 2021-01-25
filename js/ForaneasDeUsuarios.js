import { cod } from "../lib/util.js";
import { InfoGeneroMusical } from "./InfoGeneroMusical.js";
import { InfoPrivilegio } from "./InfoPrivilegio.js";

const SIN_GENEROMUSICAL = 
  `<option value="">-- Sin GeneroMusical --</option>`;

export class ForáneasDeUsuarios {
  renderPrivilegio(privilegio) {
    return (
      `<em>${cod(privilegio.nombre)}</em><br>
      ${cod(privilegio.descripción)}`);
  }
  muestraGenerosMusicales(select, valor, generosmusicales) {
    select.innerHTML = SIN_GENEROMUSICAL +
      generosmusicales.map(p => {
        const selected = p.id === valor ? "selected" : "";
        return (/* html */
          `<option value="${cod(p.id)}" ${selected}>${cod(p.nombre)}</option>`);
      }).join("");
  }
  muestraPrivilegios(elemento, valor, privilegios) {
    const set = new Set(valor || []);
    elemento.innerHTML = privilegios.map(p => {
      const checked = set.has(p.nombre) ? "checked" : "";
      return (
        `<li>
          <label>
            <input type="checkbox" name="privilegios"
                value="${cod(p.nombre)}" ${checked}>
            <span>${this.renderPrivilegio(p)}</span>
          </label>
        </li>`)
    }).join("");
  }
}
