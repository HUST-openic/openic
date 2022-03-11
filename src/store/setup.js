import { defineStore } from "pinia";

export const useStore = defineStore('setup', {
    state: () => {
        return {
            setupPiniaMessage: 'Hello, I am from Pinia!'
        }
    }
})
