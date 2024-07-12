import { shallowMount } from "@vue/test-utils"; // Importa la función shallowMount de @vue/test-utils
import Vuex from "vuex"; // Importa Vuex para gestionar el estado en los tests
import CounterComponent from "@/components/CounterComponent.vue"; // Importa el componente a testear

describe("CounterComponent.vue", () => {
  let store;
  let getters;
  let actions;

  // Se ejecuta antes de cada prueba para configurar el store
  beforeEach(() => {
    getters = {
      counter: () => 0, // Define un getter simulado para el contador
    };

    actions = {
      increment: jest.fn(), // Crea un mock para la acción increment
      decrement: jest.fn(), // Crea un mock para la acción decrement
    };

    store = new Vuex.Store({
      getters,
      actions,
    }); // Crea una instancia de Vuex.Store con los getters y actions definidos
  });

  // Prueba para verificar que se renderiza el valor inicial del contador
  it("renders the initial counter value", () => {
    const wrapper = shallowMount(CounterComponent, {
      global: {
        plugins: [store], // Agrega el store al componente
      },
    });
    expect(wrapper.text()).toContain("Counter: 0"); // Verifica que el texto contenga "Counter: 0"
  });

  // Prueba para verificar que se llama a la acción increment al hacer clic en el botón
  it("calls increment action on button click", async () => {
    const wrapper = shallowMount(CounterComponent, {
      global: {
        plugins: [store], // Agrega el store al componente
      },
    });
    wrapper.find("button").trigger("click"); // Simula un clic en el primer botón
    expect(actions.increment).toHaveBeenCalled(); // Verifica que se haya llamado a la acción increment
  });

  // Prueba para verificar que se llama a la acción decrement al hacer clic en el segundo botón
  it("calls decrement action on second button click", async () => {
    const wrapper = shallowMount(CounterComponent, {
      global: {
        plugins: [store], // Agrega el store al componente
      },
    });
    wrapper.findAll("button").at(1).trigger("click"); // Simula un clic en el segundo botón
    expect(actions.decrement).toHaveBeenCalled(); // Verifica que se haya llamado a la acción decrement
  });
});
