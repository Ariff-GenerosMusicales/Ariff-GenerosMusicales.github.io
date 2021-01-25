export class DaoAlmacen {
  constructor(almacen) {
    this._almacen = almacen;
  }
  async sube(nombre, archivo) {
    await this._almacen.ref(nombre).put(archivo);
  }
  async url(nombre) {
    try {
      return await this._almacen.ref(nombre).getDownloadURL();
    } catch (e) {
      console.log(e);
      return "";
    }
  }
  async elimina(nombre) {
    return await this._almacen.ref(nombre).delete();
  }
}
