export const selectCredenciales = state => {
    const { credenciales } = state;
    return credenciales;
}
export const selectLogeado = state => {
    const { logged } = state;
    return logged;
}