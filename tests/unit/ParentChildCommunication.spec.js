import { shallowMount } from "@vue/test-utils"; // Importa la función shallowMount de @vue/test-utils
import Parent from "@/components/Parent.vue"; // Importa el componente Parent
import Child from "@/components/Child.vue"; // Importa el componente Child

describe("ParentChild Communication", () => {
  // Prueba para verificar que el mensaje se pasa del Child al Parent
  it("passes message from Child to Parent", async () => {
    const wrapper = shallowMount(Parent); // Monta el componente Parent
    const childComponent = wrapper.findComponent(Child); // Encuentra el componente Child dentro del Parent

    // Emite un evento "sendMessage" desde el Child con el mensaje "Hello Parent!"
    childComponent.vm.$emit("sendMessage", "Hello Parent!");
    await wrapper.vm.$nextTick(); // Espera a que se actualice el DOM

    // Verifica que el texto en el Parent contenga el mensaje recibido
    expect(wrapper.text()).toContain("Received Message: Hello Parent!");
  });
});
