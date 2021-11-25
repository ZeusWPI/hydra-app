import { useAxios } from "@vueuse/integrations";
import { defineStore } from "pinia";
import { Test } from "./models/test.model";

export const useTestAPI = defineStore("test.api", () => {
	const test = useAxios<Test>("https://jsonplaceholder.typicode.com/todos/1");

	return {
		test,
	};
});
