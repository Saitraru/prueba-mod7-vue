import { shallowMount } from "@vue/test-utils"; // Importa la función shallowMount de @vue/test-utils
import HomeView from "@/views/HomeView.vue"; // Importa el componente HomeView
import AboutView from "@/views/AboutView.vue"; // Importa el componente AboutView

describe("Router Views", () => {
  // Prueba para verificar que el componente HomeView existe
  it("HomeView should exist", () => {
    const wrapper = shallowMount(HomeView); // Monta el componente HomeView
    expect(wrapper.exists()).toBe(true); // Verifica que el componente exista
  });

  // Prueba para verificar que el componente AboutView existe
  it("AboutView should exist", () => {
    const wrapper = shallowMount(AboutView); // Monta el componente AboutView
    expect(wrapper.exists()).toBe(true); // Verifica que el componente exista
  });
});
