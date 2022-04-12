import ingresaValor from "./TorosVacas"
import codigoescondido from "./codigoescondido.js";
import CompararVaca from "./vaca.js";
describe("Jugador",()=>{
    it("mostrar el valor ingresado",()=>{
        expect(ingresaValor("1234")).toEqual("1234");
    });
    it("mostrar cualquier valor ingresado ",()=>{
        expect(ingresaValor("4321")).toEqual("4321");
    });
    it("mostrar  ",()=>{
        expect(ingresaValor("4321")).toEqual("4321");
    });
    it("Ingresar el codigo de forma escondida", () => {
        expect(codigoescondido("1234")).toEqual("&&&&");
      });
      it("Ingresar el codigo adivina para saber si el dijito uno es vaca", () => {
        expect(CompararVaca("1345","1678")).toEqual('*');
      }); 
});

  