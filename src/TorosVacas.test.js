import ingresaValor from "./TorosVacas"
describe("Jugador",()=>{
    it("mostrar el valor ingresado",()=>{
        expect(ingresaValor("1234")).toEqual("1234");
    });
    it("mostrar cualquier valor ingresado ",()=>{
        expect(ingresaValor("4321")).toEqual("4321");
    });
});