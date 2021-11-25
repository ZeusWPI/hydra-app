import { useAxios } from "@vueuse/integrations";
import { defineStore } from "pinia";

export const useTestAPI = defineStore("test.api", () => {
	const test = useAxios("https://jsonplaceholder.typicode.com/todos/1");

	return {
		test,
	};
});
